import React from "react";
import Footer from "../../Components/FooterSection/footer";
import Topsellers from "../../Components/Topsellers/Topsellers";
import CategoryText from "../../Components/categories/CategoryText";
import CategoryContainer from "../../Components/categories/CategoryContainer";
import Frontheader from "../../Components/Frontheader/Frontheader";
import Testimonials from "../../Components/Testimonials/Testimonials";
const LandingPage = () => {
  return (
    <div>
      <Frontheader />
      <CategoryText />
      <CategoryContainer />
      <Topsellers />
      <Testimonials />
      <Footer />
    </div>
  );
};

export default LandingPage;
