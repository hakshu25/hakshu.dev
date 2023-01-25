import { NextPage } from 'next';
import { HeaderBar, headerTitles } from '../components/HeaderBar';

const Custom404: NextPage = () => {
  return (
    <>
      <HeaderBar headerTitle={headerTitles.error} />
      <main className="mt-4 ml-4">
        <p>ページが見つかりません。</p>
      </main>
    </>
  );
};

export default Custom404;
