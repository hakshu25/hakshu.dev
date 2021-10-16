import { Box } from '@mui/material';
import type { NextPage } from 'next';
import { FooterLink } from '../components/FooterLink';
import { HeaderBar } from '../components/HeaderBar';
import { SiteImage } from '../components/SiteImage';

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
