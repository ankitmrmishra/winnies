import { ImageResponse } from "next/og";

export const runtime = "edge";
export const alt = "Winnies Resort - Luxury Awaits in Kasauli";
export const size = {
  width: 1200,
  height: 630,
};

export default async function Image() {
  return new ImageResponse(
    (
      <div
        style={{
          background:
            "linear-gradient(to bottom, rgba(0,0,0,0.7), rgba(0,0,0,0.9))",
          width: "100%",
          height: "100%",
          display: "flex",
          flexDirection: "column",
          alignItems: "flex-start",
          justifyContent: "center",
          padding: "48px 96px",
          fontFamily: "Inter",
          color: "white",
          backgroundImage: "url(https://winniesresort.vercel.app/hero.jpg)",
          backgroundSize: "cover",
          backgroundPosition: "center",
        }}
      >
        <div
          style={{
            fontSize: 72,
            fontWeight: 700,
            letterSpacing: "-0.025em",
            lineHeight: 1.2,
            marginBottom: 24,
          }}
        >
          Luxury Awaits
          <br />
          in{" "}
          <span
            style={{
              color: "#10B981",
            }}
          >
            Kasauli
          </span>
        </div>
        <div
          style={{
            fontSize: 36,
            fontWeight: 400,
            color: "rgb(229, 231, 235)",
            marginBottom: 40,
          }}
        >
          Discover serenity at Winnies Resort
        </div>
        <div
          style={{
            display: "flex",
            alignItems: "center",
            gap: 16,
          }}
        >
          <div
            style={{
              width: 48,
              height: 48,
              background: "#10B981",
              borderRadius: "50%",
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              fontSize: 24,
              fontWeight: 700,
            }}
          >
            W
          </div>
          <div
            style={{
              fontSize: 28,
              fontWeight: 600,
            }}
          >
            winniesresort.com
          </div>
        </div>
      </div>
    ),
    {
      ...size,
    }
  );
}
