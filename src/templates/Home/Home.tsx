import React from 'react';

import styles from './Home.module.scss';
import Humanize from '@/templates/Home/Humanize/Humanize';

const Home: React.FC = () => {
  return (
    <main className={styles.wrapper}>
      <Humanize />
    </main>
  );
};

export default Home;
