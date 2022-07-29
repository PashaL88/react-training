import { NavLink } from "react-router-dom";
import { useState } from "react";
import { useLocation } from "react-router-dom";
// import { langContext } from "../../../langContext";
import AuthMenu from "../AuthMenu/";
import LanguageSwitcher from "./LanguageSwitcher/LanguageSwitcher";
import Vector from "../../../shared/SVG/Vector.svg";
import cart from "../../../shared/SVG/shopping-cart.svg";
import chevron from "../../../shared/SVG/chevron-left.svg";

import Modal from "../../../shared/components/Modal";
import styles from "./Header.module.css";

const Header = () => {
  // const { lang } = useContext(langContext);
  const [isModalOpen, setIsModalOpen] = useState(false);

  const location = useLocation();

  const showModal = () => {
    setIsModalOpen(true);
  };

  const closeModal = () => {
    setIsModalOpen(false);
  };

  return (
    <>
      <nav className={styles.nav}>
        {location.pathname === "/react-training" && (
          <button className={styles.button} onClick={showModal}>
            <img src={Vector} alt="Modal" />
          </button>
        )}
        {location.pathname !== "/react-training" && (
          <NavLink to="/react-training" className={styles.chevron}>
            <img src={chevron} alt="chevron" />
          </NavLink>
        )}

        <AuthMenu />
        <NavLink to="/cart" className={styles.cart}>
          <img src={cart} alt="cart" />
        </NavLink>
      </nav>
      <LanguageSwitcher />
      {isModalOpen && (
        <Modal close={closeModal}>
          <ul className={styles.list}>
            <li className={styles.description}>Profile</li>
            <li className={styles.description}>Orders</li>
            <li className={styles.description}>Offer and promo</li>
            <li className={styles.description}>Privacy policy</li>
            <li className={styles.description}>Security</li>
          </ul>
        </Modal>
      )}
    </>
  );
};

export default Header;
