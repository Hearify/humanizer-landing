import Head from 'next/head';
import { MDXRemote } from 'next-mdx-remote';

import Article from '@/templates/Blog/ArticlePage/Article';
import BlogService from '@/services/BlogService';
import extractHeaders from '@/utils/extractHeaders';
import serializeMarkdown from '@/utils/serializeMarkdown';

import type { MDXRemoteSerializeResult } from 'next-mdx-remote';
import type { GetServerSideProps, NextPage } from 'next';
import type { Article as ArticleType } from '@/types/article';

type Props = {
  article: ArticleType;
  headers: string[];
  mdxSource: MDXRemoteSerializeResult;
};

const ArticlePage: NextPage<Props> = ({ article, headers, mdxSource }) => {
  const mdxContent: MDXRemoteSerializeResult = {
    compiledSource: mdxSource.compiledSource,
    scope: mdxSource.scope,
    frontmatter: mdxSource.frontmatter || {},
  };

  return (
    <>
      <Head>
        <title>{article.title}</title>
        <meta name="description" content={article.description} />
      </Head>
      <Article article={article} headers={headers}>
        <MDXRemote
          compiledSource={mdxContent.compiledSource}
          scope={mdxContent.scope}
          frontmatter={mdxContent.frontmatter}
        />
      </Article>
    </>
  );
};

export const getServerSideProps: GetServerSideProps = async ({ params }) => {
  try {
    const slug = params?.slug as string;
    const mdxText = await BlogService.loadArticleMarkdown(slug);
    const mdxSource = await serializeMarkdown(mdxText);
    const article = await BlogService.loadArticle(slug);
    const headers = extractHeaders(mdxText);

    const sanitizedArticle = JSON.parse(
      JSON.stringify(article, (_, value) => (value === undefined ? null : value)),
    ) as ArticleType;

    return {
      props: {
        article: sanitizedArticle,
        headers,
        mdxSource,
      } satisfies Props,
    };
  } catch (error) {
    if (error instanceof Error) {
      console.error(`Failed to load article: ${error.message}`);
    }
    return {
      notFound: true,
    };
  }
};

export default ArticlePage;
