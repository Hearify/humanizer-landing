import React from 'react';
import Head from 'next/head';
import DOMPurify from 'dompurify';

import type { Article } from '@/types/article';

type ArticleSchemaProps = {
  article: Article;
};

const ArticleSchema: React.FC<ArticleSchemaProps> = ({ article }) => {
  const schemaData = {
    '@context': 'https://schema.org',
    '@type': 'NewsArticle',
    headline: article.title,
    image: article.coverUrl,
    datePublished: article.date,
    author: [
      {
        '@type': 'Person',
        name: article.author.name,
        url: article.author.linkedInUrl,
      },
      {
        '@type': 'Person',
        name: article.editor.name,
        url: article.editor.linkedInUrl,
      },
    ],
  };

  const sanitizedJson = DOMPurify.sanitize(JSON.stringify(schemaData));

  return (
    <Head>
      <script
        key={article.slug}
        type="application/ld+json"
        // eslint-disable-next-line react/no-danger
        dangerouslySetInnerHTML={{
          __html: sanitizedJson,
        }}
      />
    </Head>
  );
};

export default ArticleSchema;
