import React from 'react';

import styles from './HumanizeLoader.module.scss';
import LoaderItem from '@/assets/images/loader.svg';

const items = [1, 2, 3, 4, 5];

const HumanizeLoader = () => {
  return (
    <div className={styles['loading-container']}>
      {items.map(i => (
        <div key={i} className={`${styles.circle} ${styles[`circle-${i}`]}`}>
          <LoaderItem width={48} height={24} alt={`Loader ${i}`} />
        </div>
      ))}
    </div>
  );
};

export default HumanizeLoader;
