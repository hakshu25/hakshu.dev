import { Grid, Link } from '@mui/material';
import { makeStyles } from '@mui/styles';
import type { NextPage } from 'next';
import { HeaderBar } from '../components/header-bar';
import { SiteImage } from '../components/site-image';
import { GitHub } from '../components/svgs/github';
import { Twitter } from '../components/svgs/twitter';

const useStyles = makeStyles(() => ({
  title: {
    flexGrow: 1,
  },
  link: {
    '&:hover': {
      opacity: 0.7,
    },
  },
}));

const Home: NextPage = () => {
  const styles = useStyles();

  return (
    <>
      <HeaderBar />
      <main>
        <SiteImage />
        <Grid
          container
          justifyContent="center"
          alignItems="center"
          columnSpacing={10}
          mt={4}
        >
          <Grid item>
            <Link
              href="https://github.com/flyhighair"
              target="_blank"
              rel="noopener"
              className={styles.link}
            >
              <GitHub width={100} height={100} />
            </Link>
          </Grid>
          <Grid item>
            <Link
              href="https://twitter.com/fly_highup_air"
              target="_blank"
              rel="noopener"
              className={styles.link}
            >
              <Twitter width={100} height={100} />
            </Link>
          </Grid>
        </Grid>
      </main>
    </>
  );
};

export default Home;
