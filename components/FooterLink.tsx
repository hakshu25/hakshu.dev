import { Grid } from '@mui/material';
import { IconLink } from './IconLink';

export const FooterLink = () => {
  return (
    <Grid
      container
      justifyContent="center"
      alignItems="center"
      columnSpacing={10}
    >
      <Grid item>
        <IconLink iconName={'github'}></IconLink>
      </Grid>
      <Grid item>
        <IconLink iconName={'twitter'}></IconLink>
      </Grid>
    </Grid>
  );
};
