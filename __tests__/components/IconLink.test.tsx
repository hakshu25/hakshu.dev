import { render, screen } from '@testing-library/react';
import { IconLink } from '../../app/_components/IconLink';

describe('IconLink', () => {
  it('renders github link', () => {
    render(<IconLink iconName={'github'} />);
    const link = screen.getByRole('link').closest('a');

    expect(link).toHaveAttribute('href', 'https://github.com/hakshu25');
  });

  it('renders twitter link', () => {
    render(<IconLink iconName={'twitter'} />);
    const link = screen.getByRole('link').closest('a');

    expect(link).toHaveAttribute('href', 'https://twitter.com/hakshu25');
  });
});
