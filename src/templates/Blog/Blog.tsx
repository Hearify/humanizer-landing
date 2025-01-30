import React from 'react';

import styles from './Blog.module.scss';
import ArrowImage from '../../assets/images/arrow.svg';
import ArticleCards from '@/templates/Blog/ArticleCards/ArticleCards';

const Blog = () => {
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
        <ArticleCards />

        <button className={styles['load-more-btn']} type="button">
          Load More
        </button>

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
