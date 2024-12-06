import Link from 'next/link';
import React from 'react';

type NavLinkProps = {
  closeMenu: () => void;
};

const buttonText = [
  { href: '#why-choose-us', text: 'Why Choose Us' },
  { href: '#how-abify-works', text: 'How Abify Works' },
  { href: '#features', text: 'Features' },
  { href: '#faq', text: 'FAQ' },
  { href: '/contact-us', text: 'Contact Us' },
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
