<!DOCTYPE html>
<html lang="en">
  <head>
    <meta charset="UTF-8" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />

    <title>NikitaApp – Quick Social</title>
    <meta name="description" content="A simple mock mini app built on Base. Connect and share instantly." />

    <!-- ✅ Open Graph -->
    <meta property="og:title" content="NikitaApp – Quick Social" />
    <meta property="og:description" content="Check out this mini app on Base! Connect and share instantly." />
    <meta property="og:image" content="https://nikita-sketch-mock-fyji.vercel.app/og-image.png" />
    <meta property="og:url" content="https://nikita-sketch-mock-fyji.vercel.app/" />
    <meta property="og:type" content="website" />

    <!-- ✅ Twitter / Farcaster cards -->
    <meta name="twitter:card" content="summary_large_image" />
    <meta name="twitter:title" content="NikitaApp – Quick Social" />
    <meta name="twitter:description" content="A simple mock mini app built on Base." />
    <meta name="twitter:image" content="https://nikita-sketch-mock-fyji.vercel.app/og-image.png" />

    <!-- ✅ Farcaster miniapp metadata -->
    <meta name="fc:frame" content="https://nikita-sketch-mock-fyji.vercel.app/farcaster.json" />

    <!-- ✅ Favicon -->
    <link rel="icon" href="https://nikita-sketch-mock-fyji.vercel.app/icon.png" type="image/png" />

    <!-- ✅ Base Theme Color -->
    <meta name="theme-color" content="#6200EA" />
  </head>

  <body style="margin:0; font-family: system-ui, sans-serif; background-color:#f9f9f9;">
    <main
      style="
        display: flex;
        flex-direction: column;
        align-items: center;
        justify-content: center;
        height: 100vh;
        text-align: center;
        padding: 2rem;
      "
    >
      <img
        src="https://nikita-sketch-mock-fyji.vercel.app/icon.png"
        alt="App Icon"
        width="120"
        height="120"
        style="border-radius: 24px; margin-bottom: 1rem;"
      />
      <h1 style="color:#6200EA; font-size:2rem; margin-bottom:0.5rem;">NikitaApp – Quick Social</h1>
      <p style="max-width:480px; color:#333; line-height:1.6;">
        A simple mock mini app built on Base. Connect, share, and explore communities that matter to you.
      </p>

      <a
        href="https://warpcast.com/~/compose?text=Check+out+this+app"
        target="_blank"
        style="
          display:inline-block;
          background-color:#6200EA;
          color:#fff;
          padding:0.75rem 1.5rem;
          border-radius:12px;
          text-decoration:none;
          margin-top:1.5rem;
          font-weight:600;
          transition:background-color 0.2s ease-in-out;
        "
        onmouseover="this.style.backgroundColor='#4b00b5'"
        onmouseout="this.style.backgroundColor='#6200EA'"
      >
        Share on Farcaster
      </a>
    </main>
  </body>
</html>
