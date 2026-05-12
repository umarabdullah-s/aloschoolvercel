import React, { useState } from "react";
import styles from "./learningoutcome.module.css";
import Accordion from "@mui/material/Accordion";
import AccordionSummary from "@mui/material/AccordionSummary";
import AccordionDetails from "@mui/material/AccordionDetails";
import Typography from "@mui/material/Typography";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import Image from "next/image"; // ✅ import

import img1 from "@/assets/program/faq/aifaq1.jpg";
import img2 from "@/assets/program/faq/aifaq2.jpg";
import img3 from "@/assets/program/faq/aifaq3.jpg";
import img4 from "@/assets/program/faq/aifaq4.jpg";
import img5 from "@/assets/program/faq/aifaq5.jpg";
import img6 from "@/assets/program/faq/aifaq6.jpg";

const LearningOutcome = () => {
  const [expanded, setExpanded] = useState(0);

  const outcomes = [
    {
      title: "01: Understand AI Concepts & Fundamentals",
      desc: " Apply core concepts of artificial intelligence, including intelligent systems and problem-solving techniques.",
      image: img1,
    },
    {
      title: "02: Work with Programming & Data Handling",
      desc: " Use programming skills to process, analyze, and manage data for AI applications.",
      image: img2,
    },
    {
      title: "03: Build Machine Learning Models",
      desc: " Develop and train machine learning models to make predictions and data-driven decisions.",
      image: img3,
    },
    {
      title: "04: Apply AI Techniques to Real Problems",
      desc: " Use AI methods to solve practical problems across different domains and industries.",
      image: img4,
    },
    {
      title: "05:Understand Advanced AI Concepts",
      desc: " Gain knowledge of advanced topics like deep learning and natural language processing.",
      image: img5,
    },
    {
      title: "06:  Develop and Present AI Solutions",
      desc: " Create and present AI-based projects effectively for real-world applications.",
      image: img6,
    },
  ];

  return (
    <div data-aos="fade-up" className={styles.container}>
      <div className={styles.wrapper}>
        {/* TITLE */}
        <div className={styles.title}>
          <p className={styles.para1}>Learning Outcomes</p>
          <p className={styles.para2}>
            By the end of the program, students will be able to:
          </p>
        </div>

        <div className={styles.split}>
          {/* ACCORDION */}
          <div className={styles.accordion}>
            {outcomes.map((item, index) => (
              <Accordion
                key={index}
                expanded={expanded === index}
                onChange={() => setExpanded(index)}
                elevation={0}
              >
                <AccordionSummary expandIcon={<ExpandMoreIcon />}>
                  <Typography sx={{ fontWeight: 700 }}>{item.title}</Typography>
                </AccordionSummary>

                <AccordionDetails>
                  <Typography>{item.desc}</Typography>
                </AccordionDetails>
              </Accordion>
            ))}
          </div>

          {/* IMAGE */}
          <div className={styles.imageWrapper}>
            <Image
              key={expanded}
              src={outcomes[expanded].image}
              alt="Learning Outcome"
              width={500}
              height={350}
              className={styles.image}
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default LearningOutcome;
