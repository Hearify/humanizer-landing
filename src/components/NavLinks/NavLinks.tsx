import Link from 'next/link';
import React from 'react';

type NavLinkProps = {
  closeMenu?: () => void;
};

const buttonText = [
  { href: '#features', text: 'Features' },
  { href: '#how-abify-works', text: 'How Abify Works' },
  { href: '#use-cases', text: 'Use Cases' },
  { href: '#abify-vs-competitors', text: 'Abify vs Competitors' },
  { href: '#faq', text: 'FAQ' },
  // { href: '/contact-us', text: 'Contact Us' },
  // { href: '/about-us', text: 'About Us' },
];

const NavLinks: React.FC<NavLinkProps> = ({ closeMenu }) => {
  return (
    <>
      {buttonText.map(({ text, href }) => (
        <Link key={text} href={href} onClick={closeMenu}>
          {text}
        </Link>
      ))}
    </>
  );
};
export default NavLinks;
