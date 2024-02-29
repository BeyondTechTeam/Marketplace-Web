import React from "react";
import "./Topsellers.css";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faShoppingCart } from "@fortawesome/free-solid-svg-icons";

import topSeller1 from "../../assets/img/Carrots.jpg";
import topSeller2 from "../../assets/img/Cocoa.jpg";
import topSeller3 from "../../assets/img/Chicken3.jpg";
import topSeller4 from "../../assets/img/Localrice.webp";
import topSeller5 from "../../assets/img/Eggs.jpg";
import topSeller6 from "../../assets/img/Equipment2.jpg";

const TopSellers = () => {
  const topSellers = [
    {
      image: topSeller1,
      category: "Fruits and Vegetables",
      description: "Fresh fruits and vegetables from local farm",
      price: 50,
      rating: 4,
    },

    {
      image: topSeller2,
      category: "Fresh Produce",
      description: "Freshly produced ",
      price: 90,
      rating: 5,
    },

    {
      image: topSeller3,
      category: "Livestock",
      description: "High-quality livestock",
      price: 250,
      rating: 5,
    },

    {
      image: topSeller4,
      category: "Grains",
      description: "Locally made grains",
      price: 170,
      rating: 5,
    },

    {
      image: topSeller5,
      category: "Eggs",
      description: "Fresh and affordable Eggs",
      price: 60,
      rating: 5,
    },

    {
      image: topSeller6,
      category: "Equipment2",
      description: "Highly quality equipments",
      price: 1200,
      rating: 5,
    },
  ];

  const settings = {
    dots: true,
    infinite: true,
    arrows: true,
    speed: 500,
    slidesToShow: 4,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 3000,
    responsive: [
      { breakpoint: 768, settings: { slidesToShow: 2 } },
      { breakpoint: 480, settings: { slidesToShow: 1 } },
    ],
  };

  return (
    <div className="top-sellers">
      <h2>Top Sellers Products</h2>
      <Slider {...settings}>
        {topSellers.map((product, index) => (
          <div key={index} className="slide-container">
            <div className="img-container">
              <img
                src={product.image}
                alt={`Top Seller ${index + 1}`}
                className="top-seller-img"
              />
              <div className="product-details">
                <div className="product-category">{product.category}</div>
                <div className="product-description">{product.description}</div>
                <div className="product-price">GHC {product.price}</div>
                <div className="product-rating">
                  {[...Array(product.rating)].map((_, index) => (
                    <span key={index} className="star">
                      &#9733;
                    </span>
                  ))}
                </div>
                <div className="product-favorite">
                  <span className="love-icon">&#x2764;</span>
                </div>
              </div>
            </div>
          </div>
        ))}
      </Slider>
    </div>
  );
};

export default TopSellers;
