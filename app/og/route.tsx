import { ImageResponse } from "next/og";
import { siteConfig } from "@/data/site";

export const runtime = "edge";

const WIDTH = 1200;
const HEIGHT = 630;

export async function GET(request: Request) {
  const { searchParams } = new URL(request.url);
  const title = searchParams.get("title") ?? siteConfig.name;

  return new ImageResponse(
    (
      <div
        style={{
          height: "100%",
          width: "100%",
          display: "flex",
          flexDirection: "column",
          justifyContent: "space-between",
          padding: "96px",
          background: "linear-gradient(135deg, #0f172a, #312e81)",
          color: "white",
          position: "relative",
          fontFamily: "Inter, sans-serif",
        }}
      >
        <div
          style={{
            position: "absolute",
            inset: "48px",
            borderRadius: "48px",
            border: "2px solid rgba(255,255,255,0.2)",
            padding: "48px",
            display: "flex",
            flexDirection: "column",
            justifyContent: "space-between",
          }}
        >
          <div style={{ display: "flex", flexDirection: "column", gap: "24px" }}>
            <span
              style={{
                fontSize: "28px",
                textTransform: "uppercase",
                letterSpacing: "0.4em",
                color: "rgba(255,255,255,0.7)",
              }}
            >
              {siteConfig.title}
            </span>
            <h1 style={{ fontSize: "74px", lineHeight: 1.1, fontWeight: 700 }}>{title}</h1>
          </div>
          <div
            style={{
              display: "flex",
              alignItems: "center",
              justifyContent: "space-between",
              fontSize: "28px",
              color: "rgba(255,255,255,0.7)",
            }}
          >
            <div style={{ display: "flex", flexDirection: "column" }}>
              <span style={{ fontWeight: 600, color: "white" }}>{siteConfig.name}</span>
              <span>{siteConfig.location}</span>
            </div>
            <span>{siteConfig.tagline}</span>
          </div>
        </div>
      </div>
    ),
    { width: WIDTH, height: HEIGHT },
  );
}
