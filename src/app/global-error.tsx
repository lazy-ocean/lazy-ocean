"use client";
import { ErrorPage } from "@/2023/ErrorPage/ErrorPage";

export default function GlobalError({
  error,
  reset,
}: {
  error: Error & { digest?: string };
  reset: () => void;
}) {
  return (
    <html>
      <body>
        <ErrorPage />
      </body>
    </html>
  );
}
