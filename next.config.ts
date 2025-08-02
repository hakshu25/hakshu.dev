import type { NextConfig } from 'next';

// Bundle analyzer configuration
const withBundleAnalyzer = require('@next/bundle-analyzer')({
  enabled: process.env.ANALYZE === 'true',
});

const nextConfig: NextConfig = {
  reactStrictMode: true,

  // Next.js 15 performance optimizations
  experimental: {
    // Optimize package imports for better tree-shaking
    optimizePackageImports: ['highlight.js', 'microcms-js-sdk'],
  },

  // Turbopack configuration (stable in Next.js 15)
  turbopack: {
    rules: {
      '*.css': ['css'],
    },
  },

  // Image optimization with Next.js 15 improvements
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'images.microcms-assets.io',
        port: '',
        pathname: '/assets/**',
      },
    ],
    // Enable modern image formats
    formats: ['image/webp', 'image/avif'],
    // Optimize image loading
    dangerouslyAllowSVG: false,
    unoptimized: false,
  },

  // Compiler optimizations
  compiler: {
    // Remove console.log in production
    removeConsole: process.env.NODE_ENV === 'production',
  },

  // Headers for better caching and security
  async headers() {
    return [
      {
        source: '/:path*',
        headers: [
          {
            key: 'X-Content-Type-Options',
            value: 'nosniff',
          },
          {
            key: 'X-Frame-Options',
            value: 'DENY',
          },
          {
            key: 'Referrer-Policy',
            value: 'origin-when-cross-origin',
          },
        ],
      },
      {
        // Cache static assets
        source: '/img/:path*',
        headers: [
          {
            key: 'Cache-Control',
            value: 'public, max-age=31536000, immutable',
          },
        ],
      },
    ];
  },
};

export default withBundleAnalyzer(nextConfig);
