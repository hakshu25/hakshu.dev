import { AppBar, Button, makeStyles, Toolbar } from '@material-ui/core'
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
  )
}