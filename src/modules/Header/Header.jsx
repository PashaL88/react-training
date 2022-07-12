import { NavLink } from "react-router-dom";
import { useState } from "react";

import AuthMenu from "./AuthMenu/AuthMenu";

import Vector from "../../shared/SVG/Vector.svg";
import cart from "../../shared/SVG/shopping-cart.svg";

import Modal from "../shared/components/Modal/Modal";

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
        <NavLink to="/" className={styles.navlink}>
          <img src={cart} alt="cart" />
        </NavLink>
      </nav>
      {isModalOpen && (
        <Modal close={closeModal}>
          <ul>
            <li>Profile</li>
            <li>Orders</li>
            <li>Offer and promo</li>
            <li>Privacy policy</li>
            <li>Security</li>
          </ul>
        </Modal>
      )}
    </>
  );
};

export default Header;
