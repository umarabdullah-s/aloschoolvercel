import React from 'react'
import styles from "./founder.module.css"
import img from "@/assets/aboutpage/founder1.jpg"
import { FaLinkedinIn } from "react-icons/fa";
import Image from "next/image";

const Founder = () => {

  
  return (
    <div className={styles.container}>
      <p className={styles.mobileTitle}>
        Our<span>Founder</span>
      </p>
      <div className={styles.image}>
        <Image
          src={img}
          alt="Founder Image"
          width={400} // ✅ adjust based on your design
          height={400} // ✅ adjust based on your design
          
        />
      </div>
      <div className={styles.content}>
        <div className={styles.intro}>
          <p className={styles.name}>Natarajan</p>
          <p className={styles.designation}>CEO & Founder ALO Groups </p>

          <a
            href="https://www.linkedin.com/in/natarajan13/"
            target="_blank"
            rel="noopener noreferrer"
            className={styles.linkedinBox}
          >
            <FaLinkedinIn className={styles.linkedinIcon} />
          </a>
        </div>
        <p className={styles.para}>
          Meet Natarajan, the leader who shaped ALO groups of company’s journey.
          Starting with just two people, he built ALO into a strong and growing
          family. In South Tamil Nadu, he is admired as a technology leader who
          inspires young professionals. His clear direction and steady
          leadership have helped guide ALO groups through growth and change.
          With a strong focus on teamwork and progress, he encourages new ideas
          and continuous learning across the company. His vision and commitment
          have played a key role in expanding ALO Groups and building a culture
          of innovation in software development.
        </p>
      </div>
    </div>
  );
}

export default Founder