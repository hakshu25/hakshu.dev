import { render, screen } from '@testing-library/react';
import { HeaderBar, headerTitles } from '../../components/HeaderBar';

describe('HeaderBar', () => {
  it('renders links', () => {
    render(<HeaderBar headerTitle={headerTitles.about} />);

    const topLink = screen.getByText(/top/i).closest('a');
    const blogLink = screen.getByText(/blog/i).closest('a');

    expect(topLink).toHaveAttribute('href', '/');
    expect(blogLink).toHaveAttribute('href', '/blog');
  });
});
