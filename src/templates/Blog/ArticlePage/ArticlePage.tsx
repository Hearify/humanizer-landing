import React from 'react';
import { ChevronRightIcon } from '@heroicons/react/16/solid';
import Link from 'next/link';

import styles from '@/templates/Blog/ArticlePage/ArticlePage.module.scss';
import styles2 from '@/templates/Blog/ArticleCards/ArticleCards.module.scss';
import AuthorAvatar from '@/assets/images/author-avatar.svg';
import ArticleCardPhoto from '@/assets/images/photo.svg';
import ArticleCardPhoto1 from '@/assets/images/photo_1.svg';
import ArticleCardPhoto2 from '@/assets/images/photo_2.svg';
import LinkedInIcon from '@/assets/icons/linkedin.svg';
import InstagramIcon from '@/assets/icons/instagram.svg';
import FacebookIcon from '@/assets/icons/facebook.svg';
import useDeviceDetect from '@/hooks/useDeviceDetect';

interface ArticlePageProps {
  id: string;
}

const ArticlePage: React.FC<ArticlePageProps> = ({ id }) => {
  const { isDeviceLarge, isServer } = useDeviceDetect('md');

  console.log(id);
  return (
    <div className={styles.wrapper}>
      <div className={styles.container}>
        <div className={styles['title-section']}>
          <div className={styles['article-path']}>
            Blog <ChevronRightIcon width={20} height={20} /> How to use AI to create assignments.
          </div>
          <div className={styles['author-container']}>
            <div className={styles['author-image']}>
              <AuthorAvatar />
            </div>
            <div className={styles['author-info']}>
              <div>
                Anna Fox <span className={styles['author-status']}>Author</span>
              </div>
              <div className={styles['author-description']}>AI-enthusiast, Teacher & Mentor at online schools</div>
            </div>
          </div>
          <div className={styles['title-container']}>
            <div className={styles.title}> How to use AI to create assessments</div>
            <div className={styles['article-short-info']}>
              <p>
                7 min read <span className={styles.date}>Jul 20, 2024</span>
              </p>
            </div>
          </div>
          <div className={isDeviceLarge ? styles['lg-table-of-content'] : styles['md-table-of-content']}>
            <p className={styles.title}>Table of contents</p>
            <div className={styles['table-of-content-topics']}>
              <p className={styles.text}>Topic 1</p>
              <p className={styles.text}>Topic 2</p>
            </div>
          </div>
        </div>
        <div className={styles.content}>
          <div className={styles['article-image']}>
            <ArticleCardPhoto className={styles.image} />
            <p className={styles['image-description']}>Photo by author Henry Cooper. You can see more his works here</p>
          </div>
          <div className={styles.topic}>
            <p className={styles['topic-title']}>Topic 1</p>
            <p className={styles['topic-text']}>
              Sorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc vulputate libero et velit interdum, ac
              aliquet odio mattis. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos
              himenaeos.Sorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc vulputate libero et velit
              interdum, ac aliquet odio mattis. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per
              inceptos himenaeos.Sorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc vulputate libero et velit
              interdum, ac aliquet odio mattis. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per
              inceptos himenaeos.Sorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc vulputate libero et velit
              interdum, ac aliquet odio mattis. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per
              inceptos.
            </p>
            <div className={styles['article-image']}>
              <ArticleCardPhoto2 className={styles.image} />
              <p className={styles['image-description']}>
                Photo by author Henry Cooper. You can see more his works herePhoto by author Henry Cooper. You can see
                more his works here
              </p>
            </div>
          </div>
          <div className={styles.topic}>
            <p className={styles['topic-title']}>Topic 2</p>
            <p className={styles['topic-text']}>
              Sorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc vulputate libero et velit interdum, ac
              aliquet odio mattis. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos
              himenaeos.Sorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc vulputate libero et velit
              interdum, ac aliquet odio mattis. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per
              inceptos himenaeos.Sorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc vulputate libero et velit
              interdum, ac aliquet odio mattis. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per
              inceptos himenaeos.Sorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc vulputate libero et velit
              interdum, ac aliquet odio mattis. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per
              inceptos.
            </p>
            <div className={styles['article-image']}>
              <ArticleCardPhoto1 className={styles.image} />
              <p className={styles['image-description']}>
                Photo by author Henry Cooper. You can see more his works herePhoto by author Henry Cooper. You can see
                more his works here
              </p>
            </div>
            <p className={styles['topic-text']}>
              Sorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc vulputate libero et velit interdum, ac
              aliquet odio mattis. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos
              himenaeos.Sorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc vulputate libero et velit
              interdum, ac aliquet odio mattis. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per
              inceptos himenaeos.Sorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc vulputate libero et velit
              interdum, ac aliquet odio mattis. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per
              inceptos himenaeos.Sorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc vulputate libero et velit
              interdum, ac aliquet odio mattis. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per
              inceptos.
            </p>
            <div className={styles['article-quote']}>
              <p>
                <span>”</span>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc vulputate libero et velit
                interdum, ac aliquet odio mattis.<span>”</span>
              </p>
              <div className={styles['article-quote-author']}>
                <p>-Katya Hwiljowa, Marketing specialist</p>
              </div>
            </div>
            <p className={styles['topic-text']}>
              Sorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc vulputate libero et velit interdum, ac
              aliquet odio mattis. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos
              himenaeos.Sorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc vulputate libero et velit
              interdum, ac aliquet odio mattis. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per
              inceptos himenaeos.Sorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc vulputate libero et velit
              interdum, ac aliquet odio mattis. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per
              inceptos himenaeos.Sorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc vulputate libero et velit
              interdum, ac aliquet odio mattis. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per
              inceptos.
            </p>
            <div className={styles['written-by']}>
              <div className={styles['author-image']}>
                <AuthorAvatar />
              </div>
              <div className={styles['author-info']}>
                <div>Written by Anna Fox</div>
              </div>
            </div>
            <p className={styles['topic-text']}>
              Sorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc vulputate libero et velit interdum, ac
              aliquet odio mattis. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos
              himenaeos.Sorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc vulputate libero et velit
              interdum, ac aliquet odio mattis. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per
              inceptos himenaeos.Sorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc vulputate libero et velit
              interdum, ac aliquet odio mattis. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per
              inceptos himenaeos.Sorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc vulputate libero et velit
              interdum, ac aliquet odio mattis. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per
              inceptos.
            </p>
            <div className={styles.socials}>
              <LinkedInIcon />
              <InstagramIcon />
              <FacebookIcon />
            </div>
          </div>
        </div>
        <div className={styles['related-articles']}>
          <div className={styles.title}>
            <p>Related articles</p>
          </div>
          <div className={styles2.articles}>
            <div className={styles2['article-card']}>
              <ArticleCardPhoto />
              <div className={styles2['short-info']}>
                <span className={styles2.theme}>Lifestyle</span>
                <span>7 min read</span>
              </div>
              <div className={styles2.body}>
                <p className={styles2.title}>Worem ipsum dolor sit amet</p>
                <p className={styles2.description}>
                  Sorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc vulputate libero et velit interdum, ac
                  aliquet odio mattis. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos
                  himenaeos himenaeos.
                </p>
              </div>
              <div className={styles2['button-container']}>
                <p className={styles2.date}>2 Sep, 2025</p>
                <Link className={styles2['read-more-btn']} href="/blog/article/3" type="button">
                  Read More
                </Link>
              </div>
            </div>
            <div className={styles2['article-card']}>
              <ArticleCardPhoto />
              <div className={styles2['short-info']}>
                <span className={styles2.theme}>Lifestyle</span>
                <span>7 min read</span>
              </div>
              <div className={styles2.body}>
                <p className={styles2.title}>Worem ipsum dolor sit amet</p>
                <p className={styles2.description}>
                  Sorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc vulputate libero et velit interdum, ac
                  aliquet odio mattis. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos
                  himenaeos himenaeos.
                </p>
              </div>
              <div className={styles2['button-container']}>
                <p className={styles2.date}>2 Sep, 2025</p>
                <Link className={styles2['read-more-btn']} href="/blog/article/1" type="button">
                  Read More
                </Link>
              </div>
            </div>
            <div className={styles2['article-card']}>
              <ArticleCardPhoto />
              <div className={styles2['short-info']}>
                <span className={styles2.theme}>Lifestyle</span>
                <span>7 min read</span>
              </div>
              <div className={styles2.body}>
                <p className={styles2.title}>Worem ipsum dolor sit amet</p>
                <p className={styles2.description}>
                  Sorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc vulputate libero et velit interdum, ac
                  aliquet odio mattis. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos
                  himenaeos himenaeos.
                </p>
              </div>
              <div className={styles2['button-container']}>
                <p className={styles2.date}>2 Sep, 2025</p>
                <Link className={styles2['read-more-btn']} href="/blog/article/1" type="button">
                  Read More
                </Link>
              </div>
            </div>
          </div>
          <div className={styles['demo-container']}>
            <p>Let Abify help you write human AI content that resonates and drives results.</p>
            <button className={styles['humanize-btn']} type="button">
              TRY A LIVE DEMO
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ArticlePage;
