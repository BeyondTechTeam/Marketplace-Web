import Topsellers from "../../components/Topsellers/Topsellers";
import CategoryText from "../../components/categories/CategoryText";
import CategoryContainer from "../../components/categories/CategoryContainer";
import Frontheader from "../../Components/Frontheader/Frontheader";

const LandingPage = () => {
  return (
    <div>
      <Frontheader />
      <CategoryText />
      <CategoryContainer />
      <Topsellers />
    </div>
  );
};

export default LandingPage;
