import React from "react";
import styles from "./studentsays.module.css";
import Image from "next/image"; // ✅ import

import img1 from "@/assets/homepage/studentsays/img1.jpg";
import img2 from "@/assets/homepage/studentsays/img2.jpg";
import img3 from "@/assets/homepage/studentsays/img3.jpg";
import img4 from "@/assets/homepage/studentsays/img4.jpg";

const students = [
  {
    text: "I came to ALO with no design knowledge, but the teaching style was simple and easy to follow. Working on real projects helped me improve quickly, and now I feel confident designing UI/UX design on my own.",
    name: "Joshiba E",
    role: "UI/UX Student",
    image: img1,
  },
  {
    text: "I learned a lot here, the mentors shared the latest UI/UX trends and gave practical guidance. It’s a great place for anyone serious about starting a career in UI/UX design.",
    name: "Anto Sasiran S",
    role: "UI/UX Student",
    image: img2,
  },
  {
    text: "ALO School of Design and Technology gave me a clear understanding of UI/UX from basics to advanced. The hands-on projects helped me build a strong portfolio and gain real industry confidence.",
    name: "Nafeel A",
    role: "UI/UX Student",
    image: img3,
  },
  {
    text: "Joining ALO was the best decision I made. The training was practical, and working on live projects helped me gain real confidence in UI/UX design.",
    name: "Vel Murugan A",
    role: "UI/UX Student",
    image: img4,
  },
];

const StudentSays = () => {
  return (
    <div data-aos="fade-up" className={styles.container}>
      <div className={styles.wrapper}>
        {/* TITLE */}
        <div className={styles.title}>
          <p className={styles.para}>
            What Our Students <br /> Say
          </p>
        </div>

        {/* CARDS */}
        <div className={styles.cards}>
          {students.map((student, index) => (
            <div
              key={index}
              className={`${styles.card} ${styles[`card${index + 1}`]}`}
            >
              <div className={styles.content}>
                <p className={styles.para1}>“{student.text}”</p>
                <p className={styles.para2}>{student.name}</p>
                <p className={styles.para3}>{student.role}</p>
              </div>

              <div className={styles.img}>
                <Image
                  src={student.image}
                  alt={student.name}
                  width={120}
                  height={120}
                  className={styles.image}
                />
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default StudentSays;
