import { makeStyles } from '@material-ui/core';
import { NextPage } from 'next';
import { HeaderBar } from '../components/header-bar'

const useStyles = makeStyles(() => ({
}));

const Blog: NextPage = () => {
  const styles = useStyles();

  return (
    <>
      <HeaderBar />
      <main>
      </main>
    </>
  )
}

export default Blog;
