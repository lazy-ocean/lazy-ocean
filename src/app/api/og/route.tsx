// @ts-nocheck
import { ImageResponse } from "next/og";
import type { NextRequest } from "next/server";
import { getPostsName } from "@/api/getOGmeta";

export const runtime = "edge";

const size = {
  width: 1200,
  height: 630,
};

const contentType = "image/png";

export async function GET(request: NextRequest) {
  const { searchParams } = new URL(request.url);
  const slug = searchParams.get("slug");

  const post = getPostsName(slug as string);

  const fontData = await fetch(
    new URL("SandeMore-Regular.otf", import.meta.url)
  ).then((res) => res.arrayBuffer());

  return new ImageResponse(
    (
      <div
        style={{
          backgroundColor: "#fbf4ec",
          width: "100%",
          height: "100%",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          flexDirection: "column",
          padding: "40px",
          textAlign: "center",
          border: "10px dashed black",
        }}
      >
        {
          <div style={{ display: "flex", gap: "20px", marginBottom: "20px" }}>
            {post.images?.split(",").map((img: string) => (
              <img
                style={{
                  width: "100px",
                }}
                key={img}
                src={`http://localhost:3000/${img}`}
                alt=""
                role="presentation"
              />
            ))}
          </div>
        }
        <p
          style={{
            fontSize: 100,
          }}
        >
          {post.title}
        </p>
        <p
          style={{
            fontSize: 50,
          }}
        >
          by Vladlena Panchenko
        </p>
      </div>
    ),
    {
      ...size,
      fonts: [
        {
          name: "font",
          data: fontData,
          style: "normal",
          weight: 400,
        },
      ],
    }
  );
}
