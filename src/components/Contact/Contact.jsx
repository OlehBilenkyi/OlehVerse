import React, { useState, useEffect } from "react";
import styles from "./Contact.module.css";
import AOS from "aos";
import "aos/dist/aos.css";

const contactItems = [
  {
    label: "GitHub",
    icon: "https://cdn-icons-png.flaticon.com/512/733/733553.png",
    value: "OlehBilenkyi",
    link: "https://github.com/OlehBilenkyi",
  },
  {
    label: "LinkedIn",
    icon: "https://cdn-icons-png.flaticon.com/512/145/145807.png",
    value: "LinkedIn",
    link: "https://www.linkedin.com/in/oleh-bilenkyi-95a55b177/",
  },
  {
    label: "Email",
    icon: "https://cdn-icons-png.flaticon.com/512/561/561127.png",
    value: "oleg.belenkuy@gmail.com",
    link: "mailto:oleg.belenkuy@gmail.com",
  },
  {
    label: "Telegram",
    icon: "https://cdn-icons-png.flaticon.com/512/2111/2111646.png",
    value: "@OJIeja",
    link: "https://t.me/OJIeja",
  },
  {
    label: "Phone",
    icon: "https://cdn-icons-png.flaticon.com/512/724/724664.png",
    value: "+48 575-551-828",
    link: "tel:+48575551828",
  },
  {
    label: "Location",
    icon: "https://cdn-icons-png.flaticon.com/512/535/535239.png",
    value: "Kraków, Poland",
    link: null,
  },
];

const Contact = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  });
  const [successMessage, setSuccessMessage] = useState("");

  useEffect(() => {
    AOS.init({ duration: 1000, once: false });
  }, []);

  const handleChange = (e) => {
    const { id, value } = e.target;
    setFormData((prev) => ({ ...prev, [id]: value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setSuccessMessage("Спасибо! Сообщение отправлено.");
    setFormData({ name: "", email: "", subject: "", message: "" });
  };

  return (
    <section id="contact" className={styles.contact}>
      <div className={styles.container}>
        <div className={styles.sectionHeader} data-aos="zoom-in">
          <p>Contact</p>
          <h2>Get In Touch</h2>
        </div>

        <div className={styles.contentWrapper}>
          <form onSubmit={handleSubmit} className={styles.form}>
            <input
              type="text"
              id="name"
              placeholder="Your Name"
              value={formData.name}
              onChange={handleChange}
              required
              data-aos="fade-right"
            />
            <input
              type="email"
              id="email"
              placeholder="Your Email"
              value={formData.email}
              onChange={handleChange}
              required
              data-aos="fade-left"
            />
            <input
              type="text"
              id="subject"
              placeholder="Subject"
              value={formData.subject}
              onChange={handleChange}
              required
              data-aos="flip-up"
            />
            <textarea
              id="message"
              placeholder="Your Message"
              value={formData.message}
              onChange={handleChange}
              required
              data-aos="zoom-in-up"
            ></textarea>
            <button type="submit" data-aos="fade-up">
              Send Message
            </button>
            {successMessage && (
              <p className={styles.success}>{successMessage}</p>
            )}
          </form>

          <div className={styles.contactsWrapper}>
            <h3 data-aos="fade-left">Portfolio & Contacts</h3>
            <div className={styles.cards}>
              {contactItems.map((item, idx) => (
                <div className={styles.card} key={idx} data-aos="fade-up">
                  <img src={item.icon} alt={item.label} />
                  {item.link ? (
                    <a href={item.link} target="_blank" rel="noreferrer">
                      {item.value}
                    </a>
                  ) : (
                    <span>{item.value}</span>
                  )}
                </div>
              ))}
            </div>
          </div>
        </div>

        <div className={styles.map} data-aos="fade-up">
          <iframe
            title="Krakow Map"
            src="https://www.openstreetmap.org/export/embed.html?bbox=19.888%2C50.05%2C19.94%2C50.07&layer=mapnik"
            width="100%"
            height="300"
            style={{ border: 0, borderRadius: "12px" }}
            allowFullScreen=""
            loading="lazy"
          ></iframe>
        </div>
      </div>
    </section>
  );
};

export default Contact;
