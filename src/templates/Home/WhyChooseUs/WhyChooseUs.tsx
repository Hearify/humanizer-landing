import React from 'react';

import styles from './WhyChooseUs.module.scss';
import HumanizeIcon from '@/assets/icons/humanize-icon.svg';
import BypassAiIcon from '@/assets/icons/by-pass-ai-icon.svg';
import OptimizeSeoIcon from '@/assets/icons/optimize-seo-icon.svg';
import CustomStyleIcon from '@/assets/icons/custom-styles-icon.svg';
import FastAndReliableIcon from '@/assets/icons/fast-and-reliable-icon.svg';

const WhyChooseUs = () => {
  return (
    <div className={styles.wrapper} id="why-choose-us">
      <br />
      <br />
      <div className={styles.container}>
        <div className={styles.title}>Why Choose Us?</div>
        <div className={styles['cards-container']}>
          <div className={styles.card}>
            <HumanizeIcon />
            <div className={styles.body}>
              <div className={styles.subtitle}>Humanize Your AI Content</div>
              <div className={styles.description}>
                <p className={styles.paragraph}>
                  AI can produce incredible results, but even the best AI models can sound robotic or unnatural.
                </p>
                <p className={styles.paragraph}>
                  <span>Abify</span> transforms AI-generated text, making it flow naturally, with authentic tone,
                  structure, and personality.
                </p>
              </div>
            </div>
          </div>
          <div className={styles.card}>
            <BypassAiIcon />
            <div className={styles.body}>
              <div className={styles.subtitle}>Bypass AI Detectors</div>
              <div className={styles.description}>
                <p className={styles.paragraph}>
                  Avoid detection from AI content detectors without sacrificing quality.
                </p>
                <p className={styles.paragraph}>
                  Our advanced algorithms rewrite and restructure your text to pass AI detection tools while maintaining
                  meaning and nuance.
                </p>
              </div>
            </div>
          </div>
          <div className={styles.card}>
            <OptimizeSeoIcon />
            <div className={styles.body}>
              <div className={styles.subtitle}>Optimized for SEO</div>
              <div className={styles.description}>
                <p className={styles.paragraph}>
                  With <span>Abify</span>, not only does your content feel human, but it&apos;s also optimized for SEO.
                </p>
                <p className={styles.paragraph}>
                  We ensure your text is not just readable but also ranks higher in search engines for improved
                  visibility.
                </p>
              </div>
            </div>
          </div>
          <div className={styles.card}>
            <CustomStyleIcon />
            <div className={styles.body}>
              <div className={styles.subtitle}>Customizable Tones & Styles</div>
              <div className={styles.description}>
                <p className={styles.paragraph}>
                  Whether you need formal, casual, professional, or creative content, <span>Abify</span> adapts to your
                  needs.
                </p>
                <p className={styles.paragraph}>
                  Choose your preferred tone and let our AI humanizer do the rest, making sure the content matches your
                  style and brand voice.
                </p>
              </div>
            </div>
          </div>
          <div className={styles.card}>
            <FastAndReliableIcon />
            <div className={styles.body}>
              <div className={styles.subtitle}>Fast & Reliable</div>
              <div className={styles.description}>
                <p className={styles.paragraph}>Time is money.</p>
                <p className={styles.paragraph}>
                  With <span>Abify</span>, you can humanize large volumes of text in seconds, perfect for writers,
                  marketers, and businesses that need high-quality content fast.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default WhyChooseUs;
