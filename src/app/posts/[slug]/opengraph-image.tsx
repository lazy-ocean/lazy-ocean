import { ImageResponse } from "next/og";
import { loadPostData } from "@/utils/loadPostData";
import fs from "fs";
import path from "path";
import { fileURLToPath } from "url";

export const runtime = "nodejs";

export const size = {
  width: 1200,
  height: 630,
};

export const contentType = "image/png";

export default async function Image({ params }: { params: { slug: string } }) {
  const { post } = await loadPostData(params.slug);

  const font = await fs.promises.readFile(
    path.join(fileURLToPath(import.meta.url), "../SandeMore-Regular.otf")
  );

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
        <div style={{ display: "flex", gap: "20px", marginBottom: "20px" }}>
          {post.coverImage?.split(",").map((img) => (
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
          data: font,
          style: "normal",
          weight: 400,
        },
      ],
    }
  );
}
