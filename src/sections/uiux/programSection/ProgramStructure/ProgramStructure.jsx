import React from "react";
import styles from "./programstructure.module.css";
import Image from "next/image"; // ✅ import

import img1 from "@/assets/program/programstructure/img1.jpeg";
import img2 from "@/assets/program/programstructure/Gemini_Generated_Image_vvixv5vvixv5vvix.png";
import img3 from "@/assets/program/programstructure/Gemini_Generated_Image_drij2mdrij2mdrij.png";

const programs = [
  {
    title: "Foundations of UX Research and Psychology",
    desc: "Learn user research methods and psychology principles to better understand real user behavior.",
    image: img1,
    color: "green",
  },
  {
    title: "UI Design & Prototyping",
    desc: "Create user friendly interfaces and interactive prototypes using modern industry-standard design tools.",
    image: img2,
    color: "red",
    reverse: true, // for center layout
  },
  {
    title: "Career Development & Portfolio Building",
    desc: "Develop a strong professional portfolio and prepare confidently for real design career opportunities.",
    image: img3,
    color: "green",
  },
];

const ProgramStructure = () => {
  return (
    <div data-aos="fade-up" className={styles.container}>
      <div className={styles.wrapper}>
        {/* HEADER */}
        <div className={styles.head}>
          <p className={styles.title}>Program Structure</p>
          <p className={styles.para}>
            Advance Diploma Program makes Designers who want to Break
            <br />
            into the World of UI/UX..
          </p>
        </div>

        {/* CONTENT */}
        <div className={styles.content}>
          {programs.map((item, index) => (
            <div
              key={index}
              className={`${styles.card} ${
                item.reverse ? styles.cardcenter : ""
              }`}
            >
              {/* IMAGE (LEFT if reverse) */}
              {item.reverse && (
                <div className={styles.img}>
                  <Image
                    src={item.image}
                    alt={item.title}
                    width={300}
                    height={200}
                    className={styles.image}
                  />
                </div>
              )}

              {/* TEXT */}
              <div className={styles.desc}>
                <p
                  className={`${styles.para1} ${
                    item.color === "green" ? styles.paraGreen : styles.paraRed
                  }`}
                >
                  {item.title}
                </p>
                <p className={styles.para2}>{item.desc}</p>
              </div>

              {/* IMAGE (RIGHT if not reverse) */}
              {!item.reverse && (
                <div className={styles.img}>
                  <Image
                    src={item.image}
                    alt={item.title}
                    width={300}
                    height={200}
                    className={styles.image}
                  />
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default ProgramStructure;
