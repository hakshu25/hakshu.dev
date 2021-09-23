import { AppBar, Button, Toolbar } from '@mui/material';
import Link from 'next/link';

export const HeaderBar = () => {
  return (
    <AppBar position="sticky">
      <Toolbar>
        <Link href="/" passHref={true}>
          <Button color="inherit">Top</Button>
        </Link>
        <Link href="/blog" passHref={true}>
          <Button color="inherit">Blog</Button>
        </Link>
      </Toolbar>
    </AppBar>
  );
};
