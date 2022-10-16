import type { NextPage } from 'next';
import { About } from '../components/About';
import { FooterLink } from '../components/FooterLink';
import { HeaderBar, headerTitles } from '../components/HeaderBar';
import { SeparateLine } from '../components/SeparateLine';
import { Skill } from '../components/Skill';

const Home: NextPage = () => {
  return (
    <>
      <HeaderBar headerTitle={headerTitles.about} />
      <main className="mx-20 my-10 h-screen">
        <div className="sm:mx-16 md:mx-32 lg:mx-64 my-8">
          <About />
        </div>
        <SeparateLine />
        <div className="sm:mx-16 md:mx-32 lg:mx-64 my-8">
          <Skill />
        </div>
        <SeparateLine />
        <footer className="my-8">
          <FooterLink />
        </footer>
      </main>
    </>
  );
};

export default Home;
