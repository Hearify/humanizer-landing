import Image from 'next/image';
import React from 'react';

import styles from '@/templates/Home/HowAbifyWork/HowAbifyWork.module.scss';
import PhoneFirstStepImage from '@/assets/images/phone-step-1.png';
import StepNumber1 from '@/assets/icons/step-number-1-icon.png';
import PhoneSecondStepImage from '@/assets/images/phone-step-2.png';
import StepNumber2 from '@/assets/icons/step-number-2-icon.png';
import PhoneThirdStepImage from '@/assets/images/phone-step-3.png';
import StepNumber3 from '@/assets/icons/step-number-3-icon.png';
import PhoneFourthStepImage from '@/assets/images/phone-step-4.png';
import StepNumber4 from '@/assets/icons/step-number-4-icon.png';

const PhoneVersionHowAbifyWork = () => {
  return (
    <div className={styles['phone-steps-container']}>
      <div className={styles['phone-step']}>
        <div className={styles['phone-step-image']}>
          <Image src={PhoneFirstStepImage} className={styles['step-image']} alt="First step" />
        </div>
        <div className={styles['step-body']}>
          <div className={styles['step-icon']}>
            <Image src={StepNumber1} alt="First step" />
          </div>
          <div className={styles['step-text']}>
            <p className={styles['step-title']}>Input Your AI-Generated Text</p>
            <p className={styles['step-subtitle']}>Upload your AI-generated content into our easy-to-use platform.</p>
          </div>
        </div>
      </div>
      <div className={styles['phone-step']}>
        <div className={styles['phone-step-image']}>
          <Image src={PhoneSecondStepImage} className={styles['step-image']} alt="First step" />
        </div>
        <div className={styles['step-body']}>
          <div className={styles['step-icon']}>
            <Image src={StepNumber2} alt="First step" />
          </div>
          <div className={styles['step-text']}>
            <p className={styles['step-title']}>Choose Your Tone & Preferences</p>
            <p className={styles['step-subtitle']}>
              Select the tone and style that best fits your needs, whether it&apos;s conversational, professional, or
              creative.
            </p>
          </div>
        </div>
      </div>
      <div className={styles['phone-step']}>
        <div className={styles['phone-step-image']}>
          <Image src={PhoneThirdStepImage} className={styles['step-image']} alt="First step" />
        </div>
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
      <div className={styles['phone-step']}>
        <div className={styles['phone-step-image']}>
          <Image src={PhoneFourthStepImage} className={styles['step-image']} alt="First step" />
        </div>
        <div className={styles['step-body']}>
          <div className={styles['step-icon']}>
            <Image src={StepNumber4} alt="First step" />
          </div>
          <div className={styles['step-text']}>
            <p className={styles['step-title']}>Export & Use</p>
            <p className={styles['step-subtitle']}>
              Once your content is humanized, it&apos;s ready to publish or share—no more awkward or robotic sentences.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PhoneVersionHowAbifyWork;
