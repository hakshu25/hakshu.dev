import { AppBar, Button, makeStyles, Toolbar, Typography } from '@material-ui/core'

const useStyles = makeStyles(() => ({
  title: {
    flexGrow: 1,
  },
}))

export const HeaderBar = () => {
  const styles = useStyles();

  return (
    <AppBar position="sticky">
      <Toolbar>
        <Typography variant="h5" className={styles.title}>Top</Typography>
        <Button color="inherit">Blog</Button>
      </Toolbar>
    </AppBar>
  )
}