import { Box } from '@mui/material';
import type { NextPage } from 'next';
import { About } from '../components/About';
import { FooterLink } from '../components/FooterLink';
import { HeaderBar } from '../components/HeaderBar';
import { SeparateLine } from '../components/SeparateLine';
import { SiteImage } from '../components/SiteImage';
import { Skill } from '../components/Skill';

const Home: NextPage = () => {
  return (
    <>
      <HeaderBar />
      <main className="mx-20 my-10 h-screen">
        <SiteImage />
        <div className="sm:mx-16 md:mx-32 lg:mx-64 my-8">
          <About />
        </div>
        <SeparateLine />
        <div className="sm:mx-16 md:mx-32 lg:mx-64 my-8">
          <Skill />
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
