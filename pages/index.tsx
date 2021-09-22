import type { NextPage } from 'next';
import { Box, Typography, Grid, Link } from '@material-ui/core';
import { makeStyles } from '@material-ui/styles';
import { GitHub } from '../components/svgs/github';
import { Twitter } from '../components/svgs/twitter';
import { HeaderBar } from '../components/header-bar';

const useStyles = makeStyles(() => ({
  title: {
    flexGrow: 1,
  },
  link: {
    '&:hover': {
      opacity: 0.7,
    },
  },
  main: {
    background: "url('/img/top.jpg') no-repeat fixed left bottom",
    width: '100vw',
    height: '60vh',
    color: '#fff',
  },
  mainOpacity: {
    backgroundColor: 'rgba(0, 0, 0, 0.3)',
    width: '100%',
    height: '100%',
  },
}));

const Home: NextPage = () => {
  const styles = useStyles();
  const title = "Hakshu's Website";

  return (
    <>
      <HeaderBar />
      <main className={styles.main}>
        <Box
          className={styles.mainOpacity}
          display="flex"
          justifyContent="center"
          alignItems="center"
          mb={4}
          p={2}
        >
          <Typography variant="h1">{title}</Typography>
        </Box>
        <Grid
          container
          justifyContent="center"
          alignItems="center"
          spacing={10}
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
