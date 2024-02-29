import React from "react";
import Hero from "../../components/HeroSection/hero";
import Footer from "../../components/FooterSection/footer";
import Topsellers from "../../components/Topsellers/Topsellers";
import CategoryText from "../../components/categories/CategoryText";
import CategoryContainer from "../../components/categories/CategoryContainer";
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
