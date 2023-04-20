'use client';

import { useEffect } from 'react';
import { ErrorHeader } from './_components/ErrorHeader';

export default function GlobalError({ error }: { error: Error }) {
  useEffect(() => {
    console.error(error);
  }, [error]);

  return (
    <html>
      <body>
        <ErrorHeader />
        <main className="mt-4 ml-4">
          <p>エラーが起きました。メニューからトップに移動してください。</p>
        </main>
      </body>
    </html>
  );
}
