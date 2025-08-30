"use client";

import { useEffect } from "react";

export default function GlobalError({
  error,
  reset,
}: {
  error: Error;
  reset: () => void;
}) {
  useEffect(() => {
    console.error(error);
  }, [error]);

  return (
    <html>
      <body className="flex flex-col items-center justify-center h-screen text-center">
        <h1 className="text-4xl font-bold mb-4">Something went wrong!</h1>
        <p className="mb-6">{error.message}</p>
        <button
          onClick={() => reset()}
          className="px-6 py-2 bg-red-600 text-white rounded-lg"
        >
          Try Again
        </button>
      </body>
    </html>
  );
}
