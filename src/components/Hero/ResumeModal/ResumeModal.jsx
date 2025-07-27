import { useState } from "react";
import Modal from "../../Modal/Modal";
import styles from "../../Modal/CvModal.module.css";

const ResumeModal = ({ isOpen, onClose }) => {
  const [loading, setLoading] = useState(true);

  return (
    <Modal
      isOpen={isOpen}
      onClose={onClose}
      className={styles.backdrop}
      contentClass={styles.modal}
    >
      <div className={styles.header}>
        <h2 id="modal-title">My Resume</h2>
        <div className={styles.headerActions}>
          <a
            href={`${import.meta.env.BASE_URL}resume/Oleh-Bilenkyi-CV.pdf`}
            download
            className={styles.downloadBtn}
          >
            Download PDF
          </a>
          <button
            className={styles.closeBtn}
            onClick={onClose}
            aria-label="Close modal"
          >
            ×
          </button>
        </div>
      </div>

      <div className={styles.content}>
        {loading && <div className={styles.loader}></div>}
        <iframe
          src={`${import.meta.env.BASE_URL}resume/Oleh-Bilenkyi-CV.pdf`}
          title="CV"
          onLoad={() => setLoading(false)}
        />
      </div>

      <div className={styles.modalFooter}>© Oleh Bilenkyi — Resume 2025</div>
    </Modal>
  );
};

export default ResumeModal;
