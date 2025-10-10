import Head from "next/head";

export default function Home() {
  return (
    <>
      <Head>
        <title>NikitaApp – Quick Social</title>
        <meta name="description" content="Check out this mini app on Base!" />

        {/* ✅ Farcaster Frame metadata */}
        <meta name="fc:frame" content="vNext" />
        <meta
          name="fc:frame:post_url"
          content="https://nikita-sketch-mock-fyji.vercel.app"
        />
        <meta
          name="fc:frame:image"
          content="https://nikita-sketch-mock-fyji.vercel.app/og-image.png"
        />
        <meta name="fc:frame:button:1" content="Open mini app" />
        <meta name="fc:frame:button:1:action" content="link" />
        <meta
          name="fc:frame:button:1:target"
          content="https://nikita-sketch-mock-fyji.vercel.app"
        />

        {/* ✅ Open Graph / Twitter metadata */}
        <meta property="og:type" content="website" />
        <meta property="og:title" content="NikitaApp – Quick Social" />
        <meta
          property="og:description"
          content="A simple mock mini app built on Base. Connect and share instantly."
        />
        <meta
          property="og:image"
          content="https://nikita-sketch-mock-fyji.vercel.app/og-image.png"
        />
        <meta
          property="og:url"
          content="https://nikita-sketch-mock-fyji.vercel.app"
        />
        <meta property="og:site_name" content="NikitaApp" />

        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content="NikitaApp – Quick Social" />
        <meta
          name="twitter:description"
          content="Check out this mini app on Base!"
        />
        <meta
          name="twitter:image"
          content="https://nikita-sketch-mock-fyji.vercel.app/og-image.png"
        />

        {/* ✅ Favicon */}
        <link
          rel="icon"
          href="https://nikita-sketch-mock-fyji.vercel.app/icon.png"
        />
      </Head>

      <main
        style={{
          minHeight: "100vh",
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          justifyContent: "center",
          backgroundColor: "#6200EA",
          color: "white",
          fontFamily: "system-ui, sans-serif",
          textAlign: "center",
          padding: "2rem",
        }}
      >
        <img
          src="https://nikita-sketch-mock-fyji.vercel.app/icon.png"
          alt="App icon"
          width={100}
          height={100}
          style={{ borderRadius: "20px", marginBottom: "1rem" }}
        />
        <h1 style={{ fontSize: "2rem", marginBottom: "0.5rem" }}>
          Welcome to NikitaApp 👋
        </h1>
        <p style={{ fontSize: "1.1rem", maxWidth: "600px" }}>
          Experience the future of social networking. Connect with friends,
          share moments, and discover communities that matter to you.
        </p>

        <a
          href="https://nikita-sketch-mock-fyji.vercel.app/farcaster.json"
          target="_blank"
          rel="noopener noreferrer"
          style={{
            marginTop: "2rem",
            backgroundColor: "#fff",
            color: "#6200EA",
            padding: "0.75rem 1.5rem",
            borderRadius: "12px",
            fontWeight: "bold",
            textDecoration: "none",
          }}
        >
          View farcaster.json
        </a>
      </main>
    </>
  );
}
