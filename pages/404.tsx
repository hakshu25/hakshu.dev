import { Box } from '@material-ui/core';
import { NextPage } from 'next';
import { HeaderBar } from '../components/header-bar';

const Custom404: NextPage = () => {
  return (
    <>
      <HeaderBar />
      <main>
        <Box ml={2} mt={2}>
          <p>ページがありません。</p>
        </Box>
      </main>
    </>
  );
};

export default Custom404;
