import Head from 'next/head';
import React from 'react';

import Blog from '@/templates/Blog/Blog';
import BlogService from '@/services/BlogService';
import { PAGE_SIZE } from '@/constants/page';

import type { BlogProps } from '@/templates/Blog/Blog';
import type { GetServerSideProps, NextPage } from 'next';

const BlogPage: NextPage<BlogProps> = ({ articles }) => {
  const pageTitle = `Blog — Abify`;
  const pageDescription = `Welcome to our blog dedicated to the art of transforming AI-generated text into engaging, humanized content! Here, we explore the nuances of language, creativity, and communication, providing you with valuable insights and practical tips to enhance your writing.`;
  const pageKeywords = `abify blog, humanized content, AI-generated text, language, creativity, communication, writing tips`;

  return (
    <>
      <Head>
        <title>{pageTitle}</title>
        <meta name="description" content={pageDescription} />
        <meta name="keywords" content={pageKeywords} />
        <meta property="og:title" content={pageTitle} />
        <meta property="og:description" content={pageDescription} />
      </Head>
      <Blog articles={articles} />
      {/* <Blog articles={articles} page={page} count={count} /> */}
    </>
  );
};

export default BlogPage;

export const getServerSideProps: GetServerSideProps<BlogProps> = async context => {
  const page = Number(context.query.page) || 1;
  const articles = await BlogService.loadArticlePreviews();

  return {
    props: {
      page,
      count: Math.ceil(articles.length / PAGE_SIZE),
      articles: articles.slice((page - 1) * PAGE_SIZE, page * PAGE_SIZE),
    },
  };
};
