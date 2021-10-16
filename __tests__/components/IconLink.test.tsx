import { render, screen } from '@testing-library/react';
import { IconLink } from '../../components/IconLink';

describe('IconLink', () => {
  it('renders github link', () => {
    render(<IconLink iconName={'github'} />);
    const link = screen.getByRole('link').closest('a');

    expect(link).toHaveAttribute('href', 'https://github.com/flyhighair');
  });

  it('renders twitter link', () => {
    render(<IconLink iconName={'twitter'} />);
    const link = screen.getByRole('link').closest('a');

    expect(link).toHaveAttribute('href', 'https://twitter.com/fly_highup_air');
  });
});
