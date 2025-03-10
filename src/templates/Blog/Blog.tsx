import React from 'react';
// import { useRouter } from 'next/router';

import ArrowImage from '../../assets/images/arrow.svg';
import ArticleCards from '@/templates/Blog/ArticleCards/ArticleCards';
import styles from './Blog.module.scss';

import type { ArticlePreview } from '@/types/article';

export type BlogProps = {
  articles: ArticlePreview[];
  // page: number;
  // count: number;
};

const Blog: React.FC<BlogProps> = ({
  articles, //
  // page,
  // count,
}) => {
  // const router = useRouter();
  // const handlePageChange = async (newPage: number): Promise<void> => {
  //   await router.push(
  //     {
  //       pathname: router.pathname,
  //       query: { ...router.query, page: newPage },
  //     },
  //     undefined,
  //     { scroll: true },
  //   );
  // };

  return (
    <div className={styles.wrapper}>
      <div className={styles.container}>
        <div className={styles.content}>
          <div className={styles['title-section']}>
            <div className={styles.title}>Welcome to our blog</div>
            <div className={styles.subtitle}>
              <p>
                Welcome to our blog dedicated to the art of transforming AI-generated text into engaging, humanized
                content!
              </p>
              <p>
                Here, we explore the nuances of language, creativity, and communication, providing you with valuable
                insights and practical tips to enhance your writing.
              </p>
            </div>
          </div>
        </div>
        <ArrowImage />
        <p className={styles['articles-title']}>Articles</p>

        <div className={styles.topics}>
          <div className={styles.list}>
            {articles.map(item => (
              <ArticleCards key={item.slug} article={item} />
            ))}
          </div>
          {/* We don't need pagination for now with juat a few articles. Block below can be used in future */}
          {/* <button className={styles['load-more-btn']} type="button">
          Load More
        </button> */}
          {/* <AppPagination page={page} count={count} onChange={handlePageChange} /> */}
        </div>

        <div className={styles['demo-container']}>
          <p>Let Abify help you write human AI content that resonates and drives results.</p>
          <button className={styles['humanize-btn']} type="button">
            TRY A LIVE DEMO
          </button>
        </div>
      </div>
    </div>
  );
};

export default Blog;
