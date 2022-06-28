import { Box } from '@mui/material';
import type { NextPage } from 'next';
import { FooterLink } from '../components/FooterLink';
import { HeaderBar } from '../components/HeaderBar';
import { SiteImage } from '../components/SiteImage';

const Home: NextPage = () => {
  return (
    <>
      <HeaderBar />
      <main className="mx-20 my-10 text-center h-screen">
        <SiteImage />
        <Box mt={4}>
          <FooterLink />
        </Box>
      </main>
    </>
  );
};

export default Home;
