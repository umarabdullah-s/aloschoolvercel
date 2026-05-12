import React from "react";
import styles from "./admissionprocedure.module.css";
import img1 from "@/assets/homepage/admissionprocedure/img1.jpeg";
import img2 from "@/assets/homepage/admissionprocedure/img2.jpeg";
import img3 from "@/assets/homepage/admissionprocedure/7009.jpg";
import Link from "next/link";
import Image from "next/image"; // ✅ import

const AdmissionProcedure = () => {
  return (
    <div data-aos="fade-up" className={styles.container}>
      <div className={styles.wrapper}>
        <div className={styles.head}>
          <p className={styles.title}>Admission Procedure</p>
          <p className={styles.para}>
            Start your UI/UX journey at ALO School of Design and Technology{" "}
            <br />
            in just a few simple steps.
          </p>
        </div>

        <div className={styles.content}>
          {/* CARD 1 */}
          <div className={styles.card}>
            <div className={styles.desc}>
              <p className={`${styles.para1} ${styles.paraGreen}`}>
                Application Submission
              </p>
              <p className={styles.para2}>
                Fill out the online application form by clicking{" "}
                <Link href="/application-form" className={styles.applyLink}>
                  Apply Now
                </Link>
              </p>
            </div>

            <div className={styles.img}>
              <Image
                src={img1}
                alt="Application Submission"
                width={300}
                height={200}
                className={styles.image}
              />
            </div>
          </div>

          {/* CARD 2 */}
          <div className={`${styles.card} ${styles.cardcenter}`}>
            <div className={styles.img}>
              <Image
                src={img2}
                alt="Counseling Session"
                width={300}
                height={200}
                className={styles.image}
              />
            </div>

            <div className={styles.desc}>
              <p className={`${styles.para1} ${styles.paraRed}`}>
                Counseling Session
              </p>
              <p className={styles.para2}>
                After submitting your application, our admissions team will
                contact you for a free counseling session.
              </p>
            </div>
          </div>

          {/* CARD 3 */}
          <div className={styles.card}>
            <div className={styles.desc}>
              <p className={`${styles.para1} ${styles.paraGreen}`}>
                Confirm Enrollment
              </p>
              <p className={styles.para2}>
                Secure your admission and kickstart your UI/UX journey with an
                orientation session.
              </p>
            </div>

            <div className={styles.img}>
              <Image
                src={img3}
                alt="Confirm Enrollment"
                width={300}
                height={200}
                className={styles.image}
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AdmissionProcedure;
