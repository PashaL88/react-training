import { NavLink } from "react-router-dom";
import AuthMenu from "./AuthMenu/AuthMenu";
import Vector from "../../shared/SVG/Vector.svg";
import cart from "../../shared/SVG/shopping-cart.svg";

import styles from "./Header.module.css";

const Header = () => {
  return (
    <nav className={styles.nav}>
      <button className={styles.button}>
        <img src={Vector} alt="Modal" />
      </button>
      <AuthMenu />
      <NavLink to="/" className={styles.navlink}>
        <img src={cart} alt="cart" />
      </NavLink>
    </nav>
  );
};

export default Header;
