import { Box, Typography, Grid, Link } from '@mui/material';
import { makeStyles } from '@mui/styles';
import type { NextPage } from 'next';
import { HeaderBar } from '../components/header-bar';
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
  mainImage: {
    backgroundImage: "url('/img/top.webp')",
    backgroundRepeat: 'no-repeat',
    backgroundPosition: 'center',
    backgroundSize: 'cover',
    width: '100vw',
    height: '50vh',
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
      <main>
        <Box className={styles.mainImage}>
          <Box
            className={styles.mainOpacity}
            display="flex"
            justifyContent="center"
            alignItems="center"
            p={2}
          >
            <Typography variant="h1">{title}</Typography>
          </Box>
        </Box>
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
