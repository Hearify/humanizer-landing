import React from 'react';
import Head from 'next/head';
import { useRouter } from 'next/router';
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
  const router = useRouter();

  const baseUrl = process.env.NEXT_PUBLIC_BASE_URL?.replace(/\/$/, '');
  const cleanPath = router.asPath.split('#')[0].split('?')[0];
  const canonicalEnUrl = `${baseUrl}${cleanPath === '/' ? '' : cleanPath}`;
  const canonicalUkUrl = `${baseUrl}/uk${cleanPath === '/' ? '' : cleanPath}`;

  const canonicalUrl = router.locale === 'uk' ? canonicalUkUrl : canonicalEnUrl;

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
        <link rel="preload" href="/src/assets/images/humanize_bg.png" as="image/png" />
        <link rel="preload" href="/src/assets/images/contact_us.png" as="image/png" />

        <link rel="canonical" href={canonicalUrl} />

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
