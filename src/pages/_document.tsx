import Document, { Html, Head, Main, NextScript } from 'next/document';

class CustomDocument extends Document {
  private siteUrl = process.env.SITE_URL;

  render() {
    return (
      <Html lang="ja">
        <Head>
          <meta name="description" content="Hakshu's WebSite and blog" />
          <meta property="og:image" content={`${this.siteUrl}/api/og`} />
          <link rel="icon" href="/img/icon.webp" />
          <link
            rel="stylesheet"
            href="https://fonts.googleapis.com/css?family=Roboto:300,400,500,700&display=swap"
          />
        </Head>
        <body>
          <Main />
          <NextScript />
        </body>
      </Html>
    );
  }
}

export default CustomDocument;
