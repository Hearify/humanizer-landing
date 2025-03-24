import React from 'react';
import Slider from 'react-slick';
import Image from 'next/image';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';

import useDeviceDetect from '@/hooks/useDeviceDetect';
import TestimonialCard from '@/templates/Home/Testimonials/TestimonialCard';
import AnnaImg from '../../../assets/images/testimonials/anna.svg';
import MaxImg from '../../../assets/images/testimonials/max.svg';
import KateImg from '../../../assets/images/testimonials/kate.svg';
import AlexImg from '../../../assets/images/testimonials/alex.svg';
import JessyImg from '../../../assets/images/testimonials/jessy.svg';
import NextImage from '../../../assets/icons/arrow-right.png';
import PrevImage from '../../../assets/icons/arrow-left.png';
import styles from './TestimonialSlider.module.scss';

import type { CustomArrowProps } from 'react-slick';

interface Testimonial {
  id: number;
  quote: string;
  author: string;
  role: string;
  img_path: React.ComponentType<React.SVGProps<SVGSVGElement>>;
}

const testimonials: Testimonial[] = [
  {
    id: 1,
    quote:
      "Abify has helped me improve my blog posts by making them more natural and engaging for readers. It's the perfect tool for anyone who wants to create high-quality content quickly.",
    author: 'Anna',
    role: 'blogger',
    img_path: AnnaImg,
  },
  {
    id: 2,
    quote:
      'I was always afraid of AI detectors when I was working on academic texts, but Abify solved this problem. Now I am sure that my work sounds professional and passes plagiarism checks.',
    author: 'Max',
    role: 'PhD student',
    img_path: MaxImg,
  },
  {
    id: 3,
    quote:
      "Thanks to Abify, we have significantly accelerated the creation of advertising texts for our clients. It doesn't just edit, but adapts the text to make it sound the way it should.",
    author: 'Kate',
    role: 'head of a marketing agency',
    img_path: KateImg,
  },
  {
    id: 4,
    quote:
      'Our marketing materials now look much more professional and resonate with our audience. Abify has become an integral part of our content strategy.',
    author: 'Alex',
    role: 'startup owner',
    img_path: AlexImg,
  },
  {
    id: 5,
    quote:
      "Abify helped me quickly adapt texts for different markets thanks to its multilingual support. I don't waste time on manual editing - everything works perfectly.",
    author: 'Jessy',
    role: 'international marketing manager',
    img_path: JessyImg,
  },
];

const SampleNextArrow: React.FC<CustomArrowProps> = ({ className, onClick }) => {
  return <Image className={className} onClick={onClick} src={NextImage} alt="Next" />;
};

const SamplePrevArrow: React.FC<CustomArrowProps> = ({ className, onClick }) => {
  return <Image className={className} onClick={onClick} src={PrevImage} alt="Previous" />;
};

const TestimonialSlider: React.FC = () => {
  const { isDeviceLarge } = useDeviceDetect('md');
  const { isDeviceSmall } = useDeviceDetect('sm');
  let slidesToShow = 2;

  if (isDeviceSmall) {
    slidesToShow = 1;
  } else if (isDeviceLarge) {
    slidesToShow = 3;
  }

  return (
    <div className={styles.testimonialSliderContainer}>
      <div className="slider-container">
        <Slider
          infinite
          slidesToShow={slidesToShow}
          slidesToScroll={1}
          speed={500}
          dots={false}
          nextArrow={<SampleNextArrow />}
          prevArrow={<SamplePrevArrow />}
        >
          {testimonials.map((testimonial: Testimonial) => (
            <TestimonialCard key={testimonial.id} testimonial={testimonial} />
          ))}
        </Slider>
      </div>
    </div>
  );
};

export default TestimonialSlider;
