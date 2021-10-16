import { Grid, Link } from '@mui/material';
import { GitHub } from '../components/svgs/github';
import { Twitter } from '../components/svgs/twitter';

export const FooterLink = () => {
  return (
    <Grid
      container
      justifyContent="center"
      alignItems="center"
      columnSpacing={10}
    >
      <Grid item>
        <Link
          href="https://github.com/flyhighair"
          target="_blank"
          rel="noopener"
          sx={{
            ':hover': {
              opacity: 0.7,
            },
          }}
        >
          <GitHub width={100} height={100} />
        </Link>
      </Grid>
      <Grid item>
        <Link
          href="https://twitter.com/fly_highup_air"
          target="_blank"
          rel="noopener"
          sx={{
            ':hover': {
              opacity: 0.7,
            },
          }}
        >
          <Twitter width={100} height={100} />
        </Link>
      </Grid>
    </Grid>
  );
};
