import React from 'react';

import styles from './ContactUs.module.scss';
import BusinessIcon from '@/assets/icons/contact-us/business.svg';
import GeneralIcon from '@/assets/icons/contact-us/general.svg';
import MediaIcon from '@/assets/icons/contact-us/media.svg';

const ContactUs: React.FC = () => {
  const contactInfo = [
    {
      title: 'Business inquiries',
      description:
        'Interested in partnering with us, or exploring B2B solutions for your organization? Contact our business team to discuss how Abify can meet your needs.',
      email: 'info@humanizemyai.com',
      img: BusinessIcon,
    },
    {
      title: 'General inquiries',
      description:
        'Have a question about Abify or how we can help you streamline your testing and learning processes? Reach out to us at:',
      email: 'info@humanizemyai.com',
      img: GeneralIcon,
    },
    {
      title: 'Media & press',
      description: 'For media inquiries, interviews, or press releases, please contact:',
      email: 'info@humanizemyai.com',
      img: MediaIcon,
    },
  ];

  return (
    <div className={styles.wrapper}>
      <div className={styles.container}>
        <div className={styles.body}>
          <p className={styles.title}>Contact us</p>
          <div className={styles.paragraphs}>
            <p className={styles.description}>
              We&apos;d love to hear from you! We value communication and are always ready to help you.
            </p>
            <p>
              Whether you want to learn more about our platform, need support, or want to explore partnership
              opportunities, our team is always just a message away. Let us know how we can help you!
            </p>
          </div>
        </div>
        <div className={styles.cards}>
          {contactInfo.map(({ title, description, email, img: Icon }) => (
            <div key={title} className={styles.card}>
              <Icon width={48} height={48} />
              <div className={styles['card-body']}>
                <p className={styles.title}>{title}</p>
                <p className={styles.description}>{description}</p>
                <a className={styles.email} href={`mailto:${email}`}>
                  Email: {email}
                </a>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default ContactUs;
