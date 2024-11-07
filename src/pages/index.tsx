import Head from 'next/head';

import Home from "@/templates/Home/Home";

import type { NextPage } from 'next';

const HomePage: NextPage = () => {
  const pageTitle = `AI Humanizer by Abify`;
  const pageDescription = `Convert text to speech with AI Humanizer by Abify`;

  return (
    <>
      <Head>
        <title>{pageTitle}</title>
        <meta name="description" content={pageDescription} />
        <meta property="og:title" content={pageTitle} />
        <meta property="og:description" content={pageDescription} />
      </Head>

      <Home/>
    </>
  );
};

export default HomePage;

