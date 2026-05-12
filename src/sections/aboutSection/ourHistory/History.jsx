import React from 'react'
import styles from "./history.module.css"
import img from "@/assets/aboutpage/ourhistory.jpg"
import Image from "next/image";


const History = () => {
  return (
    <div className={styles.container}>
      <p className={styles.mobileTitle}>
        Our<span>History</span>
      </p>
      <div className={styles.image}>
        <Image
          src={img}
          alt="Our History"
          width={500} // adjust based on your UI
          height={350} // adjust based on your UI
          className={styles.img}
        />
      </div>
      <div className={styles.content}>
        <p>
          The ALO School is a South Tamil Nadu’s leading Design and Technology
          College, instituted in 2025 by our best IT team who are professionals
          in our IT solutions. They provide the best training to prepare
          students for industry expectations.
        </p>
        <p>
          We observed that students coming out of college have no idea about
          Designing. To overcome this challenge and make the fresher’s better
          understanding of Designing basics to advance. ALO School have
          simulated the Atmosphere where students receive employee like
          experience. This Diploma Program trains students to handle UI/UX
          design work based on real industry standards and professional
          discipline.
        </p>
        {/* <p>
          Our curriculum bridges the gap between academics and industry through
          project-based learning and expert guidance. Students gain practical
          skills, confidence, and a professional mindset to succeed in modern
          design careers.
        </p> */}
      </div>
    </div>
  );
}

export default History