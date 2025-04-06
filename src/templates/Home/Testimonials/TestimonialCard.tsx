import React from 'react';

import styles from '@/templates/Home/Testimonials/TestimonialCard.module.scss';

interface Testimonial {
  id: number;
  quote: string;
  author: string;
  role: string;
  img_path: React.ComponentType<React.SVGProps<SVGSVGElement>>;
}

interface TestimonialCardProps {
  testimonial: Testimonial;
}
const TestimonialCard: React.FC<TestimonialCardProps> = ({ testimonial }) => {
  const SvgIcon = testimonial.img_path;
  return (
    <div className={styles['testimonial-card']}>
      <div className={styles['image-container']}>
        <SvgIcon className={styles.image} />
      </div>
      <p className={styles.quote}>&#34;{testimonial.quote}&#34;</p>
      <div className={styles.authorInfo}>
        <p className={styles.author}>
          {testimonial.author}, {testimonial.role}
        </p>
      </div>
    </div>
  );
};

export default TestimonialCard;
