import React from "react";
import styles from "./philosophy.module.css";
import img from "@/assets/aboutpage/philosopy.jpeg";
import Image from "next/image"; // ✅ import

const Philosophy = () => {
  return (
    <div className={styles.container}>
      <p className={styles.mobileTitle}>
        Our<span>Philosophy</span> {/* ✅ fixed */}
      </p>

      <div className={styles.image}>
        <Image
          src={img}
          alt="Our Philosophy"
          width={500}
          height={350}
          className={styles.img}
        />
      </div>

      <div className={styles.content}>
        <p>
          At ALO School of Design & Technology, we believe designing is best
          learned through practice, creativity, and real-world experience. Our
          approach focuses on hands-on learning, industry relevant skills, and
          continuous improvement. We encourage students to think independently,
          solve real problems, and grow with confidence in a supportive and
          collaborative environment. By combining practical training with modern
          tools and mentorship, we help learners to develop both strong
          technical ability and a professional mindset.
        </p>
      </div>
    </div>
  );
};

export default Philosophy;
