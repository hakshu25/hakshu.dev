import { Box } from '@mui/material';
import type { NextPage } from 'next';
import { About } from '../components/About';
import { FooterLink } from '../components/FooterLink';
import { HeaderBar } from '../components/HeaderBar';
import { SeparateLine } from '../components/SeparateLine';
import { SiteImage } from '../components/SiteImage';

const Home: NextPage = () => {
  return (
    <>
      <HeaderBar />
      <main className="mx-20 my-10 h-screen">
        <SiteImage />
        <div className="mx-64 my-8">
          <About />
        </div>
        <SeparateLine />
        <Box mt={4}>
          <FooterLink />
        </Box>
      </main>
    </>
  );
};

export default Home;
