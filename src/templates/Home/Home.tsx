import React from 'react';

import styles from './Home.module.scss';
import Humanize from '@/templates/Home/Humanize/Humanize';
import SeoContent from '@/templates/Home/SeoContent/SeoContent';
import WhyChooseUs from '@/templates/Home/WhyChooseUs/WhyChooseUs';

const Home: React.FC = () => {
  return (
    <main className={styles.wrapper}>
      <Humanize />
      <WhyChooseUs />
      <SeoContent />
    </main>
  );
};

export default Home;
