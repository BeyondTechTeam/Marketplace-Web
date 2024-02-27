import React from "react";
import { Link } from "react-router-dom";
import agramain from "../../assets/img/agramain.png";
import styles from "./Navbar.module.css";
import carticon from "../../assets/img/carticon.png";

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
      </div>
      <img className={styles.carticon} src={carticon} alt="carticon" />
    </nav>
  );
}

export default Navbar;
