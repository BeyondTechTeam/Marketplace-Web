

import React, { useState, useEffect } from 'react';
import styles from './hero.module.css';
import herobg2 from '../../assets/hero-images/herobg2.jpg';
import herobg from '../../assets/hero-images/herobg.jpg';
import herobg3 from '../../assets/hero-images/herobg3.jpg';

const Hero = () => {
  const [currentImageIndex, setCurrentImageIndex] = useState(0);
  const images = [herobg2, herobg, herobg3];

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentImageIndex((prevIndex) => (prevIndex + 1) % images.length);
    }, 5000); // Change image every 5 seconds

    return () => clearInterval(interval);
  }, [images.length]);

  return (
    <div className={styles.heroContainer}>
      <img
        className={styles.heroImage}
        src={images[currentImageIndex]}
        alt={`Slide ${currentImageIndex + 1}`}
        style={{ width: '100%', height: '100%' }}
      />
      <h2>
        Fresh Agro Products From The <br />
        Farmer To You
      </h2>
      <p className={styles.descrip}>Where the field meets market.</p>
      <button className={styles.checkout}>
        <a href="/shop">Shop Now</a>
      </button>
    </div>
  );
};

export default Hero;




// import React from "react";
// import styles from "./hero.module.css";

// function Hero() {
//   return (
//     <div className={styles.heroContainer}>
//       <h2>
//         Fresh Agro Products From The <br />
//         Farmer To You
//       </h2>
//       <p className={styles.descrip}>
//         Where the field meets market.
//       </p>
//       <button className={styles.checkout}>
//         <a href="/shop">Shop Now</a>
//       </button>
//     </div>
//   );
// }

// export default Hero;