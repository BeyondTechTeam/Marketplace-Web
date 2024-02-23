// import React from 'react';
import './Topsellers.css'

import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';


import topSeller1 from '../../assets/img/livestock.jpg';
import topSeller2 from '../../assets/img/Fruits.jpg';
import topSeller3 from '../../assets/img/fertilizer.jpg';

const TopSellers = () => {
  const topSellers = [
    topSeller1,
    topSeller2,
    topSeller3,
    
  ];

  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 3000,
    responsive: [
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 2,
        },
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
        },
      },
    ],
  };

  return (
    <div className="top-sellers">
      <h2>Top Sellers</h2>
      <Slider {...settings}>
        {topSellers.map((image, index) => (
          <div key={index} className='img-container'>
            <img src={image} alt={`Top Seller ${index + 1}`} className='top-seller-img'/>
          </div>
        ))}
      </Slider>
    </div>
  );
};

export default TopSellers;

