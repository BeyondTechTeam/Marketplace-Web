import React from "react";
import Hero from "../../components/hero/Hero";
import CategoryText from "../../components/categories/CategoryText";
import CategoryContainer from "../../components/categories/CategoryContainer";

function LandingPage() {
  return (
    <div>
      <Hero />
      <CategoryText />
      <CategoryContainer />
    </div>
  );
}

export default LandingPage;
