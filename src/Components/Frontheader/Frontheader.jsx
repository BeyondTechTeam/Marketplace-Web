import React, { useState } from "react";
import "./Frontheader.css";

const Slider = () => {
  const [currentSlide, setCurrentSlide] = useState(0);
  const totalSlides = 2;

  const nextSlide = () => {
    setCurrentSlide(currentSlide === totalSlides - 1 ? 0 : currentSlide + 1);
  };

  const prevSlide = () => {
    setCurrentSlide(currentSlide === 0 ? totalSlides - 1 : currentSlide - 1);
  };

  return (
    <div className="slider-container">
      <button className="slider-arrow prev" onClick={prevSlide}>
        &#10094;
      </button>

      <div className={`slider-item ${currentSlide === 0 ? "active" : ""}`}>
        <div className="content">
          <p className="mini-description">100% Organic Products</p>
          <h2 className="firsth2">
            Welcome To Agra,Where Field Meets Market !
          </h2>
          <p className="description">
            Explore a diverse marketplace connecting farmers and buyers,
            offering a wide range of fresh produce, livestock, equipment, and
            more. Simplify your agricultural transactions with ease and
            reliability .
          </p>
          <button className="explore-btn">Explore Products</button>
        </div>
      </div>

      <div
        className={`slider-item second-slide ${
          currentSlide === 1 ? "active" : ""
        }`}
      >
        <div className="content2">
          <p className="mini-description2">100% Organic Products</p>
          <h2>Buy or Sell any Agro Product Here</h2>
          <p className="description2">
            Your one-stop e-commerce platform for buying and selling all types
            of agricultural products.
          </p>
          <button className="explore-btn2">Visit Our Marketplace</button>
        </div>
      </div>

      <button className="slider-arrow next" onClick={nextSlide}>
        &#10095;
      </button>
    </div>
  );
};

export default Slider;
