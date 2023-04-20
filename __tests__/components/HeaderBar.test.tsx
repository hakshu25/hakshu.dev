import { render, screen } from '@testing-library/react';
import { HeaderBar } from '../../app/_components/HeaderBar';

describe('HeaderBar', () => {
  it('renders links', () => {
    render(<HeaderBar />);

    const topLink = screen.getByRole('link', { name: /blog/i });
    const rssLink = screen.getByRole('link', { name: /rss/i });

    expect(topLink).toHaveAttribute('href', '/');
    expect(rssLink).toHaveAttribute('href', '/rss');
  });

  describe('type propによるタイトルの出し分け', () => {
    it('指定しない場合、デフォルトタイトルが表示される', () => {
      render(<HeaderBar />);

      expect(screen.getByText("Hakshu's Blog")).toBeInTheDocument();
    });

    it('blogを指定した場合、デフォルトタイトルが表示される', () => {
      render(<HeaderBar type="blog" />);

      expect(screen.getByText("Hakshu's Blog")).toBeInTheDocument();
    });

    it('errorを指定した場合、エラーページ用タイトルが表示される', () => {
      render(<HeaderBar type="error" />);

      expect(screen.getByText('Error Page')).toBeInTheDocument();
    });
  });
});
