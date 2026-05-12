import React, { useState } from "react";
import styles from "./learningoutcome.module.css";
import Accordion from "@mui/material/Accordion";
import AccordionSummary from "@mui/material/AccordionSummary";
import AccordionDetails from "@mui/material/AccordionDetails";
import Typography from "@mui/material/Typography";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import Image from "next/image"; 

import img1 from "@/assets/program/faq/imgfaq1.jpg";
import img2 from "@/assets/program/faq/imgfaq2.jpg";
import img3 from "@/assets/program/faq/imgfaq3.jpg";
import img4 from "@/assets/program/faq/imgfaq4.jpg";
import img5 from "@/assets/program/faq/imgfaq5.jpg";
import img6 from "@/assets/program/faq/imgfaq6.jpg";

const LearningOutcome = () => {
  const [expanded, setExpanded] = useState(0);

  const outcomes = [
    {
      title: "01:Build Responsive Web Applications",
      desc: "	Develop dynamic and responsive user interfaces using modern front-end technologies and frameworks.",
      image: img1,
    },
    {
      title: "02: Develop Server Side Applications & APIs",
      desc: "Create strong back-end systems, build APIs, and manage application logic using modern development tools.",
      image: img2,
    },
    {
      title: "03: Manage Databases Efficiently",
      desc: "	Design, manage, and integrate databases to store and retrieve data securely and efficiently.",
      image: img3,
    },
    {
      title: "04: Understand Application Architecture",
      desc: "Learn how to design and structure scalable web applications using industry-standard architecture and development practices.",
      image: img4,
    },
    {
      title: "05: Implement Full Stack Integration",
      desc: "Integrate front-end, back-end, and databases to build complete, scalable web applications.",
      image: img5,
    },
    {
      title: "06: Work on Real-World Development Projects",
      desc: "Apply your skills through hands-on projects that simulate real industry use cases and workflows.",
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
