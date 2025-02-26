import React from 'react';

import styles from './HowAbifyWork.module.scss';
import useDeviceDetect from '@/hooks/useDeviceDetect';
import DesktopVersionHowAbifyWork from '@/templates/Home/HowAbifyWork/DesktopVersionHowAbifyWork';
import TabletVersionHowAbifyWork from '@/templates/Home/HowAbifyWork/TabletVersionHowAbifyWork';
import PhoneVersionHowAbifyWork from '@/templates/Home/HowAbifyWork/PhoneVersionHowAbifyWork';

const HowAbifyWork = () => {
  const { isDeviceLarge } = useDeviceDetect('md');
  const { isDeviceSmall } = useDeviceDetect('sm');

  return (
    <div className={isDeviceLarge ? styles.wrapper : styles['tablet-wrapper']}>
      <div className={styles.container}>
        <div className={styles.title}>
          <p>How Does Abify Work?</p>
        </div>
        {isDeviceLarge && <DesktopVersionHowAbifyWork />}
        {!isDeviceLarge && !isDeviceSmall && <TabletVersionHowAbifyWork />}
        {isDeviceSmall && <PhoneVersionHowAbifyWork />}
      </div>
    </div>
  );
};

export default HowAbifyWork;
