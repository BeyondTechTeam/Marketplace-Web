import styles from "./CategoryCards.module.css";
import { Link } from "react-router-dom";
function CategoryCards(props) {
  return (
    <div className={styles.container}>
      <img src={props.image} alt="" />
      <h3>{props.cardHeading}</h3>
      <p>{props.cardText}</p>
      <button className={styles.btn}>
        <a href="/shop">
        Shop now</a>
      </button>
    </div>
  );
}

export default CategoryCards;
