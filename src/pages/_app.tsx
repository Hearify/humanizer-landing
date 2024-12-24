import React from 'react';
import Head from 'next/head';
import { Nunito, Caveat } from 'next/font/google';

import PageLayout from '@/templates/PageLayout/PageLayout';
import '@/styles/globals.scss';

import type { AppProps } from 'next/app';

const nunito = Nunito({
  subsets: ['latin'],
  variable: '--font-nunito',
});

const caveat = Caveat({
  subsets: ['latin'],
  weight: '400',
  variable: '--font-caveat',
});

// Suppress useLayoutEffect (and its warnings) when not running in a browser.
if (typeof window === 'undefined') {
  React.useLayoutEffect = () => {};
}

/* eslint-disable react/jsx-props-no-spreading */
const App = ({ Component, pageProps }: AppProps) => {
  return (
    <>
      <Head>
        <meta
          name="viewport"
          content="minimum-scale=1, maximum-scale=5, initial-scale=1, width=device-width, shrink-to-fit=no, viewport-fit=cover"
        />
        <meta property="og:type" content="website" />
        <meta property="og:site_name" content="Abify" />
        <meta key="og:image" property="og:image" content={`${process.env.NEXT_PUBLIC_BASE_URL}/main-image.png`} />
        <link rel="icon" href="/favicon.ico" />
        <link rel="prefetch" href="/humanize_bg.png" as="image" />
        <link rel="prefetch" href="/contact_us.png" as="image" />

        <meta name="robots" content="index, follow" />
      </Head>

      <div className={`${nunito.variable} ${caveat.variable}`}>
        <PageLayout>
          <Component {...pageProps} />
        </PageLayout>
      </div>
    </>
  );
};

export default App;
