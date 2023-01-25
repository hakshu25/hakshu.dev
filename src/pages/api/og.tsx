import { ImageResponse } from '@vercel/og';
import { siteTitle } from '../../lib/site-info';

export const config = {
  runtime: 'edge',
};

export default function handler() {
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
    {
      width: 1200,
      height: 600,
    }
  );
}
