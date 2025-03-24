import React, { useState, useEffect } from 'react';
import cn from 'classnames';
import Link from 'next/link';

import styles from './PageHeader.module.scss';
import AbifyLogo from '@/assets/images/logo.svg';
import useDeviceDetect from '@/hooks/useDeviceDetect';
import NavLinks from '@/components/NavLinks/NavLinks';

const PageHeader: React.FC = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const { isDeviceLarge, isServer } = useDeviceDetect('md');
  const { isDeviceSmall } = useDeviceDetect('sm');

  const toggleMenu = (): void => {
    setIsMenuOpen(!isMenuOpen);
  };

  const closeMenu = (): void => {
    setIsMenuOpen(false);
  };

  useEffect(() => {
    if (isMenuOpen) {
      document.body.classList.add('no-scroll');
    } else {
      document.body.classList.remove('no-scroll');
    }
    return () => {
      document.body.classList.remove('no-scroll');
    };
  }, [isMenuOpen]);

  return (
    <div className={styles.wrapper}>
      <div className={styles.container}>
        <div className={isDeviceLarge ? styles.navigation : styles.phone_navigation}>
          <div className={styles.logo_container}>
            <Link rel="stylesheet" onClick={closeMenu} href="/#humanize_section">
              <AbifyLogo width={96} height={32} />
            </Link>
          </div>
          {!isServer && isDeviceLarge ? (
            <nav className={styles.links}>
              <NavLinks closeMenu={closeMenu} />
            </nav>
          ) : (
            <>
              <div className={styles['burger-wrapper']}>
                {!isDeviceSmall && (
                  <Link href="/#humanize_section" className={styles['humanize-btn']}>
                    TRY A LIVE DEMO
                  </Link>
                )}
                <button
                  type="button"
                  className={cn(styles['burger-btn'], isMenuOpen && styles.hamburgerActive)}
                  aria-label="Burger menu button"
                  onClick={toggleMenu}
                >
                  <span className={styles.bar} />
                  <span className={styles.bar} />
                  <span className={styles.bar} />
                </button>
              </div>
              {isMenuOpen && (
                <div className={cn(styles.drawer, styles.drawerActive)}>
                  <div className={styles.drawerContent}>
                    <NavLinks closeMenu={closeMenu} />
                    {isDeviceSmall && (
                      <Link href="/#humanize_section" className={styles['humanize-btn']}>
                        TRY A LIVE DEMO
                      </Link>
                    )}
                  </div>
                </div>
              )}
              <div className={cn(styles.overlay, isMenuOpen && styles.overlayActive)} />
            </>
          )}
        </div>
        {isDeviceLarge && (
          <Link href="/#humanize_section" className={styles['humanize-btn']}>
            TRY A LIVE DEMO
          </Link>
        )}
      </div>
    </div>
  );
};

export default PageHeader;
