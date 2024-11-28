import Head from 'next/head';

import Home from '@/templates/Home/Home';

import type { NextPage } from 'next';

const HomePage: NextPage = () => {
  const pageTitle = `AI Humanizer for Authentic Content - Write Human AI with Abify`;
  const pageDescription = ` Humanize AI content with Abify, the humanizer that turns robotic results into natural, human writing. Bypass AI detectors, create plagiarism-free content, and write human AI text for marketing, blogging, or business — all in seconds.`;

  return (
    <>
      <Head>
        <title>{pageTitle}</title>
        <meta name="description" content={pageDescription} />
        <meta property="og:title" content={pageTitle} />
        <meta property="og:description" content={pageDescription} />
      </Head>

      <Home />
    </>
  );
};

export default HomePage;
