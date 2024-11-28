import React from 'react';

import styles from './Home.module.scss';
import SeoContent from '@/templates/Home/SeoContent/SeoContent';

const Home: React.FC = () => {
  return (
    <main className={styles.wrapper}>
      <SeoContent />
    </main>
  );
};

export default Home;
