"use client";
import { ErrorPage } from "@/2023/ErrorPage/ErrorPage";

export default function Error({
  error,
  reset,
}: {
  error: Error & { digest?: string };
  reset: () => void;
}) {
  return <ErrorPage />;
}
