// components/CardSlider.js
import React from 'react';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import styles from '../../CardSlider.module.css'

const CardSlider = () => {
  const settings = {
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 3000,
    pauseOnHover: false,
    arrows: false,
  };

  const cards = [
    { icon: '🌟', title: 'Card 1', description: 'Description for card 1' },
    { icon: '🌍', title: 'Card 2', description: 'Description for card 2' },
    { icon: '🛠️', title: 'Card 3', description: 'Description for card 3' },
    { icon: '📈', title: 'Card 4', description: 'Description for card 4' },
    // Add more cards as needed
  ];

  return (
    <div className={styles.sliderContainer}>
      <Slider {...settings}>
        {cards.map((card, index) => (
          <div key={index} className={styles.card}>
            <div className={styles.icon}>{card.icon}</div>
            <h3 className={styles.title}>{card.title}</h3>
            <p className={styles.description}>{card.description}</p>
          </div>
        ))}
      </Slider>
    </div>
  );
};

export default CardSlider;
