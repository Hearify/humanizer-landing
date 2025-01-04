import React from 'react';
import Link from 'next/link';

import styles from './PageFooter.module.scss';
import AbifyFooterLogo from '@/assets/images/footer_logo.svg';
import NavLinks from '@/components/NavLinks/NavLinks';

const PageFooter: React.FC = () => {
  return (
    <div className={styles.wrapper}>
      <div className={styles.content}>
        <Link href="/#humanize_section">
          <AbifyFooterLogo width={96} height={32} alt="Logo" />
        </Link>
        <div className={styles.navigation}>
          <nav className={styles.links}>
            <NavLinks />
          </nav>
          <div className={styles.terms}>
            Be sure to take a look at our <button type="button">Terms of Use</button> and{' '}
            <button type="button">Privacy Policy</button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PageFooter;
