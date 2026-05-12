import React from "react";
import styles from "./HeroSection.module.css";
import img from "@/assets/homepage/herosection/group.jpg";
import Image from "next/image"; // ✅ import

const HeroSection = () => {
  return (
    <div data-aos="fade-up" className={styles.container}>
      <div className={styles.wrapper}>
        {/* TEXT */}
        <div className={styles.content}>
          <p className={styles.title}>
            Meet the Power of <br />
            Design & <span>Technology</span>
          </p>
        </div>

        {/* IMAGE */}
        <div className={styles.image}>
          <Image
            src={img}
            alt="students"
            width={500}
            height={400}
            className={styles.mainImage}
            priority // ✅ important for hero image (fast load)
          />

          {/* BOX 1 */}
          <div className={styles.placement}>
            <h3>100%</h3>
            <p>
              Placement <br /> Assistance
            </p>
          </div>

          {/* BOX 2 */}
          <div className={styles.students}>
            <h3>500+</h3>
            <p>
              Number of students <br /> trusted
            </p>
          </div>

          {/* BUTTON AREA */}
          <div className={styles.circle}>
            <div className={styles.dot}></div>
            <div className={styles.btn}>More about ALO</div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HeroSection;
