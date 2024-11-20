import Link from 'next/link';
import React from 'react';

const NavLinks: React.FC = () => {
  return (
    <>
      <Link href="#why-choose-us">
        <p>Why Choose Us</p>
      </Link>
      <Link href="#how-abify-works">
        <p>How Abify Works</p>
      </Link>
      <Link href="#features">
        <p>Features</p>
      </Link>
      <Link href="#faq">
        <p>FAQ</p>
      </Link>
    </>
  );
};
export default NavLinks;
