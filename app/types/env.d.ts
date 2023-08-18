/// <reference types="node" />

declare namespace NodeJS {
  interface ProcessEnv {
    readonly NODE_ENV: 'development' | 'production' | 'test';
    readonly CMS_API_KEY: string;
    readonly NEXT_PUBLIC_VERCEL_URL: string;
  }
}
