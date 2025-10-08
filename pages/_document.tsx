import { Html, Head, Main, NextScript } from "next/document";

export default function Document() {
  return (
    <Html lang="en">
      <Head>
        <meta name="description" content="A simple mock mini app built on Base. Connect and share instantly." />

        {/* ✅ Open Graph */}
        <meta property="og:title" content="NikitaApp – Quick Social" />
        <meta property="og:description" content="Check out this mini app on Base! Connect and share instantly." />
        <meta property="og:image" content="https://nikita-sketch-mock-fyji.vercel.app/og-image.png" />
        <meta property="og:url" content="https://nikita-sketch-mock-fyji.vercel.app/" />
        <meta property="og:type" content="website" />

        {/* ✅ Twitter / Farcaster cards */}
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content="NikitaApp – Quick Social" />
        <meta name="twitter:description" content="A simple mock mini app built on Base." />
        <meta name="twitter:image" content="https://nikita-sketch-mock-fyji.vercel.app/og-image.png" />

        {/* ✅ Farcaster miniapp metadata */}
        <meta name="fc:frame" content="https://nikita-sketch-mock-fyji.vercel.app/farcaster.json" />

        {/* ✅ Favicon */}
        <link rel="icon" href="https://nikita-sketch-mock-fyji.vercel.app/icon.png" type="image/png" />

        {/* ✅ Theme Color */}
        <meta name="theme-color" content="#6200EA" />
      </Head>
      <body style={{ margin: 0, fontFamily: "system-ui, sans-serif", backgroundColor: "#f9f9f9" }}>
        <Main />
        <NextScript />
      </body>
    </Html>
  );
}
