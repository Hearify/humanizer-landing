import TestimonialSlider from '@/templates/Home/Testimonials/TestimonialSlider';
import styles from './Testimonials.module.scss';

const Testimonials = () => {
  return (
    <div className={styles.wrapper}>
      <div className={styles.container}>
        <div className={styles['title-container']}>
          <p>Testimonials</p>
        </div>
        <TestimonialSlider />
      </div>
    </div>
  );
};
export default Testimonials;
