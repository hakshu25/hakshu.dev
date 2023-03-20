import { NextPage } from 'next';
import { ErrorHeader } from '../components/ErrorHeader';

const Custom404: NextPage = () => {
  return (
    <>
      <ErrorHeader />
      <main className="mt-4 ml-4">
        <p>ページが見つかりません。</p>
      </main>
    </>
  );
};

export default Custom404;
