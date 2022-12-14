import { ImageResponse } from '@vercel/og';
import { NextRequest } from 'next/server';

export const config = {
  runtime: 'experimental-edge',
};

export default function handler(req: NextRequest) {
  try {
    const { searchParams } = new URL(req.url);
    const hasTitle = searchParams.has('title');
    const title = hasTitle
      ? searchParams.get('title')?.slice(0, 100)
      : "Hakshu's Portfolio";
    return new ImageResponse(
      (
        <div
          style={{
            fontSize: 128,
            color: 'white',
            background: '#28293E',
            width: '100%',
            height: '100%',
            display: 'flex',
            textAlign: 'center',
            alignItems: 'center',
            justifyContent: 'center',
          }}
        >
          {title}
        </div>
      ),
      {
        width: 1200,
        height: 600,
      }
    );
  } catch (e: unknown) {
    if (e instanceof Error) {
      console.error(e.message);
    }

    return new Response(`Failed to generate the image`, {
      status: 500,
    });
  }
}
