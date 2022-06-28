import '../styles/globals.scss';
import 'highlight.js/scss/atom-one-dark.scss';
import {
  createTheme,
  ThemeProvider,
  Theme,
  StyledEngineProvider,
} from '@mui/material/styles';
import type { AppProps } from 'next/app';
import Head from 'next/head';

declare module '@mui/material/styles' {
  // eslint-disable-next-line @typescript-eslint/no-empty-interface
  type DefaultTheme = Theme;
}

const theme = createTheme();

function MyApp({ Component, pageProps }: AppProps) {
  const title = "Hakshu's Website";

  return (
    <>
      <Head>
        <title>{title}</title>
        <meta
          name="viewport"
          content="minimum-scale=1, initial-scale=1, width=device-width"
        />
      </Head>
      <StyledEngineProvider injectFirst>
        <ThemeProvider theme={theme}>
          <Component {...pageProps} />
        </ThemeProvider>
      </StyledEngineProvider>
    </>
  );
}
export default MyApp;
