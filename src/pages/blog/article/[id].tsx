import { useRouter } from 'next/router';
import Head from 'next/head';
import React from 'react';

import ArticlePage from '@/templates/Blog/ArticlePage/ArticlePage';

const Article = () => {
  const pageTitle = `Articles — Abify`;
  const pageDescription = `We’d love to hear from you! Whether you have general questions, business inquiries, or need media support, our team at Abify is here to assist. Get in touch with us via email or follow us on social media for updates and support.`;
  const pageKeywords = `abify contact, general inquiries, business inquiries, media inquiries, customer support, follow us`;

  const router = useRouter();
  const { id } = router.query;

  const parsedId = id && !Array.isArray(id) ? id : 'Loading...';

  return (
    <>
      <Head>
        <title>{pageTitle}</title>
        <meta name="description" content={pageDescription} />
        <meta name="keywords" content={pageKeywords} />
        <meta property="og:title" content={pageTitle} />
        <meta property="og:description" content={pageDescription} />
      </Head>

      <ArticlePage id={parsedId} />
    </>
  );
};

export default Article;
