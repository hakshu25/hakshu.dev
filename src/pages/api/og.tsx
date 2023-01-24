import { ImageResponse } from '@vercel/og';

export const config = {
  runtime: 'experimental-edge',
};

export default function handler() {
  const title = "Hakshu's Portfolio";
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
}
