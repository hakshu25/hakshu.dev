import { Box } from '@mui/material';
import { NextPage } from 'next';
import { HeaderBar, headerTitles } from '../components/HeaderBar';

const Custom404: NextPage = () => {
  return (
    <>
      <HeaderBar headerTitle={headerTitles.error} />
      <main>
        <Box ml={2} mt={2}>
          <p>ページがありません。</p>
        </Box>
      </main>
    </>
  );
};

export default Custom404;
