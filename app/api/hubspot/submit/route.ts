import { NextResponse } from "next/server";

export async function POST(req: Request) {
  try {
    const body = await req.json();

    // Validate required fields
    if (
      !body.name ||
      typeof body.name !== "string" ||
      body.name.trim() === ""
    ) {
      return NextResponse.json(
        { error: "Name is required and must be a valid string" },
        { status: 400 }
      );
    }

    if (
      !body.email ||
      typeof body.email !== "string" ||
      body.email.trim() === ""
    ) {
      return NextResponse.json(
        { error: "Email is required and must be a valid string" },
        { status: 400 }
      );
    }

    // Validate email format
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(body.email)) {
      return NextResponse.json(
        { error: "Invalid email format" },
        { status: 400 }
      );
    }

    // Validate phone if provided
    if (body.phone && typeof body.phone !== "string") {
      return NextResponse.json(
        { error: "Phone must be a valid string" },
        { status: 400 }
      );
    }

    // Validate dates if provided
    if (body.checkIn && body.checkOut) {
      const checkInDate = new Date(body.checkIn);
      const checkOutDate = new Date(body.checkOut);

      // Check if dates are valid
      if (isNaN(checkInDate.getTime())) {
        return NextResponse.json(
          { error: "Invalid check-in date" },
          { status: 400 }
        );
      }

      if (isNaN(checkOutDate.getTime())) {
        return NextResponse.json(
          { error: "Invalid check-out date" },
          { status: 400 }
        );
      }

      // Check if check-out is after check-in
      if (checkOutDate <= checkInDate) {
        return NextResponse.json(
          { error: "Check-out date must be after check-in date" },
          { status: 400 }
        );
      }

      // Check if check-in is not in the past
      const today = new Date();
      today.setHours(0, 0, 0, 0);
      checkInDate.setHours(0, 0, 0, 0);

      if (checkInDate < today) {
        return NextResponse.json(
          { error: "Check-in date cannot be in the past" },
          { status: 400 }
        );
      }
    }

    // Validate guests if provided
    if (body.guests) {
      const validGuests = ["1 Guest", "2 Guests", "3 Guests", "4+ Guests"];
      if (!validGuests.includes(body.guests)) {
        return NextResponse.json(
          { error: "Invalid number of guests" },
          { status: 400 }
        );
      }
    }

    // Validate accommodation if provided
    if (body.accommodation) {
      const validAccommodation = ["room", "villa"];
      if (!validAccommodation.includes(body.accommodation.toLowerCase())) {
        return NextResponse.json(
          { error: "Invalid accommodation type" },
          { status: 400 }
        );
      }
    }

    const portalId = process.env.HUBSPOT_PORTAL_ID;
    const formGuid = process.env.HUBSPOT_FORM_GUID;

    const hubspotUrl = `https://api.hsforms.com/submissions/v3/integration/submit/${portalId}/${formGuid}`;

    // Format dates to YYYY-MM-DD if they're ISO strings
    const formatDate = (dateStr: string) => {
      if (!dateStr) return "";
      const date = new Date(dateStr);
      return date.toISOString().split("T")[0];
    };

    const payload = {
      fields: [
        { name: "firstname", value: body.name.trim() },
        { name: "email", value: body.email.trim() },
        ...(body.phone
          ? [{ name: "mobilephone", value: body.phone.trim() }]
          : []),
        ...(body.checkIn
          ? [{ name: "checkintime", value: formatDate(body.checkIn) }]
          : []),
        ...(body.checkOut
          ? [{ name: "checkoutime", value: formatDate(body.checkOut) }]
          : []),
        ...(body.guests ? [{ name: "total_guests", value: body.guests }] : []),
        ...(body.accommodation
          ? [
              {
                name: "room_or_villa",
                value:
                  body.accommodation.charAt(0).toUpperCase() +
                  body.accommodation.slice(1).toLowerCase(),
              },
            ]
          : []),
      ],
      context: {
        pageUri: "https://winnies.in/booking",
        pageName: "Booking Callback",
      },
    };

    const res = await fetch(hubspotUrl, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(payload),
    });

    const text = await res.text();

    if (!res.ok) {
      console.error("HubSpot response:", text);
      return NextResponse.json(
        { error: "Failed to submit to HubSpot" },
        { status: 500 }
      );
    }

    return NextResponse.json({ success: true });
  } catch (err) {
    console.error("Server error:", err);
    return NextResponse.json(
      { error: "Internal server error" },
      { status: 500 }
    );
  }
}
