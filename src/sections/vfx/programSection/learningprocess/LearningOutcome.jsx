import React, { useState } from "react";
import styles from "./learningoutcome.module.css";
import Accordion from "@mui/material/Accordion";
import AccordionSummary from "@mui/material/AccordionSummary";
import AccordionDetails from "@mui/material/AccordionDetails";
import Typography from "@mui/material/Typography";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import Image from "next/image"; // ✅ import

import img1 from "@/assets/program/faq/vfxfaq1.jpg";
import img2 from "@/assets/program/faq/vfxfaq2.jpg";
import img3 from "@/assets/program/faq/vfxfaq3.jpg";
import img4 from "@/assets/program/faq/vfxfaq4.jpg";
import img5 from "@/assets/program/faq/vfxfaq5.jpg";
import img6 from "@/assets/program/faq/vfxfaq6.jpg";

const LearningOutcome = () => {
  const [expanded, setExpanded] = useState(0);

  const outcomes = [
    {
      title: "01: Understand Core Animation Principles",
      desc: " Apply the fundamentals of 2D and 3D animation, including timing, movement, and visual storytelling.",
      image: img1,
    },
    {
      title: "02: Create 2D & 3D Animations",
      desc: " Design and produce engaging animations using industry-standard tools and techniques.",
      image: img2,
    },
    {
      title: "03: Apply Visual Effects & Compositing",
      desc: " Create realistic visual effects and combine elements seamlessly using compositing methods.",
      image: img3,
    },
    {
      title: "04: Design Motion Graphics",
      desc: "Develop creative motion graphics for digital media, advertisements, and storytelling.",
      image: img4,
    },
    {
      title: "05: Understand Production Workflows",
      desc: "Apply practical skills through live projects, case studies, and collaborative tasks.",
      image: img5,
    },
    {
      title: "06: Present Creative Work Professionally",
      desc: "  Organize and showcase projects effectively for career opportunities in VFX and animation.",
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
