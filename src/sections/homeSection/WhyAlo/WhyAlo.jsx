import styles from "./whyalo.module.css";
import img1 from "@/assets/homepage/whyalo/img1.jpg";
import img2 from "@/assets/homepage/whyalo/img2.png";
import img3 from "@/assets/homepage/whyalo/img3.png";
import React, { useEffect, useRef, useState } from "react";
import Image from "next/image"; // ✅ import

const features = [
  {
    title: "Experienced Professionals",
    desc: "Learn from industry designers who provide practical knowledge, real insights, and career-focused mentorship.",
    image: img1,
  },
  {
    title: "Real Time Experience",
    desc: "Build skills through live projects that give hands-on practice, clear insight, and the confidence to handle real-world tasks.",
    image: img2,
  },
  {
    title: "Portfolio Building",
    desc: "Each project strengthens your portfolio by showcasing your complete design process and creativity.",
    image: img3,
  },
];

const WhyAlo = () => {
  const sectionRef = useRef(null);
  const [showCards, setShowCards] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        setShowCards(entry.isIntersecting);
      },
      { threshold: 0.35 },
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => observer.disconnect();
  }, []);

  return (
    <div data-aos="fade-up" className={styles.container}>
      <div className={styles.wrapper}>
        {/* TITLE */}
        <div className={styles.title}>
          <p className={styles.para}>
            Why Choose <br />
            Alo
          </p>
        </div>

        {/* CARDS */}
        <div
          ref={sectionRef}
          className={`${styles.contents} ${showCards ? styles.showCards : ""}`}
        >
          {features.map((item, index) => (
            <div key={index} className={styles.card}>
              <div className={styles.img}>
                <Image
                  src={item.image}
                  alt={item.title}
                  width={120}
                  height={120}
                  className={styles.image}
                />
              </div>

              <div className={styles.desc}>
                <p className={styles.title}>{item.title}</p>
                <p className={styles.content}>{item.desc}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default WhyAlo;
