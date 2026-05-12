import React from "react";
import styles from "./missionVision.module.css";
import img from "@/assets/homepage/missionvision/missionvision.png";
import Image from "next/image"; // ✅ import

const MissionVision = () => {
  return (
    <div data-aos="fade-up" className={styles.container}>
      <div className={styles.wrapper}>
        {/* TITLE */}
        <div className={styles.title}>
          <p className={styles.para}>
            South Tamil Nadu’s 1st Elite <br />
            Design & Technology <br />
            College
          </p>
        </div>

        {/* CONTENT */}
        <div className={styles.content}>
          {/* MISSION */}
          <div className={`${styles.missionvision} ${styles.left}`}>
            <p className={styles.paras}>Mission</p>
            <p className={styles.desc}>
              To prepare aspiring designers for real careers through practical
              learning, mentorship, and hands-on projects. We help students
              build industry-ready skills, strong portfolios, and the confidence
              to succeed in the evolving digital design world.
            </p>
          </div>

          {/* IMAGE */}
          <div className={styles.img}>
            <div className={styles.imgdiv}>
              <Image
                src={img}
                alt="Mission and Vision"
                width={400}
                height={300}
                className={styles.image}
              />
            </div>

            <div className={styles.circle}>
              <div className={styles.dot}></div>
              <div className={styles.btn}>More about ALO</div>
            </div>
          </div>

          {/* VISION */}
          <div className={`${styles.missionvision} ${styles.right}`}>
            <p className={styles.paras}>Vision</p>
            <p className={styles.desc}>
              To grow ALO School of Design & Technology as a practical, industry
              focused learning space where aspiring designers gain real skills,
              build strong portfolios, and become confident UI/UX professionals
              ready for today’s digital world.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default MissionVision;
