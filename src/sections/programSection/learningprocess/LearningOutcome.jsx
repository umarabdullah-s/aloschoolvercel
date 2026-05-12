import React, { useState } from "react";
import styles from "./learningoutcome.module.css";
import Accordion from "@mui/material/Accordion";
import AccordionSummary from "@mui/material/AccordionSummary";
import AccordionDetails from "@mui/material/AccordionDetails";
import Typography from "@mui/material/Typography";
import img1 from "@/assets/program/faq/faq1.jpeg"
import img2 from "@/assets/program/faq/faq2.png";
import img3 from "@/assets/program/faq/faq3.jpeg"
import img4 from "@/assets/program/faq/faq4.png";
import img5 from "@/assets/program/faq/faq5.png";
import img6 from "@/assets/program/faq/faq6.png";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";

const LearningOutcome = () => {
    const [expanded, setExpanded] = useState(0);

 const outcomes = [
   {
     title: "01: Apply User Centered Design Thinking",
     desc: "Understand user needs, define problems clearly, and create thoughtful design solutions",
     image: img1.src,
   },
   {
     title: "02: Design User-friendly & Visually Engaging Interfaces",
     desc: "Create clean, user-friendly layouts using strong UI principles and visual hierarchy",
     image: img2.src,
   },
   {
     title: "03: Conduct UX Research & Build Wireframes",
     desc: "Plan user research, develop user flows, and create wireframes for web and mobile apps.",
     image: img3.src,
   },
   {
     title: "04: Create Interactive Prototypes",
     desc: "Use modern tools like Figma and Adobe XD to design and test interactive prototypes.",
     image: img4.src,
   },
   {
     title: "05: Work on Real-World Design Projects",
     desc: "Apply practical skills through live projects, case studies, and collaborative tasks.",
     image: img5.src,
   },
   {
     title: "06: Build a Professional UI/UX Design",
     desc: "Present design work effectively with strong case studies ready for job opportunities.",
     image: img6.src,
   },
 ];


  return (
    <div data-aos="fade-up" className={styles.container}>
      <div className={styles.wrapper}>
        <div className={styles.title}>
          <p className={styles.para1}>Learning Outcomes</p>
          <p className={styles.para2}>
            By the end of the program, students will be able to:
          </p>
        </div>
        <div className={styles.split}>
          <div className={styles.accordion}>
            {outcomes.map((item, index) => (
              <Accordion
                key={index}
                expanded={expanded === index}
                onChange={() => setExpanded(index)}
                elevation={0}
                sx={{
                  transition: "all 0.35s ease",
                  "& .MuiCollapse-root": {
                    transition: "height 0.35s ease",
                  },
                }}
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

          <div className={styles.imageWrapper}>
            <img
              key={outcomes[expanded].image}
              src={outcomes[expanded].image}
              alt=""
              className={styles.image}
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default LearningOutcome;
