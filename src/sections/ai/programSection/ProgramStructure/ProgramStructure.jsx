import React from "react";
import styles from "./programstructure.module.css";
import Image from "next/image"; // ✅ import

import img1 from "@/assets/program/programstructure/ai1.jpg";
import img2 from "@/assets/program/programstructure/ai2.jpg";
import img3 from "@/assets/program/programstructure/ai3.jpeg";

const programs = [
  {
    title: "Foundations & Programming",
    desc: " Build a strong base in artificial intelligence concepts, programming fundamentals, and data handling techniques essential for developing intelligent systems",
    image: img1,
    color: "green",
  },
  {
    title: "AI Core & Machine Learning",
    desc: " Learn key machine learning algorithms, model building, and data analysis techniques to enable systems to learn from data and make predictions.",
    image: img2,
    color: "red",
    reverse: true, // for center layout
  },
  {
    title: "Advanced AI & Industry Application",
    desc: " Explore advanced topics such as deep learning, natural language processing, and real-world AI applications across various industries.",
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
into<br/> the World of AI...
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
