import { NavLink } from "react-router-dom";

import styles from "./AuthMenu.module.css";

const getActiveLink = ({ isActive }) =>
  isActive ? styles.authLinkActive : styles.navlink;

const AuthMenu = () => {
  return (
    <>
      <NavLink to="/login" className={getActiveLink}>
        Login
      </NavLink>
      <span className={styles.decor}>|</span>
      <NavLink to="/register" className={getActiveLink}>
        Register
      </NavLink>
    </>
  );
};

export default AuthMenu;
