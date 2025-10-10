import { Html, Head, Main, NextScript } from "next/document";

export default function Document() {
  return (
    <Html lang="en">
      <Head>
        {/* OG / Meta tags for Farcaster & Base */}
        <meta property="og:title" content="NikitaApp – Web3 Social Mini App" />
        <meta property="og:description" content="WEN? Connect and share on-chain moments." />
        <meta property="og:image" content="https://nikita-sketch-mock.vercel.app/image.png" />
        <meta name="fc:frame" content="vNext" />

        {/* Favicon / icon fallback */}
        <link rel="icon" href="/icon.png" />
      </Head>
      <body>
        <Main />
        <NextScript />
      </body>
    </Html>
  );
}
