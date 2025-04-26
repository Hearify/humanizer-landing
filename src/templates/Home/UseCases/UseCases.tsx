import React from 'react';

import styles from './UseCases.module.scss';
import BloggersImage from '@/assets/images/use_cases/bloggers.svg';
import BloggersTabletImage from '@/assets/images/use_cases/bloggers_tablet.svg';
import MarketersImage from '@/assets/images/use_cases/marketers.svg';
import MarketersTabletImage from '@/assets/images/use_cases/marketers_tablet.svg';
import StudentsImage from '@/assets/images/use_cases/students.svg';
import StudentsTabletImage from '@/assets/images/use_cases/students_tablet.svg';
import BusinessImage from '@/assets/images/use_cases/business.svg';
import BusinessTabletImage from '@/assets/images/use_cases/business_tablet.svg';
import AgenciesImage from '@/assets/images/use_cases/agencies.svg';
import AgenciesTabletImage from '@/assets/images/use_cases/agencies_tablet.svg';
import TranslatorsImage from '@/assets/images/use_cases/translators.svg';
import TranslatorsTabletImage from '@/assets/images/use_cases/translators_tablet.svg';
import StartupsImage from '@/assets/images/use_cases/startups.svg';
import StartupsTabletImage from '@/assets/images/use_cases/startups_tablet.svg';
import useDeviceDetect from '@/hooks/useDeviceDetect';

const UseCases = () => {
  const { isDeviceLarge } = useDeviceDetect('md');
  return (
    <div className={styles.wrapper} id="use-cases">
      <div className={styles.container}>
        <div className={styles['title-container']}>
          <p className={styles['styles-text']}>Use Cases</p>
        </div>
        <div className={styles['cards-container']}>
          <div className={styles.card}>
            {isDeviceLarge ? <BloggersImage /> : <BloggersTabletImage />}
            <div className={styles.body}>
              <p className={styles.title}>Content creators</p>
              <p className={styles.description}>
                Write articles, blogs, or posts for social media faster, with the confidence that the text sounds
                natural. Your audience will be interested, and your content will always be unique and relevant.
              </p>
            </div>
          </div>
          <div className={styles.card}>
            {isDeviceLarge ? <MarketersImage /> : <MarketersTabletImage />}

            <div className={styles.body}>
              <p className={styles.title}>Marketers</p>
              <p className={styles.description}>
                Create marketing materials that emotionally impact, increase engagement, and improve conversions. Abify
                is ideal for advertising copy, newsletters, and landing pages.
              </p>
            </div>
          </div>
          <div className={styles.card}>
            {isDeviceLarge ? <StudentsImage /> : <StudentsTabletImage />}
            <div className={styles.body}>
              <p className={styles.title}>Students and researchers</p>
              <p className={styles.description}>
                Transform academic texts into professionally written materials that pass plagiarism checks and look
                authentic. Ideal for essays, term papers, or research papers.
              </p>
            </div>
          </div>
          <div className={styles.card}>
            {isDeviceLarge ? <BusinessImage /> : <BusinessTabletImage />}
            <div className={styles.body}>
              <p className={styles.title}>Business and brands</p>
              <p className={styles.description}>
                Automate professional text creation for your website, emails, or ads. Abify empowers your team to write
                human AI content that maintains your brand’s voice and quality.
              </p>
            </div>
          </div>
          <div className={styles.card}>
            {isDeviceLarge ? <AgenciesImage /> : <AgenciesTabletImage />}
            <div className={styles.body}>
              <p className={styles.title}>Digital agencies</p>
              <p className={styles.description}>
                Save time and resources by processing large numbers of texts in seconds. Abify allows agencies to create
                high-quality content for different clients in any style or tone.
              </p>
            </div>
          </div>
          <div className={styles.card}>
            {isDeviceLarge ? <TranslatorsImage /> : <TranslatorsTabletImage />}
            <div className={styles.body}>
              <p className={styles.title}>Translators</p>
              <p className={styles.description}>
                Make the text not only translated but also adapted to the cultural context. Abify helps you avoid
                literal mistakes and creates content that sounds natural in any language.
              </p>
            </div>
          </div>
          <div className={styles.card}>
            {isDeviceLarge ? <StartupsImage /> : <StartupsTabletImage />}
            <div className={styles.body}>
              <p className={styles.title}>Startups</p>
              <p className={styles.description}>
                Quickly create high-quality content for pitch decks, presentations, or investor materials. Provide text
                that sounds convincing and reflects your idea clearly and professionally.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
export default UseCases;
