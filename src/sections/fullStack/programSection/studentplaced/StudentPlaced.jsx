import React, { useEffect, useState } from "react";
import styles from "./studentplaced.module.css";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay } from "swiper/modules";
import { getAlumniOnly } from "@/api/serviceApi";
import { FaUserGraduate } from "react-icons/fa";
import Image from "next/image"; // ✅ import

import "swiper/css";
import "swiper/css/autoplay";

const StudentPlaced = () => {
  const [students, setStudents] = useState([]);

  useEffect(() => {
    fetchAlumni();
  }, []);

  const fetchAlumni = async () => {
    try {
      const res = await getAlumniOnly();

      if (res?.data?.status && Array.isArray(res?.data?.data)) {
        const mappedData = res.data.data.map((item) => ({
          alumniName: item.alumniName || "Student Name",
          position: item.position || "Position",
          alumniImage: item.alumniImage || "https://via.placeholder.com/150",
          companyLogo: item.companyLogo,
        }));

        setStudents(mappedData);
      }
    } catch (error) {
      console.error("Error fetching alumni list:", error);
    }
  };

  const shouldLoop = students.length > 3;

  return (
    <div data-aos="fade-up" className={styles.container}>
      <div className={styles.wrapper}>
        {/* HEADER */}
        <div className={styles.head}>
          <p className={styles.title}>100+ Placed Students</p>
          <p className={styles.para}>
            ALO has placed 100+ Students in leading IT companies, ensuring
            industry-ready skills
            <br />
            and career growth
          </p>
        </div>

        {students.length > 0 ? (
          <Swiper
            className={styles.slider}
            modules={[Autoplay]}
            spaceBetween={20}
            slidesPerView={4}
            loop={shouldLoop}
            speed={5000}
            autoplay={
              shouldLoop
                ? {
                    delay: 1,
                    disableOnInteraction: false,
                  }
                : false
            }
            allowTouchMove={false}
            breakpoints={{
              320: { slidesPerView: 1 },
              576: { slidesPerView: 2 },
              768: { slidesPerView: 3 },
              1024: { slidesPerView: 4 },
            }}
          >
            {students.map((student, index) => {
              const cardColor =
                index % 4 === 0
                  ? styles.yellow
                  : index % 4 === 1
                    ? styles.blue
                    : index % 4 === 2
                      ? styles.red
                      : styles.orange;

              return (
                <SwiperSlide key={index}>
                  <div className={`${styles.card} ${cardColor}`}>
                    {/* TOP INFO */}
                    <div className={styles.topInfo}>
                      <div className={styles.namelogo}>
                        <div className={styles.name}>
                          <p className={styles.stuname}>{student.alumniName}</p>
                        </div>

                        {student.companyLogo && (
                          <div className={styles.logoBox}>
                            <Image
                              src={student.companyLogo}
                              alt="Company Logo"
                              width={50}
                              height={50}
                            />
                          </div>
                        )}
                      </div>

                      {student.position && (
                        <div className={styles.companyText}>
                          <p className={styles.companyName}>
                            {student.position}
                          </p>
                        </div>
                      )}
                    </div>

                    {/* IMAGE */}
                    <div className={styles.img}>
                      <Image
                        src={student.alumniImage}
                        alt={student.alumniName}
                        width={150}
                        height={150}
                        className={styles.image}
                      />
                    </div>
                  </div>
                </SwiperSlide>
              );
            })}
          </Swiper>
        ) : (
          <div className={styles.emptyState}>
            <FaUserGraduate className={styles.emptyIcon} />
            <p>No Students Placed Yet</p>
          </div>
        )}
      </div>
    </div>
  );
};

export default StudentPlaced;
