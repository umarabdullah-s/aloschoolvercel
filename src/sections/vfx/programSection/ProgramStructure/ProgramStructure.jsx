import React from "react";
import styles from "./programstructure.module.css";
import Image from "next/image"; // ✅ import

import img1 from "@/assets/program/programstructure/25303.jpg";
import img2 from "@/assets/program/programstructure/121012.jpg";
import img3 from "@/assets/program/programstructure/i3.jpg";

const programs = [
  {
    title: "Animation Fundamentals & Design",
    desc: "	Learn the basics of 2D and 3D animation, character design, and visual storytelling techniques.",
    image: img1,
    color: "green",
  },
  {
    title: "Visual Effects & Motion Graphics",
    desc: "	Create engaging visual effects, motion graphics, and compositing using industry-standard tools.",
    image: img2,
    color: "red",
    reverse: true, // for center layout
  },
  {
    title: "Portfolio Development & Production",
    desc: "Work on real-world projects, develop creative outputs, and build a strong professional portfolio.",
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
           Advance Diploma Program makes Students who want to Break
into<br/> the World of VFX Animation.
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
