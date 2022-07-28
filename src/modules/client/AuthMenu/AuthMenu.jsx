import { NavLink } from "react-router-dom";
import { useContext } from "react";
import { langContext } from "../../../langContext";
import locale from "./locale.json";

import styles from "./AuthMenu.module.css";

const getActiveLink = ({ isActive }) =>
  isActive ? styles.authLinkActive : styles.navlink;

const AuthMenu = () => {
  const { lang } = useContext(langContext);
  return (
    <>
      <NavLink to="/login" className={getActiveLink}>
        {locale.login[lang]}
      </NavLink>
      <span className={styles.decor}>|</span>
      <NavLink to="/register" className={getActiveLink}>
        {locale.register[lang]}
      </NavLink>
    </>
  );
};

export default AuthMenu;
