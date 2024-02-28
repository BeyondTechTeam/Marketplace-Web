import Topsellers from "../../components/Topsellers/Topsellers";
import CategoryText from "../../components/categories/CategoryText";
import CategoryContainer from "../../components/categories/CategoryContainer";

const LandingPage = () => {
  return (
    <div>
      <CategoryText />
      <CategoryContainer />
      <Topsellers />
    </div>
  );
};

export default LandingPage;
