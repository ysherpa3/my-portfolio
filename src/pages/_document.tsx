import NextDocument, { Head, Html, Main, NextScript } from "next/document";

export default class Document extends NextDocument {
  render() {
    return (
      <Html lang="en">
        <Head>
          <meta charSet="utf-8" />
          <meta httpEquiv="X-UA-Compatible" content="IE=edge" />
          <meta
            name="description"
            content="Self-taught web developer. I am passionate about responsive UX (user experience) and minimalistic design."
          />
          <meta name="theme-color" content="#3182CE" />
          <link rel="icon" href="/favicons/favicon.svg" />
          <link
            rel="mask-icon"
            href="/favicons/mask-icon.svg"
            color="#000000"
          />
          <link rel="apple-touch-icon" href="/favicons/apple-touch-icon.png" />
          <link rel="manifest" href="/manifest.json" />
        </Head>
        <body>
          <Main />
          <NextScript />
        </body>
      </Html>
    );
  }
}
