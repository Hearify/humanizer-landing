import React from 'react';
import Link from 'next/link';

import styles from './ArticleCards.module.scss';
import ArticleCardPhoto from '../../../assets/images/photo.svg';
import ArticleCardPhoto1 from '../../../assets/images/photo_1.svg';
import ArticleCardPhoto2 from '../../../assets/images/photo_2.svg';

const ArticleCards = () => {
  return (
    <div className={styles.articles}>
      <div className={styles['article-card']}>
        <ArticleCardPhoto />
        <div className={styles['short-info']}>
          <span className={styles.theme}>Lifestyle</span>
          <span>7 min read</span>
        </div>
        <div className={styles.body}>
          <p className={styles.title}>Worem ipsum dolor sit amet</p>
          <p className={styles.description}>
            Sorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc vulputate libero et velit interdum, ac aliquet
            odio mattis. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos
            himenaeos.
          </p>
        </div>
        <div className={styles['button-container']}>
          <p className={styles.date}>2 Sep, 2025</p>
          <Link className={styles['read-more-btn']} href="/blog/article/1" type="button">
            Read More
          </Link>
        </div>
      </div>
      <div className={styles['article-card']}>
        <ArticleCardPhoto1 />
        <div className={styles['short-info']}>
          <span className={styles.theme}>Lifestyle</span>
          <span>7 min read</span>
        </div>
        <div className={styles.body}>
          <p className={styles.title}>Worem ipsum dolor sit amet</p>
          <p className={styles.description}>
            Sorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc vulputate libero et velit interdum, ac aliquet
            odio mattis. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos
            himenaeos.
          </p>
        </div>
        <div className={styles['button-container']}>
          <p className={styles.date}>2 Sep, 2025</p>
          <Link className={styles['read-more-btn']} href="/blog/article/2" type="button">
            Read More
          </Link>
        </div>
      </div>
      <div className={styles['article-card']}>
        <ArticleCardPhoto2 />
        <div className={styles['short-info']}>
          <span className={styles.theme}>Lifestyle</span>
          <span>7 min read</span>
        </div>
        <div className={styles.body}>
          <p className={styles.title}>Worem ipsum dolor sit amet</p>
          <p className={styles.description}>
            Sorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc vulputate libero et velit interdum, ac aliquet
            odio mattis. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos
            himenaeos.
          </p>
        </div>
        <div className={styles['button-container']}>
          <p className={styles.date}>2 Sep, 2025</p>
          <Link className={styles['read-more-btn']} href="/blog/article/3" type="button">
            Read More
          </Link>
        </div>
      </div>
      <div className={styles['article-card']}>
        <ArticleCardPhoto />
        <div className={styles['short-info']}>
          <span className={styles.theme}>Lifestyle</span>
          <span>7 min read</span>
        </div>
        <div className={styles.body}>
          <p className={styles.title}>Worem ipsum dolor sit amet</p>
          <p className={styles.description}>
            Sorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc vulputate libero et velit interdum, ac aliquet
            odio mattis. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos
            himenaeos.
          </p>
        </div>
        <div className={styles['button-container']}>
          <p className={styles.date}>2 Sep, 2025</p>
          <Link className={styles['read-more-btn']} href="/blog/article/1" type="button">
            Read More
          </Link>
        </div>
      </div>
      <div className={styles['article-card']}>
        <ArticleCardPhoto1 />
        <div className={styles['short-info']}>
          <span className={styles.theme}>Lifestyle</span>
          <span>7 min read</span>
        </div>
        <div className={styles.body}>
          <p className={styles.title}>Worem ipsum dolor sit amet</p>
          <p className={styles.description}>
            Sorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc vulputate libero et velit interdum, ac aliquet
            odio mattis. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos
            himenaeos.
          </p>
        </div>
        <div className={styles['button-container']}>
          <p className={styles.date}>2 Sep, 2025</p>
          <Link className={styles['read-more-btn']} href="/blog/article/2" type="button">
            Read More
          </Link>
        </div>
      </div>
      <div className={styles['article-card']}>
        <ArticleCardPhoto2 />
        <div className={styles['short-info']}>
          <span className={styles.theme}>Lifestyle</span>
          <span>7 min read</span>
        </div>
        <div className={styles.body}>
          <p className={styles.title}>Worem ipsum dolor sit amet</p>
          <p className={styles.description}>
            Sorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc vulputate libero et velit interdum, ac aliquet
            odio mattis. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos
            himenaeos.
          </p>
        </div>
        <div className={styles['button-container']}>
          <p className={styles.date}>2 Sep, 2025</p>
          <Link className={styles['read-more-btn']} href="/blog/article/3" type="button">
            Read More
          </Link>
        </div>
      </div>
      <div className={styles['article-card']}>
        <ArticleCardPhoto />
        <div className={styles['short-info']}>
          <span className={styles.theme}>Lifestyle</span>
          <span>7 min read</span>
        </div>
        <div className={styles.body}>
          <p className={styles.title}>Worem ipsum dolor sit amet</p>
          <p className={styles.description}>
            Sorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc vulputate libero et velit interdum, ac aliquet
            odio mattis. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos
            himenaeos.
          </p>
        </div>
        <div className={styles['button-container']}>
          <p className={styles.date}>2 Sep, 2025</p>
          <Link className={styles['read-more-btn']} href="/blog/article/1" type="button">
            Read More
          </Link>
        </div>
      </div>
      <div className={styles['article-card']}>
        <ArticleCardPhoto1 />
        <div className={styles['short-info']}>
          <span className={styles.theme}>Lifestyle</span>
          <span>7 min read</span>
        </div>
        <div className={styles.body}>
          <p className={styles.title}>Worem ipsum dolor sit amet</p>
          <p className={styles.description}>
            Sorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc vulputate libero et velit interdum, ac aliquet
            odio mattis. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos
            himenaeos.
          </p>
        </div>
        <div className={styles['button-container']}>
          <p className={styles.date}>2 Sep, 2025</p>
          <Link className={styles['read-more-btn']} href="/blog/article/2" type="button">
            Read More
          </Link>
        </div>
      </div>
      <div className={styles['article-card']}>
        <ArticleCardPhoto2 />
        <div className={styles['short-info']}>
          <span className={styles.theme}>Lifestyle</span>
          <span>7 min read</span>
        </div>
        <div className={styles.body}>
          <p className={styles.title}>Worem ipsum dolor sit amet</p>
          <p className={styles.description}>
            Sorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc vulputate libero et velit interdum, ac aliquet
            odio mattis. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos
            himenaeos.
          </p>
        </div>
        <div className={styles['button-container']}>
          <p className={styles.date}>2 Sep, 2025</p>
          <Link className={styles['read-more-btn']} href="/blog/article/3" type="button">
            Read More
          </Link>
        </div>
      </div>
    </div>
  );
};

export default ArticleCards;
