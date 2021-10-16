import { Box, Typography } from '@mui/material';
import Image from 'next/image';

const title = "Hakshu's Website";

export const SiteImage = () => {
  return (
    <Box>
      <Image
        src="/img/top.webp"
        alt="Picture of tokyo night view"
        width={1920}
        height={949}
        layout="fixed"
      />
      <Typography
        variant="h1"
        sx={{
          color: '#fff',
          width: '100%',
          position: 'absolute',
          top: '50%',
          left: '50%',
          m: 0,
          textAlign: 'center',
          transform: 'translate(-50%, -50%)',
        }}
      >
        {title}
      </Typography>
    </Box>
  );
};
