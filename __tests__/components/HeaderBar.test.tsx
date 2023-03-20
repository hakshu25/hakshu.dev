import { render, screen } from '@testing-library/react';
import { HeaderBar } from '../../src/components/HeaderBar';

describe('HeaderBar', () => {
  it('renders links', () => {
    render(<HeaderBar />);

    const topLink = screen.getByRole('link', { name: /about/i });
    const blogLink = screen.getByRole('link', { name: /blog/i });
    const rssLink = screen.getByRole('link', { name: /rss/i });

    expect(topLink).toHaveAttribute('href', '/');
    expect(blogLink).toHaveAttribute('href', '/blog');
    expect(rssLink).toHaveAttribute('href', '/rss');
  });

  describe('type propによるタイトルの出し分け', () => {
    it('指定しない場合、デフォルトタイトルが表示される', () => {
      render(<HeaderBar />);

      expect(screen.getByText("Hakshu's Portfolio")).toBeInTheDocument();
    });

    it('aboutを指定した場合、デフォルトタイトルが表示される', () => {
      render(<HeaderBar type="about" />);

      expect(screen.getByText("Hakshu's Portfolio")).toBeInTheDocument();
    });

    it('blogを指定した場合、ブログ用タイトルが表示される', () => {
      render(<HeaderBar type="blog" />);

      expect(screen.getByText("Hakshu's Blog")).toBeInTheDocument();
    });

    it('errorを指定した場合、エラーページ用タイトルが表示される', () => {
      render(<HeaderBar type="error" />);

      expect(screen.getByText('Error Page')).toBeInTheDocument();
    });
  });
});
