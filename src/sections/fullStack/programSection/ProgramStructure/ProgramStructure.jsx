import React from "react";
import styles from "./programstructure.module.css";
import Image from "next/image"; // ✅ import

import img1 from "@/assets/program/programstructure/k.jpg";
import img2 from "@/assets/program/programstructure/database.jpg";
import img3 from "@/assets/program/programstructure/realtime.jpg";

const programs = [
  {
    title: "Front-End & Back-End Development",
    desc: "Learn to build complete web applications by working on both user interfaces and server side logic using modern development technologies.",
    image: img1,
    color: "green",
  },
  {
    title: "Database Management",
    desc: "Understand how to design, manage, and optimize databases to store and retrieve data efficiently for scalable applications.",
    image: img2,
    color: "red",
    reverse: true, // for center layout
  },
  {
    title: "Real Time Projects",
    desc: "Work on practical projects that simulate real industry workflows, helping you gain hands-on experience and build a strong portfolio.",
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
            Advance Diploma Program for students who want to break<br/> into the world of Web Development
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
