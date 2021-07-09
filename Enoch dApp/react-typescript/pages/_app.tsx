
import "../styles/bootstrap.min.css";
import "../styles/global.css";

import "../styles/dashboard-header.css";
import "../styles/dashboard-style.css";
import "../styles/style.css";

import "../styles/signup-signin-style.css";
import '../styles/other-style.css';
import "../styles/responsive.css";

import type { AppProps } from 'next/app'

function MyApp({ Component, pageProps }: AppProps) {
  return <Component {...pageProps} />
}
export default MyApp
