import CategoryCards from "./CategoryCards";
import cow from "../../assets/img/cow.jpg";
import onion from "../../assets/img/onion.jpg";
import tree from "../../assets/img/tree.jpg";
import tractor from "../../assets/img/tractor.jpg";
import styles from "./CategoryContainer.module.css";
function CategoryContainer() {
  return (
    <div className={styles.container}>
      <CategoryCards
        image={cow}
        cardHeading="Dairy Products"
        cardText=" Discover a world of flavors and explore the finest selection of wholesome dairy delights."
      />
      <CategoryCards
        image={onion}
        cardHeading="Fresh Vegetables"
        cardText=" Discover a bountiful assortment of locally sourced, seasonal produce that will elevate your culinary. "
      />
      <CategoryCards
        image={tree}
        cardHeading="Tree Plants"
        cardText=" Explore our selection and bring life, shade, and a touch of elegance to your outdoor spaces."
      />
      <CategoryCards
        image={tractor}
        cardHeading="Farm Equipments"
        cardText="Browse through our selection to find the perfect tools that will streamline your farming."
      />
    </div>
  );
}

export default CategoryContainer;
