"use client";
import { ErrorPage } from "../components/2023/ErrorPage/ErrorPage";

export default function Error({
  error,
  reset,
}: {
  error: Error & { digest?: string };
  reset: () => void;
}) {
  return <ErrorPage />;
}
