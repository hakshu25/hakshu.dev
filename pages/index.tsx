import { Box, Typography, Grid, Link } from '@mui/material';
import { makeStyles } from '@mui/styles';
import type { NextPage } from 'next';
import Image from 'next/image';
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
  siteName: {
    transform: 'translate(-50%, -50%)',
  },
  image: {
    backgroundColor: 'rgba(0, 0, 0, 0.3)',
  },
}));

const Home: NextPage = () => {
  const styles = useStyles();
  const title = "Hakshu's Website";

  return (
    <>
      <HeaderBar />
      <main>
        <Box>
          <Image
            src="/img/top.webp"
            alt="Picture of tokyo night view"
            width={1920}
            height={949}
            layout="fixed"
          />
          <Typography
            className={styles.siteName}
            variant="h1"
            color={'#fff'}
            position={'absolute'}
            top={'50%'}
            left={'50%'}
            width={'100%'}
            m={0}
            textAlign="center"
          >
            {title}
          </Typography>
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
