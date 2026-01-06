import { NextResponse } from "next/server";
import { google } from "googleapis";

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

      if (checkOutDate <= checkInDate) {
        return NextResponse.json(
          { error: "Check-out date must be after check-in date" },
          { status: 400 }
        );
      }

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

    // Format dates to YYYY-MM-DD
    const formatDate = (dateStr: string) => {
      if (!dateStr) return "";
      const date = new Date(dateStr);
      return date.toISOString().split("T")[0];
    };

    // Configure Google Sheets API
    const auth = new google.auth.GoogleAuth({
      credentials: {
        client_email: process.env.GOOGLE_SERVICE_ACCOUNT_EMAIL,
        private_key: process.env.GOOGLE_PRIVATE_KEY?.replace(/\\n/g, "\n"),
      },
      scopes: ["https://www.googleapis.com/auth/spreadsheets"],
    });

    const sheets = google.sheets({ version: "v4", auth });
    const spreadsheetId = process.env.GOOGLE_SHEET_ID;

    // Prepare row data
    const rowData = [
      new Date().toISOString(), // Timestamp
      body.name.trim(),
      body.email.trim(),
      body.phone?.trim() || "",
      body.checkIn ? formatDate(body.checkIn) : "",
      body.checkOut ? formatDate(body.checkOut) : "",
      body.guests || "",
      body.accommodation
        ? body.accommodation.charAt(0).toUpperCase() +
          body.accommodation.slice(1).toLowerCase()
        : "",
    ];

    // Append data to sheet
    await sheets.spreadsheets.values.append({
      spreadsheetId,
      range: "Sheet1!A:H", // Adjust sheet name and range as needed
      valueInputOption: "USER_ENTERED",
      requestBody: {
        values: [rowData],
      },
    });

    return NextResponse.json({ success: true });
  } catch (err) {
    console.error("Server error:", err);
    return NextResponse.json(
      { error: "Internal server error" },
      { status: 500 }
    );
  }
}
