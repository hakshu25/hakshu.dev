import { render } from '@testing-library/react';
import { Ogp, PageType } from '../../src/components/Ogp';

jest.mock('next/head', () => {
  return {
    __esModule: true,
    default: ({ children }: { children: React.ReactNode }) => {
      return <>{children}</>;
    },
  };
});

describe('Ogp', () => {
  afterAll(() => {
    jest.clearAllMocks();
  });

  it('サイトのURLをog:urlに設定する', () => {
    const { getByTestId } = render(<Ogp pageType="blog" />, {
      container: document.head,
    });

    expect(getByTestId('og-url')).toHaveAttribute(
      'content',
      'http://localhost:3000'
    );
  });

  const testCases: [PageType, PageType][] = [
    ['blog', 'blog'],
    ['article', 'article'],
  ];
  it.each(testCases)(
    '渡したpageTypeをog:typeに設定する',
    (pageType, expected) => {
      const { getByTestId } = render(<Ogp pageType={pageType} />, {
        container: document.head,
      });

      expect(getByTestId('og-type')).toHaveAttribute('content', expected);
    }
  );

  it('渡したtitleをog:titleに設定する', () => {
    const { getByTestId } = render(<Ogp pageType="blog" title="test title" />, {
      container: document.head,
    });

    expect(getByTestId('og-title')).toHaveAttribute('content', 'test title');
  });

  it('渡したdescriptionをog:descriptionに設定する', () => {
    const { getByTestId } = render(
      <Ogp pageType="blog" description="test description" />,
      {
        container: document.head,
      }
    );

    expect(getByTestId('og-description')).toHaveAttribute(
      'content',
      'test description'
    );
  });

  it('渡したimageUrlをog:imageに設定する', () => {
    const { getByTestId } = render(
      <Ogp pageType="blog" imageUrl="http://localhost:3000/image" />,
      {
        container: document.head,
      }
    );

    expect(getByTestId('og-image')).toHaveAttribute(
      'content',
      'http://localhost:3000/image'
    );
  });

  it('title, description, imageUrlは渡さないとデフォルト値が設定される', () => {
    const { getByTestId } = render(<Ogp pageType="blog" />, {
      container: document.head,
    });

    expect(getByTestId('og-title')).toHaveAttribute('content', "Hakshu's Blog");
    expect(getByTestId('og-description')).toHaveAttribute(
      'content',
      'Webエンジニアhakshuのブログ'
    );
    expect(getByTestId('og-image')).toHaveAttribute(
      'content',
      'http://localhost:3000/api/og'
    );
  });
});
