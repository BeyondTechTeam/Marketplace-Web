import styles from "./CategoryCards.module.css";
function CategoryCards(props) {
  return (
    <div className={styles.container}>
      <img src={props.image} alt="" />
      <h3>{props.cardHeading}</h3>
      <p>{props.cardText}</p>
      <button className={styles.btn}>See more</button>
    </div>
  );
}

export default CategoryCards;
