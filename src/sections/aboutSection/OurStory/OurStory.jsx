
import React, { useRef, useState, useEffect } from "react";
import styles from "./ourstory.module.css";
import Founder from "../ourFounder/Founder";
import History from "../ourHistory/History";
import Team from "../ourTeam/Team";
import Philosophy from "../philosophy/Philosophy";

const OurStory = () => {
const historyRef = useRef(null);
const founderRef = useRef(null);
const teamRef = useRef(null);
const philosophyRef = useRef(null);
const scrollRef = useRef(null);


const [active, setActive] = useState("history");
const scrollToSection = (ref) => {
  if (!ref.current) return;

  ref.current.scrollIntoView({
    behavior: "smooth",
    block: "nearest",
  });
};
useEffect(() => {
  const sections = [
    { ref: historyRef, name: "history" },
    { ref: founderRef, name: "founder" },
    { ref: teamRef, name: "team" },
    { ref: philosophyRef, name: "philosophy" },
  ];

  const observer = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          const section = sections.find((s) => s.ref.current === entry.target);
          if (section) setActive(section.name);
        }
      });
    },
    {
      root: scrollRef.current,
      threshold: 0.6,
    },
  );

  sections.forEach((section) => {
    if (section.ref.current) observer.observe(section.ref.current);
  });

  return () => observer.disconnect();
}, []);
useEffect(() => {
  const sections = scrollRef.current.querySelectorAll(`.${styles.section}`);

  const observer = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add(styles.show);
        }
      });
    },
    {
      root: scrollRef.current,
      threshold: 0.3,
    },
  );

  sections.forEach((sec) => observer.observe(sec));

  return () => observer.disconnect();
}, []);
  return (
    <div className={styles.container}>
      <div className={styles.wrapper}>
        <div className={styles.left}>
          <p
            className={active === "history" ? styles.active : ""}
            onClick={() => scrollToSection(historyRef)}
          >
            History
          </p>

          <p
            className={active === "founder" ? styles.active : ""}
            onClick={() => scrollToSection(founderRef)}
          >
            Meet Our Founder
          </p>

          <p
            className={active === "team" ? styles.active : ""}
            onClick={() => scrollToSection(teamRef)}
          >
            Our Team
          </p>
          <p
            className={active === "philosophy" ? styles.active : ""}
            onClick={() => scrollToSection(philosophyRef)}
          >
            Our Philosophy
          </p>
        </div>

        <div className={styles.right}>
          <div className={styles.head}>
            <h2>
              <span className={styles.blue}>Our</span>{" "}
              <span className={styles.orange}>Story</span>
            </h2>
          </div>
          <div className={styles.scrollContent} ref={scrollRef}>
            <div ref={historyRef} className={styles.section}>
              <History />
            </div>

            <div ref={founderRef} className={styles.section}>
              <Founder />
            </div>

            <div ref={teamRef} className={styles.section}>
              <Team />
            </div>
            <div ref={philosophyRef} className={styles.section}>
              <Philosophy />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default OurStory;
