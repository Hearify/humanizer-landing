import React from 'react';

import styles from './Home.module.scss';
import Humanize from '@/templates/Home/Humanize/Humanize';
import SeoContent from '@/templates/Home/SeoContent/SeoContent';

const Home: React.FC = () => {
  return (
    <main className={styles.wrapper}>
      <Humanize />
      <SeoContent />
    </main>
  );
};

export default Home;
