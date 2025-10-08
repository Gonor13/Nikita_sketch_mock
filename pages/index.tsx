import { useEffect, useState } from 'react';

export default function Home() {
  const [mintCount, setMintCount] = useState<number>(124);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    setLoading(true);
    const t = setTimeout(() => {
      setMintCount(124);
      setLoading(false);
    }, 600);
    return () => clearTimeout(t);
  }, []);

  const handleMint = () => setMintCount(prev => prev + 1);

  return (
    <main style={styles.page}>
      <div style={styles.card}>
        <div style={styles.header}>
          <div style={styles.logo}></div>
          <h1 style={styles.title}>Nikita Sketch</h1>
        </div>
        <p style={styles.subtitle}>A simple Web3-style mock mint counter</p>

        <div style={styles.counterWrap}>
          <div style={styles.counterLabel}>Minted</div>
          {loading ? (
            <div style={styles.count}>—</div>
          ) : (
            <div style={styles.count}>{mintCount.toLocaleString()}</div>
          )}
        </div>

        <button style={styles.mintButton} onClick={handleMint}>
          Mint (mock)
        </button>

        <p style={styles.footer}>Connected to: <strong>Mock Network</strong></p>
      </div>
    </main>
  );
}

const styles: { [k: string]: React.CSSProperties } = {
  page: {
    minHeight: '100vh',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    background: 'linear-gradient(180deg, #0f172a 0%, #071029 100%)',
    color: '#e6eef8',
    fontFamily: 'Inter, ui-sans-serif, system-ui, -apple-system, "Segoe UI", Roboto, "Helvetica Neue", Arial',
    padding: '24px'
  },
  card: {
    width: '100%',
    maxWidth: 520,
    padding: '28px',
    borderRadius: 16,
    boxShadow: '0 8px 30px rgba(2,6,23,0.6)',
    background: 'linear-gradient(180deg, rgba(255,255,255,0.03), rgba(255,255,255,0.02))',
    textAlign: 'center'
  },
  header: {
    display: 'flex',
    alignItems: 'center',
    gap: 12,
    justifyContent: 'center'
  },
  logo: {
    width: 48,
    height: 48,
    borderRadius: 12,
    background: 'linear-gradient(135deg,#7c3aed,#06b6d4)',
    boxShadow: '0 4px 14px rgba(92,33,255,0.28)',
  },
  title: { margin: 0, fontSize: 20 },
  subtitle: { marginTop: 8, color: '#bcd3f2' },
  counterWrap: { marginTop: 20, marginBottom: 18 },
  counterLabel: { fontSize: 12, color: '#93c5fd', marginBottom: 6 },
  count: { fontSize: 36, fontWeight: 700 },
  mintButton: {
    marginTop: 10,
    padding: '12px 22px',
    borderRadius: 10,
    border: 'none',
    cursor: 'pointer',
    background: 'linear-gradient(90deg,#06b6d4,#7c3aed)',
    color: '#001023',
    fontWeight: 700,
    boxShadow: '0 8px 20px rgba(12,74,110,0.18)'
  },
  footer: { marginTop: 16, fontSize: 12, color: '#9fbbe8' }
};
