import React from 'react';

import styles from './ContactUs.module.scss';

const ContactUs: React.FC = () => {
  const contactInfo = [
    {
      title: 'Business inquiries',
      description:
        'Interested in partnering with us, or exploring B2B solutions for your organization? Contact our business team to discuss how Abify can meet your needs.',
      email: 'info@humanizemyai.com',
    },
    {
      title: 'General inquiries',
      description:
        'Have a question about Abify or how we can help you streamline your testing and learning processes? Reach out to us at:',
      email: 'info@humanizemyai.com',
    },
    {
      title: 'Media & press',
      description: 'For media inquiries, interviews, or press releases, please contact:',
      email: 'info@humanizemyai.com',
    },
  ];

  return (
    <main className={styles.wrapper}>
      <h1 className={styles.title}>Contact us</h1>
      <p className={styles.description}>
        We&apos;d love to hear from you! We value communication and are always ready to help you. Whether you want to
        learn more about our platform, need support, or want to explore partnership opportunities, our team is always
        just a message away. Let us know how we can help you!
      </p>
      <ul className={styles.list}>
        {contactInfo.map(({ title, description, email }) => (
          <li key={title} className={styles.item}>
            <h2 className={styles.itemTitle}>{title}</h2>
            <p className={styles.itemDescription}>{description}</p>
            <div className={styles.link}>
              <a href={`mailto:${email}`}>Email: {email}</a>
            </div>
          </li>
        ))}
      </ul>
    </main>
  );
};

export default ContactUs;
