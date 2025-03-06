import React from 'react';

import styles from './Home.module.scss';
import Humanize from '@/templates/Home/Humanize/Humanize';
import SeoContent from '@/templates/Home/SeoContent/SeoContent';
import UniqueFeatures from '@/templates/Home/UniqueFeatures/UniqueFeatures';
import HowAbifyWork from '@/templates/Home/HowAbifyWork/HowAbifyWork';
import UseCases from '@/templates/Home/UseCases/UseCases';

const Home: React.FC = () => {
  return (
    <main className={styles.wrapper}>
      <Humanize />
      <UniqueFeatures />
      <HowAbifyWork />
      <UseCases />
      <SeoContent />
    </main>
  );
};

export default Home;
