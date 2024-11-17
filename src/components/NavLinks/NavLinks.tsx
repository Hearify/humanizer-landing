import Link from 'next/link';
import React from 'react';

const NavLinks = () => {
  return (
    <>
      <Link href="#whyChooseUs">
        <p>Why Choose Us</p>
      </Link>
      <Link href="#howAbifyWorks">
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
