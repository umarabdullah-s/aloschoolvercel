import React from "react";
import Image from "next/image"; // ✅ import
import img1 from "@/assets/aboutpage/team1.png";
import img2 from "@/assets/aboutpage/imggg.jpeg";
import { FaLinkedinIn } from "react-icons/fa";
import styles from "./team.module.css";

const teamMembers = [
  {
    name: "Esai Kumar P",
    role: "Executive Director & Trustee",
    image: img1,
    linkedin: "https://www.linkedin.com/in/esai-kumar-38620a25b/",
  },
  {
    name: "Ramya B",
    role: "Secretary",
    image: img2,
    linkedin: "https://www.linkedin.com/in/ramya-b-a452642a8/",
  },
];

const Team = () => {
  return (
    <div className={styles.container}>
      <div className={styles.wrapper}>
        <div className={styles.formobile}>
          <p className={styles.mobileTitle}>
            Our<span>Team</span>
          </p>
        </div>

        <div className={styles.cards}>
          {teamMembers.map((member, index) => (
            <div key={index} className={styles.card}>
              {/* IMAGE */}
              <div className={styles.img}>
                <Image
                  src={member.image}
                  alt={member.name}
                  width={250}
                  height={250}
                  className={styles.imageTag}
                />
              </div>

              {/* CONTENT */}
              <div className={styles.intro}>
                <div className={styles.namedesg}>
                  <p className={styles.name}>{member.name}</p>
                  <p className={styles.designation}>{member.role}</p>
                </div>

                <div className={styles.linkedin}>
                  <a
                    href={member.linkedin}
                    target="_blank"
                    rel="noopener noreferrer"
                    className={styles.linkedinBox}
                  >
                    <FaLinkedinIn className={styles.linkedinIcon} />
                  </a>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Team;
