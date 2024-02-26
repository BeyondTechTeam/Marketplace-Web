import React from "react"

// internal import
import styles from  "./style.module.css"
import Hero from "../../components/HeroSection/hero";



const LandingPage = () => {
  return (
    <div className= {styles.landpage}>
        <Hero />
    </div>
  )
};

export default LandingPage;