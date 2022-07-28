import styles from "./modal.module.css";
import PropTypes from "prop-types";
import { useEffect } from "react";
// import { useContext } from "react";
// import { langContext } from "../../../langContext";

import Side from "../../SVG/Side.svg";

// import { createPortal } from "react-dom";

// const modalRoot = document.getElementById("modal-root");

const Modal = ({ children, close }) => {
  // const lang = useContext(langContext);
  useEffect(() => {
    document.addEventListener("keydown", closeModal);

    return () => document.removeEventListener("keydown", closeModal);
  });

  const closeModal = (e) => {
    if (e.code === "Escape") {
      close();
      return;
    }
    if (e.target === e.currentTarget) {
      close();
    }
  };
  return (
    <div className={styles.overlay} onClick={closeModal}>
      <div className={styles.modal}>
        <img src={Side} alt="close" className={styles.close} onClick={close} />

        {children}
      </div>
    </div>
  );
};

export default Modal;

Modal.propTypes = {
  close: PropTypes.func.isRequired,
};
