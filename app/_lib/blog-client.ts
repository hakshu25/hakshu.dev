import { createClient } from 'microcms-js-sdk';
import { API_KEY } from '../_config';

interface Image {
  url: string;
  height: number;
  width: number;
}

export interface Post {
  id: string;
  title: string;
  body: string;
  image: Image;
  category: string[];
  publishedAt: string;
  revisedAt: string;
  createdAt: string;
  updatedAt: string;
}

export const blogClient = createClient({
  serviceDomain: 'hakshu-blog',
  apiKey: API_KEY,
});
