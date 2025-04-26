import React from 'react';
import Link from 'next/link';

import styles from './FAQSection.module.scss';
import Questions from '@/templates/Home/FAQSection/Questions/Questions';

const FAQSection = () => {
  return (
    <div className={styles.wrapper} id="faq">
      <div className={styles.container}>
        <p className={styles.title}>FAQ</p>
        <Questions />
        <div className={styles.demo}>
          <p className={styles['demo-text']}>
            Let Abify help you write human AI content that resonates and drives results.
          </p>
          <Link href="/#humanize_section" className={styles['humanize-btn']}>
            TRY A LIVE DEMO
          </Link>
        </div>
      </div>
    </div>
  );
};

export default FAQSection;
