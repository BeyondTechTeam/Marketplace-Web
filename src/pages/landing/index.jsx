import React from "react";
import Hero from "../../Components/HeroSection/hero";
import Footer from "../../Components/FooterSection/footer";
import Topsellers from "../../Components/Topsellers/Topsellers";
import CategoryText from "../../Components/categories/CategoryText";
import CategoryContainer from "../../Components/categories/CategoryContainer";
import Frontheader from "../../Components/Frontheader/Frontheader";

const LandingPage = () => {
  return (
    <div>
      <Hero />
      <Frontheader />
      <CategoryText />
      <CategoryContainer />
      <Topsellers />
      <Footer />
    </div>
  );
};

export default LandingPage;
