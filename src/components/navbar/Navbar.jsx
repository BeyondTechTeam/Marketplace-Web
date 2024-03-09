import React from "react";
import { Link } from "react-router-dom";
import agramain from "../../assets/images/agramain.png";
import carticon from "../../assets/images/carticon.jpeg";
// import helpIcon from '../../assets/images/helpIcon.png'
import help from "../../assets/images/help.png";
import search from "../../assets/images/search.png";
import styles from "./Navbar.module.css";

function Navbar() {
  return (
    <nav>
      <img className={styles.logo} src={agramain} alt="logo" />
      <div>
        <Link className={styles.linktags} to="/">
          Home
        </Link>
        <Link className={styles.linktags} to="/shop">
          Shop
        </Link>
        <Link className={styles.linktags} to="/contact">
          Contact
        </Link>
        <Link className={styles.linktags} to="/sell">
          Sell
        </Link>
        <Link className={styles.linktags} to="/checkout">
          Checkout
        </Link>
      </div>
      <img className={styles.carticon} src={carticon} alt="carticon" />
      {/* <img className={styles.helpline} src={helpIcon.png} alt="helpline"/> */}
      <img className={styles.help} src={help} alt="carticon" />
      <img className={styles.search} src={search} alt="carticon" />
    </nav>
  );
}

export default Navbar;
