import Image from 'next/image';

import styles from './HumanizeBeyondDetection.module.scss';
import FirstImage from '@/assets/images/humanize_beyond_detection-1.png';
import SecondImage from '@/assets/images/humanize_beyond_detection-2.png';
import FirstImageMobile from '@/assets/images/humanize_beyond_detection-1-mobile.png';
import SecondImageMobile from '@/assets/images/humanize_beyond_detection-2-mobile.png';
import useDeviceDetect from '@/hooks/useDeviceDetect';

const HumanizeBeyondDetection = () => {
  const { isDeviceSmall } = useDeviceDetect('sm');
  return (
    <div className={styles.wrapper}>
      <div className={styles.container}>
        <div className={styles['top-section']}>
          <div className={styles['top-body']}>
            <p className={styles.title}>Humanize Beyond Detection: Abify Provides Original and Authentic Writing</p>
            <div className={styles.paragraphs}>
              <p className={styles.text}>
                Abify doesn&apos;t just bypass AI detectors - it&apos;s designed to make your content unique and
                original. Our advanced AI text humanizer doesn&apos;t just paraphrase; it rewrites and transforms text
                to create authentic, plagiarism-free content that perfectly matches your needs.
              </p>
              <p className={styles.text}>
                Whether creating academic materials, marketing texts, or publishing professional content, Abify ensures
                that your work effortlessly passes all the significant plagiarism checks.
              </p>
            </div>
          </div>
          {isDeviceSmall ? (
            <Image src={FirstImageMobile} alt="Instructionaal Image" className={styles['first-image']} />
          ) : (
            <Image src={FirstImage} alt="Instructionaal Image" className={styles['first-image']} />
          )}
        </div>
        <div className={styles['bottom-section']}>
          {isDeviceSmall ? (
            <Image src={SecondImageMobile} alt="Instructionaal Image" className={styles['second-image']} />
          ) : (
            <Image src={SecondImage} alt="Instructionaal Image" className={styles['second-image']} />
          )}
          <div className={styles['top-body']}>
            <div className={styles.paragraphs}>
              <p className={styles.text}>
                By converting AI to human text seamlessly into natural, human writing, Abify helps you comply with
                copyright standards while increasing the originality and quality of your content.
              </p>
              <p className={styles.text}>
                From students and researchers to marketers and businesses, rely on Abify to deliver hard-to-detect text
                that is yours for the making.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HumanizeBeyondDetection;
