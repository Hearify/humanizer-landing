import Link from 'next/link';
import React from 'react';

type NavLinkProps = {
  closeMenu?: () => void;
  forHeader: boolean;
};

const buttonTextHeader = [
  { href: '/blog', text: 'Blog' },
  { href: '/contact-us', text: 'Contact Us' },
  { href: '/about-us', text: 'About Us' },
];

const buttonTextFooter = [
  { href: '/#use-cases', text: 'Use Cases' },
  { href: '/#how-abify-works', text: 'How Abify Works' },
  { href: '/#features', text: 'Features' },
  { href: '/#faq', text: 'FAQ' },
];

const NavLinks: React.FC<NavLinkProps> = ({ closeMenu, forHeader }) => {
  const links = forHeader ? buttonTextHeader : buttonTextFooter;

  return (
    <>
      {links.map(({ text, href }) => (
        <Link key={text} href={href} onClick={closeMenu}>
          {text}
        </Link>
      ))}
    </>
  );
};
export default NavLinks;
