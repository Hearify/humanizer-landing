import React from 'react';
import Link from 'next/link';
import { useRouter } from 'next/router';
import { ChevronRightIcon } from '@heroicons/react/16/solid';

import AuthorCard from '@/templates/Blog/AuthorCard/AuthorCard';
import ArticleCards from '@/templates/Blog/ArticleCards/ArticleCards';
import ArticleSchema from '@/templates/Blog/ArticleSchema/ArticleSchema';
import slugify from '@/utils/slugify';
import styles from '@/templates/Blog/ArticlePage/Article.module.scss';

import type { Article as ArticleType } from '@/types/article';
// import AppBreadcrumbs from '@/components/AppBreadcrumbs/AppBreadcrumbs';

export type ArticleProps = {
  article: ArticleType;
  headers: string[];
  children: React.ReactNode;
};

const Article: React.FC<ArticleProps> = ({
  article, //
  headers,
  children,
}) => {
  const router = useRouter();

  const cleanPath: string = router.asPath.split('#')[0].split('?')[0];

  return (
    <div className={styles.wrapper}>
      <ArticleSchema article={article} />

      <div className={styles.main}>
        <article className={styles.body}>
          {/* <AppBreadcrumbs
          items={[
            { text: t('blog'), href: '/blog' },
            { text: article.headline, href: `/blog/${article.slug}` },
          ]}
        /> */}
          <div className={styles['article-path']}>
            <Link href="/blog">Blog</Link> <ChevronRightIcon width={20} height={20} /> {article.headline}
          </div>
          <div className={styles.authors}>
            {/* eslint-disable jsx-a11y/aria-role */}
            <AuthorCard author={article.author} role="author" />
            <AuthorCard author={article.editor} role="editor" />
          </div>

          <div className={styles.header}>
            <h1 className={styles.title}>{article.headline}</h1>

            <div className={styles.container}>
              <span className={styles.text}>{article.minutesToRead} min read</span>
              <span className={styles.text}>·</span>
              <span className={styles.text}>{article.date}</span>
            </div>
          </div>

          <div className={styles.content}>{children}</div>
          {/* Written by Section */}
          {/* <div className={styles.footer}>
            <div className={styles.about}>
              <div className={styles.aboutContainer}>
                <Image
                  src={article.author.avatarUrl}
                  alt={article.author.name}
                  className={styles.aboutImage}
                  width={100}
                  height={100}
                />
                <h4 className={styles.aboutTitle}>
                  Written by {article.author.name}
                </h4>
              </div>
              <p className={styles.aboutText}>{article.author.aboutMe}</p>
            </div>
          </div> */}
        </article>

        <aside className={styles.sidebar}>
          <h3 className={styles.sidebarTitle}>Table of contents</h3>
          <nav className={styles.sidebarContainer}>
            {headers.map(item => (
              <Link key={item} className={styles.sidebarItem} href={`${cleanPath}#${slugify(item)}`}>
                {item}
              </Link>
            ))}
          </nav>
        </aside>
      </div>

      <div className={styles.suggestions}>
        <p className={styles['related-posts-title']}>Related posts</p>
        <div className={styles.suggestionsList}>
          {article.suggestions.map(suggestion => (
            <ArticleCards key={suggestion.slug} article={suggestion} />
          ))}
        </div>
      </div>
    </div>
  );
};
export default Article;
