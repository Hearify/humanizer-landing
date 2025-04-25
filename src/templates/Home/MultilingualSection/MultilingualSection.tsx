import React from 'react';

import styles from './MultilingualSection.module.scss';
import Languages from '@/templates/Home/MultilingualSection/Languages/Languages';

const MultilingualSection = () => {
  return (
    <div className={styles.wrapper}>
      <div className={styles.container}>
        <div className={styles.body}>
          <p className={styles.title}>Multilingual AI Humanizer</p>
          <div className={styles.paragraphs}>
            <p className={styles.text}>
              <b>Abify</b> supports a wide range of languages, allowing you to <b>create natural, human-like content</b>{' '}
              in nearly any language spoken worldwide.
            </p>
            <p className={styles.text}>
              Our AI text humanizer can <b>enhance text</b> in the following languages, making it sound authentic and
              localized for your global audience:
            </p>
            <p className={styles.text}>
              With Abify, you can transform AI text into humanized content in multiple languages for your diverse,
              global audience — quickly and seamlessly.
            </p>
          </div>
        </div>
        <div className={styles.languages}>
          <Languages />
        </div>
      </div>
    </div>
  );
};

export default MultilingualSection;
