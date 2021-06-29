import React from "react";
import App from "./_app";
import Head from 'next/head'

import Image from 'next/image'
import styles from '../styles/Home.module.css'
import type { AppProps } from 'next/app'




function MyApp({ Component, pageProps }: AppProps) {
  return <Component {...pageProps} />
}

export default MyApp

