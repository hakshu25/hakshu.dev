import { render, screen } from '@testing-library/react';
import { HeaderBar } from '../../components/HeaderBar';

describe('HeaderBar', () => {
  it('renders links', () => {
    render(<HeaderBar />);

    const topLink = screen.getByText(/top/i).closest('a');
    const blogLink = screen.getByText(/blog/i).closest('a');

    expect(topLink).toHaveAttribute('href', '/');
    expect(blogLink).toHaveAttribute('href', '/blog');
  });
});
