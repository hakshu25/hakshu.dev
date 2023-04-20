'use client';

import { useEffect } from 'react';
import { ErrorHeader } from './_components/ErrorHeader';

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
      <body>
        <ErrorHeader />
        <main className="mt-4 ml-4">
          <p>エラーが起きました</p>
          <button onClick={() => reset()}>Try again</button>
        </main>
      </body>
    </html>
  );
}
