import Image from 'next/image';
import React from 'react';

import styles from '@/templates/Home/HowAbifyWork/HowAbifyWork.module.scss';
import FirstStepImage from '@/assets/images/first-step.png';
import StepNumber1 from '@/assets/icons/step-number-1-icon.png';
import BigArrow from '@/assets/images/step-left-arrow.png';
import ThirdStepImage from '@/assets/images/third-step.png';
import StepNumber3 from '@/assets/icons/step-number-3-icon.png';
import SmallArrow from '@/assets/images/step-right-arrow.png';
import SecondStepImage from '@/assets/images/second-step.png';
import StepNumber2 from '@/assets/icons/step-number-2-icon.png';
import FourthStepImage from '@/assets/images/fourth-step.png';
import StepNumber4 from '@/assets/icons/step-number-4-icon.png';

const DesktopVersionHowAbifyWork = () => {
  return (
    <div className={styles['steps-container']}>
      <div className={`${styles['first-third-container']} ${styles.steps}`}>
        <div className={styles.step}>
          <div className={styles['step-image']}>
            <Image src={FirstStepImage} className={styles['step-image']} alt="First step" />
            <div className={styles['step-body']}>
              <div className={styles['step-icon']}>
                <Image src={StepNumber1} alt="First step" />
              </div>
              <div className={styles['step-text']}>
                <p className={styles['step-title']}>Input Your AI-Generated Text</p>
                <p className={styles['step-subtitle']}>
                  Upload your AI-generated content into our easy-to-use platform.
                </p>
              </div>
            </div>
          </div>
        </div>
        <div className={styles['big-arrow']}>
          <Image src={BigArrow} alt="First step" />
        </div>
        <div className={styles.step}>
          <div className={styles['step-image']}>
            <Image src={ThirdStepImage} className={styles['step-image']} alt="First step" />
            <div className={styles['step-body']}>
              <div className={styles['step-icon']}>
                <Image src={StepNumber3} alt="First step" />
              </div>
              <div className={styles['step-text']}>
                <p className={styles['step-title']}>Abify Does the Rest</p>
                <p className={styles['step-subtitle']}>
                  Our advanced AI technology works its magic, rewriting and transforming your text to sound natural and
                  undetectable.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className={`${styles['second-fourth-container']} ${styles.steps}`}>
        <div className={styles['small-arrow']}>
          <Image src={SmallArrow} alt="First step" />
        </div>
        <div className={styles.step}>
          <div className={styles['step-image']}>
            <Image src={SecondStepImage} className={styles['step-image']} alt="First step" />
            <div className={styles['step-body']}>
              <div className={styles['step-icon']}>
                <Image src={StepNumber2} alt="First step" />
              </div>
              <div className={styles['step-text']}>
                <p className={styles['step-title']}>Choose Your Tone & Preferences</p>
                <p className={styles['step-subtitle']}>
                  Select the tone and style that best fits your needs, whether it&apos;s conversational, professional,
                  or creative.
                </p>
              </div>
            </div>
          </div>
        </div>
        <br />
        <br />
        <br />
        <div className={styles['small-arrow']}>
          <Image src={SmallArrow} alt="First step" />
        </div>
        <div className={styles.step}>
          <div className={styles['step-image']}>
            <Image src={FourthStepImage} className={styles['step-image']} alt="First step" />
            <div className={styles['step-body']}>
              <div className={styles['step-icon']}>
                <Image src={StepNumber4} alt="First step" />
              </div>
              <div className={styles['step-text']}>
                <p className={styles['step-title']}>Export & Use</p>
                <p className={styles['step-subtitle']}>
                  Once your content is humanized, it&apos;s ready to publish or share—no more awkward or robotic
                  sentences.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default DesktopVersionHowAbifyWork;
