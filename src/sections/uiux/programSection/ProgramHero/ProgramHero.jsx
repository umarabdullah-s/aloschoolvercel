import React, { useState } from "react";
import styles from "./programhero.module.css";
import img1 from "@/assets/program/guserinterface.png";
import img11 from "@/assets/program/guserinterfacearrow.svg";
import img2 from "@/assets/program/vuserinterface.png";
import img22 from "@/assets/program/vuserinterfacearrow.svg";
import ContactModal from "@/components/model/ContactModal";
import Image from "next/image"; // ✅ import

const ProgramHero = () => {
  const [openModal, setOpenModal] = useState(false);

  return (
    <div data-aos="fade-up" className={styles.container}>
      <div className={styles.wrapper}>
        <div className={styles.content}>
          {/* TITLE */}
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

          {/* CTA */}
          <p
            className={styles.title3}
            onClick={() => setOpenModal(true)}
            style={{ cursor: "pointer" }}
          >
            Request Call Back
          </p>

          {/* LEFT DESIGN */}
          <div className={styles.position1}>
            <div className={styles.position}>
              <div className={styles.img1}>
                <Image
                  src={img1}
                  alt="UI Design"
                  width={120}
                  height={120}
                  className={styles.image}
                />
              </div>

              <div className={styles.img2}>
                <Image
                  src={img11}
                  alt="Arrow"
                  width={80}
                  height={80}
                  className={styles.image}
                />
              </div>
            </div>
          </div>

          {/* RIGHT DESIGN */}
          <div className={styles.position11}>
            <div className={styles.position}>
              <div className={`${styles.img1} ${styles.imgSecond}`}>
                <Image
                  src={img2}
                  alt="UX Design"
                  width={120}
                  height={120}
                  className={styles.image}
                />
              </div>

              <div className={styles.img22}>
                <Image
                  src={img22}
                  alt="Arrow"
                  width={80}
                  height={80}
                  className={styles.image}
                />
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* MODAL */}
      <ContactModal open={openModal} onClose={() => setOpenModal(false)} />
    </div>
  );
};

export default ProgramHero;
