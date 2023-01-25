import type { NextPage } from 'next';
import { About } from '../components/About';
import { CommonMeta } from '../components/CommonMeta';
import { FooterInfo } from '../components/FooterInfo';
import { FooterLink } from '../components/FooterLink';
import { HeaderBar, headerTitles } from '../components/HeaderBar';
import { SeparateLine } from '../components/SeparateLine';
import { Skill } from '../components/Skill';

const Home: NextPage = () => {
  return (
    <>
      <CommonMeta pageType="website" />
      <HeaderBar headerTitle={headerTitles.about} />
      <main className="mx-20 my-10">
        <div className="sm:mx-16 md:mx-32 lg:mx-64 my-8">
          <About />
        </div>
        <SeparateLine />
        <div className="sm:mx-16 md:mx-32 lg:mx-64 my-8">
          <Skill />
        </div>
        <SeparateLine />
      </main>
      <footer className="my-8">
        <FooterLink />
        <div className="mt-6 flex justify-center">
          <FooterInfo />
        </div>
      </footer>
    </>
  );
};

export default Home;
