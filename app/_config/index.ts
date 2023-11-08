export const API_KEY = process.env.CMS_API_KEY;

let siteUrl = '';
if (process.env.NODE_ENV === 'development' || process.env.NODE_ENV === 'test') {
  siteUrl = `http://${process.env.NEXT_PUBLIC_VERCEL_URL}`;
} else {
  siteUrl = `https://${process.env.NEXT_PUBLIC_VERCEL_URL}`;
}

export const SITE_URL = siteUrl;
