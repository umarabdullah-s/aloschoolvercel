import React from "react";
import styles from "./contact.module.css";
import { FaPhoneAlt, FaEnvelope, FaClock } from "react-icons/fa";

const ContactUs = () => {
  const handlePhoneClick = () => {
    const phoneNumber = "919994725508";

    // simple mobile detection
    const isMobile = /iPhone|iPad|iPod|Android/i.test(navigator.userAgent);

    if (isMobile) {
      // open dialer
      window.location.href = `tel:+${phoneNumber}`;
    } else {
      // open WhatsApp Web
      window.open(`https://wa.me/${phoneNumber}`, "_blank");
    }
  };
  return (
    <div data-aos="fade-up" className={styles.container}>
      <div className={styles.wrapper}>
        <p className={styles.title}>
          We Are <span>Located</span> Here
        </p>

        <div className={styles.map}>
          <iframe
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3753.6420293191654!2d77.38050007477052!3d8.19901779183287!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3b04f1405923e1fb%3A0xdded763ce70bbd4d!2sALO%20Info-Tech!5e1!3m2!1sen!2sin!4v1770381032748!5m2!1sen!2sin"
            width="100%" // ✅ responsive
            height="450"
            style={{ border: 0 }}
            allowFullScreen // ✅ fixed
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade" // ✅ fixed
          ></iframe>
        </div>

        <div className={styles.info}>
          <div className={styles.card}>
            <div className={`${styles.icon} ${styles.blue}`}>
              <FaPhoneAlt />
            </div>
            <div>
              <p className={styles.label}>Admission Hotline</p>
              <p
                className={styles.phone1}
                onClick={handlePhoneClick}
                style={{ cursor: "pointer" }}
              >
                +91 9994725508
              </p>
            </div>
          </div>

          <div className={styles.card}>
            <div className={`${styles.icon} ${styles.orange}`}>
              <FaEnvelope />
            </div>
            <div>
              <p className={styles.label}>E-mail</p>
              <a href="mailto:contact@alosodt.com" className={styles.phone1}>
                contact@alosodt.com
              </a>
            </div>
          </div>

          <div className={styles.card}>
            <div className={`${styles.icon} ${styles.yellow}`}>
              <FaClock />
            </div>
            <div>
              <p className={styles.label}>Office Hours</p>
              <p className={styles.phone1}>Mon - Sat</p>
              <p className={styles.phone1}>09:00 AM to 06:00 PM</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ContactUs;
