import { createClient } from 'microcms-js-sdk';

const apiKey = process.env.CMS_API_KEY as string;

export interface Post {
  id: string;
  title: string;
  body: string;
  publishedAt: string;
  revisedAt: string;
  createdAt: string;
  updatedAt: string;
}

export const blogClient = createClient({
  serviceDomain: 'hakshu-blog',
  apiKey: apiKey,
});
