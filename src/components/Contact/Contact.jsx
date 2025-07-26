// src/components/Contact.jsx
import React, { useState } from "react";
import styles from "./Contact.module.css";

const Contact = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  });
  const [successMessage, setSuccessMessage] = useState("");

  const handleChange = (e) => {
    const { id, value } = e.target;
    setFormData((prev) => ({ ...prev, [id]: value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Имитация отправки формы
    setSuccessMessage("Спасибо! Сообщение отправлено.");
    setFormData({ name: "", email: "", subject: "", message: "" });

    // Можно позже подключить real email-сервис типа Formspree или EmailJS
  };

  return (
    <section id="contact" className={styles.contact}>
      <div className={styles.container}>
        <div className={styles.sectionHeader}>
          <p>Contact</p>
          <h2>Get In Touch</h2>
        </div>
        <form onSubmit={handleSubmit} className={styles.form}>
          <input
            type="text"
            id="name"
            placeholder="Your Name"
            value={formData.name}
            onChange={handleChange}
            required
          />
          <input
            type="email"
            id="email"
            placeholder="Your Email"
            value={formData.email}
            onChange={handleChange}
            required
          />
          <input
            type="text"
            id="subject"
            placeholder="Subject"
            value={formData.subject}
            onChange={handleChange}
            required
          />
          <textarea
            id="message"
            placeholder="Your Message"
            value={formData.message}
            onChange={handleChange}
            required
          ></textarea>
          <button type="submit">Send Message</button>
          {successMessage && <p className={styles.success}>{successMessage}</p>}
        </form>
      </div>
    </section>
  );
};

export default Contact;
