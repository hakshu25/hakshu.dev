import { Box } from '@mui/material';
import type { NextPage } from 'next';
import { FooterLink } from '../components/footer-link';
import { HeaderBar } from '../components/header-bar';
import { SiteImage } from '../components/site-image';

const Home: NextPage = () => {
  return (
    <>
      <HeaderBar />
      <main>
        <SiteImage />
        <Box mt={4}>
          <FooterLink />
        </Box>
      </main>
    </>
  );
};

export default Home;
