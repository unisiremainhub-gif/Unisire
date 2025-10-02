import React, { useEffect, useState } from "react";
import styles from "./Modal.module.css";
import confetti from "canvas-confetti";

const Modal = ({ isOpen, onClose, onConfirm, title, message }) => {
  const [showModal, setShowModal] = useState(false);
  const [isAnimating, setIsAnimating] = useState(false);

  useEffect(() => {
    if (isOpen) {
      setShowModal(true);
      setIsAnimating(true);
    } else {
      setIsAnimating(false);
      const timer = setTimeout(() => setShowModal(false), 300);
      return () => clearTimeout(timer);
    }
  }, [isOpen]);

  const handleConfirm = () => {
    // Trigger confetti on confirmation
    confetti({
      particleCount: 100,
      spread: 70,
      origin: { y: 0.6 },
    });

    if (onConfirm) {
      onConfirm();
    }
  };

  const handleClose = () => {
    setIsAnimating(false);
    if (onClose) {
      onClose();
    }
  };

  const handleBackdropClick = (e) => {
    if (e.target === e.currentTarget) {
      handleClose();
    }
  };

  const createRipple = (event) => {
    const button = event.currentTarget;
    const ripple = document.createElement("span");
    ripple.classList.add(styles.ripple);

    const rect = button.getBoundingClientRect();
    const size = Math.max(rect.width, rect.height);
    const x = event.clientX - rect.left - size / 2;
    const y = event.clientY - rect.top - size / 2;

    ripple.style.width = ripple.style.height = `${size}px`;
    ripple.style.left = `${x}px`;
    ripple.style.top = `${y}px`;

    button.appendChild(ripple);

    ripple.addEventListener("animationend", () => {
      ripple.remove();
    });
  };

  if (!showModal) return null;

  return (
    <div
      className={`${styles.modalOverlay} ${
        isAnimating ? styles.show : styles.hide
      }`}
      onClick={handleBackdropClick}
    >
      <div
        className={`${styles.modal} ${
          isAnimating ? styles.modalShow : styles.modalHide
        }`}
      >
        {/* Modal Header */}
        <div className={styles.modalHeader}>
          <h3 className={styles.modalTitle}>{title}</h3>
          <button className={styles.modalClose} onClick={handleClose}>
            ×
          </button>
        </div>

        {/* Modal Body */}
        <div className={styles.modalBody}>
          <p className={styles.modalMessage}>{message}</p>
        </div>

        {/* Modal Actions */}
        <div className={styles.actions}>
          <button
            className={`${styles.cancelBtn} ${styles.btn} ${styles.rippleEffect}`}
            onClick={(e) => {
              handleClose();
              createRipple(e);
            }}
          >
            Cancel
          </button>
          <button
            className={`${styles.confirmBtn} ${styles.btn} ${styles.rippleEffect}`}
            onClick={(e) => {
              handleConfirm();
              createRipple(e);
            }}
            autoFocus
          >
            Confirm
          </button>
        </div>
      </div>
    </div>
  );
};

export default Modal;
