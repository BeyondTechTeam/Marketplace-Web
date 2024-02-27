import React from "react";
import styles from "./Hero.module.css";

function Hero() {
  return (
    <div className={styles.heroContainer}>
      <h2>
        Fresh Agro Foods from the <br />
        Farmer to You
      </h2>
      <p className={styles.descrip}>
        Lorem ipsum dolor, sit amet consectetur adipisicing elit. Molestias
        excepturi aut tenetur ipsam a facili.
      </p>
      <button className={styles.checkout}>
        <a href="/shop">Check out our Shop now</a>
      </button>
    </div>
  );
}

export default Hero;
