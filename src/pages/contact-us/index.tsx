import Head from 'next/head';
import React from 'react';

import ContactUs from '@/templates/ContactUs/ContactUs';

import type { NextPage } from 'next';

const ContactUsPage: NextPage = () => {
  const pageTitle = `Contact Us — Abify`;
  const pageDescription = `We’d love to hear from you! Whether you have general questions, business inquiries, or need media support, our team at Abify is here to assist. Get in touch with us via email or follow us on social media for updates and support.`;
  const pageKeywords = `abify contact, general inquiries, business inquiries, media inquiries, customer support, follow us`;

  return (
    <>
      <Head>
        <title>{pageTitle}</title>
        <link rel="preload" href="/contact_about_us_bg.png" as="image" />
        <meta name="description" content={pageDescription} />
        <meta name="keywords" content={pageKeywords} />
        <meta property="og:title" content={pageTitle} />
        <meta property="og:description" content={pageDescription} />
      </Head>

      <ContactUs />
    </>
  );
};

export default ContactUsPage;
