import { render, screen } from '@testing-library/react';
import { HeaderBar, headerTitles } from '../../src/components/HeaderBar';

describe('HeaderBar', () => {
  it('renders links', () => {
    render(<HeaderBar headerTitle={headerTitles.about} />);

    const topLink = screen.getByRole('link', { name: /about/i });
    const blogLink = screen.getByRole('link', { name: /blog/i });
    const rssLink = screen.getByRole('link', { name: /rss/i });

    expect(topLink).toHaveAttribute('href', '/');
    expect(blogLink).toHaveAttribute('href', '/blog');
    expect(rssLink).toHaveAttribute('href', '/rss');
  });
});
