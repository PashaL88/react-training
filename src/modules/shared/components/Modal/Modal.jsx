import styles from "./modal.module.css";
import PropTypes from "prop-types";
import { useEffect } from "react";

// import { createPortal } from "react-dom";

// const modalRoot = document.getElementById("modal-root");

const Modal = ({ children, close }) => {
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
        <span className={styles.close} onClick={close}>
          X
        </span>
        {children}
      </div>
    </div>
  );
};

export default Modal;

Modal.propTypes = {
  close: PropTypes.func.isRequired,
};
