import React from 'react'
import styles from './Footer.module.css'
import img from "@/assets/footer/logo.png"
import Link from "next/link";
import Dialog from "@mui/material/Dialog";
import DialogContent from "@mui/material/DialogContent";
import DialogTitle from "@mui/material/DialogTitle";
import IconButton from "@mui/material/IconButton";
import CloseIcon from "@mui/icons-material/Close";
import Slide from "@mui/material/Slide";
import { forwardRef, useState } from "react";
import Image from "next/image";
import { FaChevronUp } from "react-icons/fa";

const Transition = forwardRef(function Transition(props, ref) {
  return <Slide direction="up" ref={ref} {...props} />;
});

const Footer = () => {
  const [openModal, setOpenModal] = useState(false);
  const handleContactClick = () => {
    const isMobile = /iPhone|iPad|iPod|Android/i.test(navigator.userAgent);

    if (isMobile) {
      // 📱 Mobile → Call
      window.location.href = "tel:+919994725508";
    } else {
      // 💻 Desktop → WhatsApp Web
      window.open(
        "https://wa.me/919994725508?text=Hello%20I%20want%20to%20know%20about%20your%20courses",
        "_blank",
      );
    }
  };

  return (
    <div className={styles.container}>
      <div className={styles.wrapper}>
        <div className={styles.div1}>
          <div className={styles.divs}>
            <div className={styles.contact}>
              <div className={styles.contactus}>
                <p className={styles.title1}>Contact us</p>
                <p className={styles.num} onClick={handleContactClick}>
                  +91 99947 25508
                </p>
                <a
                  href="mailto:contact@alosodt.com?subject=Course Inquiry&body=Hello, I want to know about your courses"
                  className={styles.email}
                >
                  contact@alosodt.com
                </a>
              </div>
              <div className={styles.location}>
                <p className={styles.title1}>Location</p>
                <a
                  href="https://maps.app.goo.gl/s1beo9R85dMt8tfJ8"
                  target="_blank"
                  rel="noopener noreferrer"
                  className={styles.num}
                >
                  Chunkankadai Jn, Nagercoil,
                  <br /> Kanniyakumari,
                  <br /> 629003
                </a>
              </div>
            </div>
            <div className={styles.termsconditions}>
              <p
                className={styles.terms}
                onClick={() => setOpenModal(true)}
                style={{ cursor: "pointer" }}
              >
                Terms & Conditions
              </p>
            </div>
          </div>
          <div className={`${styles.divs} ${styles.secondClass}`}>
            <div className={styles.imgdiv}>
              <div className={styles.img}>
                <Image src={img} alt="ALO Logo" width={102} height={154} />
              </div>
              <div className={styles.para}>
                <p>
                   Design your future
                  <br /> and master the art of design
                  <br /> with ALO School of Design & Technology
                </p>
              </div>
            </div>
            <div className={styles.copyright}>
              <p>
                © {new Date().getFullYear()} ALO School of Design & Technology.
                All rights reserved.
              </p>
              <p>
                Developed by{" "}
                <a
                  href="https://aloinfotech.in/"
                  target="_blank"
                  rel="noopener noreferrer"
                  style={{ color: "#FFFFFF", textDecoration: "underline" }}
                >
                  ALO INFOTECH
                </a>
              </p>
            </div>
          </div>
          <div className={`${styles.divs} ${styles.thirdClass}`}>
            <div className={styles.links}>
              <Link href="/about" className={styles.linkItem}>
                About
              </Link>
            <div className={styles.dropdown}>
 <div className={styles.programHeader}>
  <Link href="/program" className={styles.linkItem}>
    Program
  </Link>

  <FaChevronUp className={styles.arrow} />
</div>

  <div className={styles.dropdownMenu}>
     <Link href="/program/uiux" className={styles.dropdownItem}>
      Diploma in UI/UX
    </Link>
    <Link href="/program/fullstack" className={styles.dropdownItem}>
      Diploma in Full Stack
    </Link>

    <Link href="/program/ai" className={styles.dropdownItem}>
      Diploma in Artificial Intelligence (AI)
    </Link>

    <Link href="/program/vfx" className={styles.dropdownItem}>
      Diploma in VFX & Animations
    </Link>
  </div>
</div>
              <Link href="/campus-life" className={styles.linkItem}>
                Campus Life
              </Link>
              <Link href="/contact" className={styles.linkItem}>
                Contact
              </Link>
            </div>
            <div className={styles.social}>
              <a
                href="https://www.facebook.com/profile.php?id=61581231454085"
                target="_blank"
                rel="noopener noreferrer"
              >
                <i className="fa-brands fa-facebook-f"></i>
              </a>

              <a
                href="https://www.instagram.com/alo_school_design_technology_/?igsh=dXVwczR0NXczdmgy#"
                target="_blank"
                rel="noopener noreferrer"
              >
                <i className="fa-brands fa-instagram"></i>
              </a>

              <a
                href="https://www.linkedin.com/company/alo-school-of-design-and-technology/"
                target="_blank"
                rel="noopener noreferrer"
              >
                <i className="fa-brands fa-linkedin-in"></i>
              </a>
            </div>
          </div>
        </div>
        <div className={styles.div2}>
          <p>LET’S LAUNCH YOUR JOURNEY</p>
        </div>
      </div>
      <Dialog
        open={openModal}
        onClose={() => setOpenModal(false)}
        TransitionComponent={Transition}
        fullWidth
        maxWidth="md"
        sx={{ zIndex: 9999999 }}
        PaperProps={{
          sx: {
            borderRadius: "16px",
          },
        }}
      >
        <DialogTitle sx={{ fontWeight: 600 }}>
          Terms & Conditions
          <IconButton
            aria-label="close"
            onClick={() => setOpenModal(false)}
            sx={{ position: "absolute", right: 8, top: 8 }}
          >
            <CloseIcon />
          </IconButton>
        </DialogTitle>

        <DialogContent dividers sx={{ px: 4, py: 3, lineHeight: 1.8 }}>
          <p className={styles.modalPara}>
            By enrolling in our courses, you agree to abide by the institute
            rules, policies, and academic guidelines outlined below.
          </p>

          <h3 className={styles.modalHeading}>1. Acceptance of Terms</h3>
          <p className={styles.modalPara}>
            By enrolling in our courses you agree to abide by these terms and
            institutional policies.
          </p>

          <h3 className={styles.modalHeading}>2. Eligibility & Admission</h3>
          <p className={styles.modalPara}>
            Applicants must meet academic qualifications (High School / Any
            Degree). All submitted documents must be genuine; false information
            may result in cancellation of admission.
          </p>

          <h3 className={styles.modalHeading}>3. Enrollment & Fees</h3>
          <p className={styles.modalPara}>
            Admissions are subject to eligibility and seat availability. Fees
            once paid are non-refundable and must be paid according to the
            communicated schedule.
          </p>

          <h3 className={styles.modalHeading}>4. Code of Conduct</h3>
          <p className={styles.modalPara}>
            Students must maintain professional behavior and respect faculty,
            peers, and institute property. Violations may lead to suspension or
            expulsion.
          </p>

          <h3 className={styles.modalHeading}>5. Intellectual Property</h3>
          <p className={styles.modalPara}>
            All course materials are the intellectual property of ALO School of
            Design & Technology and may not be reproduced or distributed without
            written permission.
          </p>

          <h3 className={styles.modalHeading}>6. Certificate Issuance</h3>
          <p className={styles.modalPara}>
            Certificates will be awarded only after successful completion of the
            program and fulfillment of all academic requirements.
          </p>

          <h3 className={styles.modalHeading}>7. Changes to Courses</h3>
          <p className={styles.modalPara}>
            The institute reserves the right to update course content,
            structure, or faculty when necessary.
          </p>

          <h3 className={styles.modalHeading}>8. Participation in Events</h3>
          <p className={styles.modalPara}>
            Students are encouraged to participate in academic and
            extracurricular activities while maintaining academic performance.
          </p>

          <h3 className={styles.modalHeading}>9. Changes to Terms</h3>
          <p className={styles.modalPara}>
            Terms may be updated periodically. Students will be notified of any
            significant changes.
          </p>

          <h2 className={styles.modalMainTitle}>Privacy Policy</h2>

          <h3 className={styles.modalHeading}>Information Collection</h3>
          <p className={styles.modalPara}>
            We collect personal information such as name, email, phone number,
            educational background, and payment details during registration.
          </p>

          <h3 className={styles.modalHeading}>Use of Information</h3>
          <p className={styles.modalPara}>
            Information is used to process admissions, provide academic
            services, communicate updates, and improve user experience.
          </p>

          <h3 className={styles.modalHeading}>Data Protection</h3>
          <p className={styles.modalPara}>
            Personal data is stored securely and will not be sold or shared
            without consent. Security measures are implemented to prevent
            unauthorized access.
          </p>

          <h3 className={styles.modalHeading}>Third-Party Tools</h3>
          <p className={styles.modalPara}>
            We may use third-party platforms for learning and payments, which
            have their own privacy policies.
          </p>

          <h2 className={styles.modalMainTitle}>Attendance Policy</h2>
          <p className={styles.modalPara}>
            Students must maintain at least 80% attendance. Low attendance may
            affect evaluations, certification, and placement support.
          </p>

          <h2 className={styles.modalMainTitle}>Refund Policy</h2>
          <p className={styles.modalPara}>
            All fees including application, registration, and tuition are
            strictly non-refundable under any circumstances.
          </p>

          <h2 className={styles.modalMainTitle}>Declaration</h2>
          <p className={styles.modalPara}>
            I declare that all information provided is accurate. Any false
            details may result in cancellation of enrollment.
          </p>
        </DialogContent>
      </Dialog>
    </div>
  );
}

export default Footer