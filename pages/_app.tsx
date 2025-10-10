import type { AppProps } from 'next/app';
import '../styles/globals.css'; // путь строго такой

function MyApp({ Component, pageProps }: AppProps) {
  return <Component {...pageProps} />;
}

export default MyApp;
