import React from 'react'
import styles from "./programstructure.module.css"
import img1 from "@/assets/program/programstructure/img1.jpeg"
import img2 from "@/assets/program/programstructure/img2.png";
import img3 from "@/assets/program/programstructure/img3.png";

const ProgramStructure = () => {
  return (
    <div data-aos="fade-up" className={styles.container}>
      <div className={styles.wrapper}>
        <div className={styles.head}>
          <p className={styles.title}>Program Structure</p>
          <p className={styles.para}>
            Advance Diploma Program makes Designers who want to Break
            <br />
            into the World of UI/UX..
          </p>
        </div>
        <div className={styles.content}>
          <div className={styles.card}>
            <div className={styles.desc}>
              <p className={`${styles.para1} ${styles.paraGreen}`}>
                Foundations of UX Research and Psychology
              </p>
              <p className={styles.para2}>
                Learn user research methods and psychology principles to better
                understand real user behavior.
              </p>
            </div>
            <div className={styles.img}>
              <img src={img1.src} alt="img" />
            </div>
          </div>
          <div className={`${styles.card} ${styles.cardcenter}`}>
            <div className={styles.img}>
              <img src={img2.src} alt="img" />
            </div>
            <div className={styles.desc}>
              <p className={`${styles.para1} ${styles.paraRed}`}>
                UI Design & Prototyping
              </p>
              <p className={styles.para2}>
                Create user friendly interfaces and interactive prototypes using
                modern industry-standard design tools.
              </p>
            </div>
          </div>
          <div className={styles.card}>
            <div className={styles.desc}>
              <p className={`${styles.para1} ${styles.paraGreen}`}>
                Career Development & Portfolio Building
              </p>
              <p className={styles.para2}>
                Develop a strong professional portfolio and prepare confidently
                for real design career opportunities.
              </p>
            </div>
            <div className={styles.img}>
              <img src={img3.src} alt="img" />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default ProgramStructure