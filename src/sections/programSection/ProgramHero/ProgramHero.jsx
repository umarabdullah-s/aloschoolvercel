import React from 'react'
import styles from "./programhero.module.css"
import img1 from "@/assets/program/guserinterface.png"
import img11 from "@/assets/program/guserinterfacearrow.svg";
import img2 from "@/assets/program/vuserinterface.png";
import img22 from "@/assets/program/vuserinterfacearrow.svg";
import ContactModal from "@/components/model/ContactModal";
import { useState } from "react";

const ProgramHero = () => {
  const [openModal, setOpenModal] = useState(false);
  return (
    <div data-aos="fade-up" className={styles.container}>
      <div className={styles.wrapper}>
        <div className={styles.content}>
          <p className={`${styles.title} ${styles.title1}`}>
            Diploma In <span>UI/UX Design</span>
          </p>
          <p className={styles.title2}>
            The Diploma in UI/UX Design is a comprehensive, hands-on program
            created for <br />
            students and professionals who want to build a strong foundation in
            user experience, <br />
            interface design, and product thinking.
          </p>
          <p
            className={styles.title3}
            onClick={() => setOpenModal(true)}
            style={{ cursor: "pointer" }}
          >
            Request Call Back
          </p>
          <div className={styles.position1}>
            <div className={styles.position}>
              <div className={styles.img1}>
                <img src={img1.src} alt="img" />
              </div>
              <div className={styles.img2}>
                <img src={img11.src} alt="img" />
              </div>
            </div>
          </div>
          <div className={styles.position11}>
            <div className={styles.position}>
              <div className={`${styles.img1} ${styles.imgSecond}`}>
                <img src={img2.src} alt="img" />
              </div>
              <div className={styles.img22}>
                <img src={img22.src} alt="img" />
              </div>
            </div>
          </div>
        </div>
      </div>
      <ContactModal open={openModal} onClose={() => setOpenModal(false)} />
    </div>
  );
}

export default ProgramHero