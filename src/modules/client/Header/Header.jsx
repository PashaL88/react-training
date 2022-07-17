import { NavLink } from "react-router-dom";
import { useState } from "react";

import AuthMenu from "../AuthMenu/";

import Vector from "../../shared/SVG/Vector.svg";
import cart from "../../shared/SVG/shopping-cart.svg";

import Modal from "../../shared/components/Modal";

import styles from "./Header.module.css";

const Header = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);

  const showModal = () => {
    setIsModalOpen(true);
  };

  const closeModal = () => {
    setIsModalOpen(false);
  };

  return (
    <>
      <nav className={styles.nav}>
        <button className={styles.button} onClick={showModal}>
          <img src={Vector} alt="Modal" />
        </button>
        <AuthMenu />
        <NavLink to="/cart" className={styles.navlink}>
          <img src={cart} alt="cart" />
        </NavLink>
      </nav>
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
