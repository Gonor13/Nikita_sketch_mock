import type { AppProps } from "next/app";
import Head from "next/head";
import "../styles/globals.css";

export default function MyApp({ Component, pageProps }: AppProps) {
  return (
    <>
      <Head>
        <title>NikitaApp – WEN</title>
        <meta name="description" content="A simple Base MiniApp experiment by Gonor" />

        {/* 🟣 Open Graph */}
        <meta property="og:title" content="NikitaApp – WEN" />
        <meta property="og:description" content="A simple Base MiniApp experiment by Gonor" />
        <meta property="og:image" content="https://nikita-sketch-mock-fyji.vercel.app/image.png" />
        <meta property="og:url" content="https://nikita-sketch-mock-fyji.vercel.app" />

        {/* 🟣 Farcaster miniapp meta */}
        <meta name="fc:frame" content="vNext" />
        <meta
          name="fc:miniapp"
          content='{
            "version": "1",
            "imageUrl": "https://nikita-sketch-mock-fyji.vercel.app/image.png",
            "button": {
              "title": "🚀 Launch App",
              "action": {
                "type": "launch_miniapp",
                "name": "NikitaApp",
                "url": "https://nikita-sketch-mock-fyji.vercel.app",
                "splashImageUrl": "https://nikita-sketch-mock-fyji.vercel.app/splash.png",
                "splashBackgroundColor": "#6200EA"
              }
            }
          }'
        />
      </Head>
      <Component {...pageProps} />
    </>
  );
}
