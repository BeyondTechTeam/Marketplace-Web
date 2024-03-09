import React, { useState } from "react";
import "./Testimonials.css";

import avatar1 from "../../assets/avartars/avartar1.jpg";
import avatar2 from "../../assets/avartars/avartar2.jpg";
import avatar3 from "../../assets/avartars/avartar3.jpg";

const Testimonials = () => {
  const [reviews, setReviews] = useState([
    {
      name: "Princess Besiwah",
      review:
        "Great marketplace! I've been using Agra for a while now and I'm very satisfied with the quality of produce.",
      avatar: avatar1,
    },
    {
      name: "Navbar Man",
      review:
        "Agra is fantastic! It's made it so much easier for me to find fresh fruits and vegetables directly from the farmers.",
      avatar: avatar2,
    },
    {
      name: "Abigail O",
      review:
        "Highly recommend Agra to all farmers and buyers. It's efficient, transparent, and supports fair trade.",
      avatar: avatar3,
    },
  ]);

  const handleSubmit = (e) => {
    e.preventDefault();
    const name = e.target.name.value;
    const review = e.target.review.value;

    const avatar = avatar1;
    setReviews([...reviews, { name, review, avatar }]);
    e.target.reset();
  };

  return (
    <div className="testimonials-container">
      <h2 className="testimonials-heading">Testimonials</h2>
      <div className="reviews-container">
        {reviews.map((review, index) => (
          <div key={index} className="review">
            <div className="reviewer-info">
              <img src={review.avatar} alt="Reviewer" className="avatar" />
              <h3 className="reviewer-name">{review.name}</h3>
            </div>
            <p className="review-text">{review.review}</p>
          </div>
        ))}
      </div>
      <div className="form-container">
        <h3 className="leave-review-heading">Leave Your Review</h3>
        <form onSubmit={handleSubmit}>
          <input
            type="text"
            name="name"
            className="input-field"
            placeholder="Your Name"
            required
          />
          <textarea
            name="review"
            className="input-field review-textarea"
            placeholder="Your Review"
            required
          />
          <button type="submit" className="submit-button">
            Submit Review
          </button>
        </form>
      </div>
    </div>
  );
};

export default Testimonials;
