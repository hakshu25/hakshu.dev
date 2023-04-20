import { Post } from '../../app/_lib/blog-client';
import { generateRssXml } from '../../app/_lib/rss';

describe('Rss', () => {
  beforeAll(() => {
    jest
      .useFakeTimers('modern')
      .setSystemTime(new Date('2022-09-25T08:00:00.000Z'));
  });

  afterAll(() => {
    jest.useRealTimers();
  });

  describe('generateRssXml()', () => {
    it('フィードを生成する', () => {
      const siteUrl = 'http://localhost:3000/test';
      const posts: Post[] = [
        {
          id: '2sef2d',
          title: 'ブログ1',
          body: 'ブログ1の中身',
          image: {
            url: 'http://localhost:3000/image1',
            height: 300,
            width: 200,
          },
          category: ['Tech'],
          publishedAt: '2022-06-25T08:13:48.183Z',
          revisedAt: '2022-06-28T08:13:48.184Z',
          createdAt: '2022-06-24T08:13:48.183Z',
          updatedAt: '2022-06-28T08:13:48.183Z',
        },
        {
          id: '3ldjsf',
          title: 'ブログ2',
          body: 'ブログ2の中身',
          image: {
            url: 'http://localhost:3000/image2',
            height: 500,
            width: 600,
          },
          category: ['Tips'],
          publishedAt: '2022-08-25T08:13:48.183Z',
          revisedAt: '2022-08-28T08:13:48.184Z',
          createdAt: '2022-08-24T08:13:48.183Z',
          updatedAt: '2022-08-28T08:13:48.183Z',
        },
      ];

      const xml = generateRssXml(posts, siteUrl);

      expect(xml).toMatchSnapshot();
    });
  });
});
