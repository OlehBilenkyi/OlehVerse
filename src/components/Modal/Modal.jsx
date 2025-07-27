import { useEffect, useState } from "react";

const Modal = ({
  isOpen,
  onClose,
  children,
  className = "", // для backdrop
  contentClass = "", // для обёртки .modal
}) => {
  const [closing, setClosing] = useState(false);

  useEffect(() => {
    const onKeyDown = (e) => {
      if (e.key === "Escape") handleClose();
    };

    if (isOpen) {
      document.body.style.overflow = "hidden";
      window.addEventListener("keydown", onKeyDown);
    }

    return () => {
      document.body.style.overflow = "auto";
      window.removeEventListener("keydown", onKeyDown);
    };
  }, [isOpen]);

  const handleClose = () => {
    setClosing(true);
    setTimeout(() => {
      setClosing(false);
      onClose();
    }, 300); // под анимацию
  };

  if (!isOpen) return null;

  return (
    <div
      className={`${className} ${closing ? "fadeOut" : ""}`}
      onClick={handleClose}
    >
      <div className={contentClass} onClick={(e) => e.stopPropagation()}>
        {children}
      </div>
    </div>
  );
};

export default Modal;
