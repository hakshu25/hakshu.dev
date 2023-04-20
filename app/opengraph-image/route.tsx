import { ImageResponse } from 'next/server';
import { siteTitle } from '../_lib/site-info';

export const runtime = 'edge';
export const alt = 'ブログイメージ画像';
export const size = {
  width: 1200,
  height: 600,
};
export const contentType = 'image/png';

export async function GET() {
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
        {siteTitle}
      </div>
    ),
    size
  );
}
