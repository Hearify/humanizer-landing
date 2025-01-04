import React from 'react';
import Link from 'next/link';

import styles from './UniqueFeatures.module.scss';
import HumanizeIcon from '@/assets/icons/humanize-icon.svg';
import CustomStyleIcon from '@/assets/icons/custom-styles-icon.svg';
import OptimizeSeoIcon from '@/assets/icons/optimize-seo-icon.svg';
import BypassAiIcon from '@/assets/icons/by-pass-ai-icon.svg';
import MultilingualSupportIcon from '@/assets/icons/multilingual-support-icon.svg';
import PlagiarismFreeIcon from '@/assets/icons/plagiarism-free-icon.svg';
import DataPrivacyIcon from '@/assets/icons/data-privacy-icon.svg';
import EasyExportIcon from '@/assets/icons/easy-export-icon.svg';
import FastAndReliableIcon from '@/assets/icons/fast-and-reliable-icon.svg';

const UniqueFeatures = () => {
  return (
    <div className={styles.wrapper} id="features">
      <br />
      <br />
      <div className={styles.container}>
        <div className={styles.title}>Unique Features of Abify</div>
        <div className={styles['cards-container']}>
          <div className={styles.card}>
            <HumanizeIcon />
            <div className={styles.body}>
              <div className={styles.subtitle}>Humanize Your AI Content</div>
              <div className={styles.description}>
                <p className={styles.paragraph}>
                  Acts as a reliable AI to human converter, transforming raw AI text into professional, human-like
                  content.
                </p>
              </div>
            </div>
          </div>
          <div className={styles.card}>
            <CustomStyleIcon />
            <div className={styles.body}>
              <div className={styles.subtitle}>Customizable Tones</div>
              <div className={styles.description}>
                <p className={styles.paragraph}>
                  Redefines how you humanize text, creating a more engaging and relatable tone.
                </p>
              </div>
            </div>
          </div>
          <div className={styles.card}>
            <OptimizeSeoIcon />
            <div className={styles.body}>
              <div className={styles.subtitle}>SEO Optimization</div>
              <div className={styles.description}>
                <p className={styles.paragraph}>
                  Built-in algorithms to improve content visibility in search engines.{' '}
                </p>
              </div>
            </div>
          </div>
          <div className={styles.card}>
            <BypassAiIcon />
            <div className={styles.body}>
              <div className={styles.subtitle}>Bypass AI Detectors</div>
              <div className={styles.description}>
                <p className={styles.paragraph}>Passing AI detector checks.</p>
              </div>
            </div>
          </div>
          <div className={styles.card}>
            <MultilingualSupportIcon />
            <div className={styles.body}>
              <div className={styles.subtitle}>Multilingual Support</div>
              <div className={styles.description}>
                <p className={styles.paragraph}>Support for more than 30 languages.</p>
              </div>
            </div>
          </div>
          <div className={styles.card}>
            <PlagiarismFreeIcon />
            <div className={styles.body}>
              <div className={styles.subtitle}>Plagiarism-Free Content</div>
              <div className={styles.description}>
                <p className={styles.paragraph}>Ensure the uniqueness of the text.</p>
              </div>
            </div>
          </div>
          <div className={styles.card}>
            <DataPrivacyIcon />
            <div className={styles.body}>
              <div className={styles.subtitle}>Data Privacy & Security</div>
              <div className={styles.description}>
                <p className={styles.paragraph}>High level of confidentiality.</p>
              </div>
            </div>
          </div>
          <div className={styles.card}>
            <EasyExportIcon />
            <div className={styles.body}>
              <div className={styles.subtitle}>Easy Export</div>
              <div className={styles.description}>
                <p className={styles.paragraph}>Easy export to various formats.</p>
              </div>
            </div>
          </div>
          <div className={styles.card}>
            <FastAndReliableIcon />
            <div className={styles.body}>
              <div className={styles.subtitle}>Fast & Reliable</div>
              <div className={styles.description}>
                <p className={styles.paragraph}>Instant processing of large text volumes.</p>
              </div>
            </div>
          </div>
        </div>
        <div className={styles['button-container']}>
          <div className={styles.subtitle}>Discover all the features of Abify today!</div>
          <Link href="#humanize_section" className={styles['humanize-btn']}>
            TRY A LIVE DEMO
          </Link>
        </div>
      </div>
    </div>
  );
};

export default UniqueFeatures;
