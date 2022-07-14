import { NavLink } from "react-router-dom";

import styles from "./AuthMenu.module.css";

const getActiveLink = ({ isActive }) =>
  isActive ? styles.authLinkActive : styles.navlink;

const AuthMenu = () => {
  return (
    <>
      <NavLink to="/products" className={getActiveLink}>
        Login
      </NavLink>
      <span className={styles.decor}>|</span>
      <NavLink to="/" className={getActiveLink}>
        Password
      </NavLink>
    </>
  );
};

export default AuthMenu;
