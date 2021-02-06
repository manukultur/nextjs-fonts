import Document, { Html, Head, Main, NextScript } from "next/document";

class MyDocument extends Document {
  static async getInitialProps(ctx) {
    const initialProps = await Document.getInitialProps(ctx);
    return { ...initialProps };
  }

  render() {
    return (
      <Html lang="de">
        <Head>
          <link
            rel="preload"
            href="/fonts/Inter-VariableFont_slnt,wght.ttf"
            as="font"
            type="font/woff2"
            crossOrigin="anonymous"
          />
          <link
            rel="preload"
            href="/fonts/PlayfairDisplay-VariableFont_wght.ttf"
            as="font"
            type="font/ttf"
            crossOrigin="anonymous"
          />
          <link
            rel="preload"
            href="/fonts/PlayfairDisplay-Italic-VariableFont_wght.ttf"
            as="font"
            type="font/ttf"
            crossOrigin="anonymous"
          />
          <meta charSet="utf-8" key="charset" />
        </Head>
        <body>
          <Main />
          <NextScript />
        </body>
      </Html>
    );
  }
}

export default MyDocument;
