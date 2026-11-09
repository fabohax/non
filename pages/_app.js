import React from 'react';
import Head from 'next/head';
import { Chakra_Petch } from 'next/font/google';
import '../src/app/globals.css';

// Import the CSS files for the Google Fonts
import 'typeface-roboto';
import 'typeface-roboto-mono';
import 'typeface-rajdhani';

const chakraPetch = Chakra_Petch({ subsets: ['latin'], weight: ['300', '400', '500', '600', '700'] });

function App({ Component, pageProps }) {
  
  return (
    <>
      <Head>
        <title>NON20 — La anomalía del 20 %</title>
        <link rel="icon" href="/non20.png" type="image/png" />
        <link rel="apple-touch-icon" href="/non20.png" />
      </Head>
      <div className={chakraPetch.className}>
        <Component {...pageProps} />
      </div>
    </>
  );
}
  
export default App;
