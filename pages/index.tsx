export default function Home() {
  return (
    <main
      style={{
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "center",
        height: "100vh",
        textAlign: "center",
        padding: "2rem",
      }}
    >
      <img
        src="https://nikita-sketch-mock-fyji.vercel.app/icon.png"
        alt="App Icon"
        width={120}
        height={120}
        style={{ borderRadius: 24, marginBottom: "1rem" }}
      />
      <h1 style={{ color: "#6200EA", fontSize: "2rem", marginBottom: "0.5rem" }}>NikitaApp – Quick Social</h1>
      <p style={{ maxWidth: 480, color: "#333", lineHeight: 1.6 }}>
        A simple mock mini app built on Base. Connect, share, and explore communities that matter to you.
      </p>
      <a
        href="https://warpcast.com/~/compose?text=Check+out+this+app"
        target="_blank"
        style={{
          display: "inline-block",
          backgroundColor: "#6200EA",
          color: "#fff",
          padding: "0.75rem 1.5rem",
          borderRadius: "12px",
          textDecoration: "none",
          marginTop: "1.5rem",
          fontWeight: 600,
        }}
      >
        Share on Farcaster
      </a>
    </main>
  );
}
