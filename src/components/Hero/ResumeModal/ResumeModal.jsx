import { useEffect, useState } from "react";
import Modal from "../../Modal/Modal";

const ResumeModal = () => {
  const [open, setOpen] = useState(false);

  useEffect(() => {
    window.__setShowResume = setOpen;
  }, []);

  return (
    <Modal isOpen={open} onClose={() => setOpen(false)} title="My Resume">
      <iframe
        src="/resume/Oleh-Bilenkyi-CV.pdf"
        title="CV"
        style={{ width: "100%", height: "80vh", border: "none" }}
      />
    </Modal>
  );
};

export default ResumeModal;
