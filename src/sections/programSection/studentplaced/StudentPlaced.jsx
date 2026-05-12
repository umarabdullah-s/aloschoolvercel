// import React, { useEffect, useState } from "react";
// import styles from "./studentplaced.module.css";
// import { Swiper, SwiperSlide } from "swiper/react";
// import { Autoplay } from "swiper/modules";
// import { getAlumniOnly } from "@/api/serviceApi";
// import { FaUserGraduate } from "react-icons/fa";

// import "swiper/css";
// import "swiper/css/autoplay";

// const StudentPlaced = () => {
//   const [students, setStudents] = useState([]);

//   useEffect(() => {
//     fetchAlumni();
//   }, []);

//   const fetchAlumni = async () => {
//     try {
//       const res = await getAlumniOnly();

//       if (res?.data?.status && Array.isArray(res?.data?.data)) {
//         const mappedData = res.data.data.map((item) => ({
//           alumniName: item.alumniName || "Student Name",
//           position: item.position || "Position",
//           alumniImage:
//             item.alumniImage || "https://via.placeholder.com/150",
//           companyLogo:
//             item.companyLogo || "https://via.placeholder.com/40",
//         }));

//         setStudents(mappedData);
//       }
//     } catch (error) {
//       console.error("Error fetching alumni list:", error);
//     }
//   };

//   return (
//     <div data-aos="fade-up" className={styles.container}>
//       <div className={styles.wrapper}>
//         <div className={styles.head}>
//           <p className={styles.title}>100+ Placed Students</p>
//           <p className={styles.para}>
//             ALO has placed 100+ trainees in leading IT companies, ensuring
//             industry-ready skills
//             <br />
//             and career growth
//           </p>
//         </div>

//         {students.length > 0 ? (
//           <Swiper
//             className={styles.slider}
//             modules={[Autoplay]}
//             spaceBetween={20}
//             slidesPerView={4}
//             loop={students.length >= 4}
//             speed={5000}
//             autoplay={
//               students.length >= 4
//                 ? {
//                     delay: 1,
//                     disableOnInteraction: false,
//                   }
//                 : false
//             }
//             allowTouchMove={false}
//             breakpoints={{
//               320: { slidesPerView: 1 },
//               576: { slidesPerView: 2 },
//               768: { slidesPerView: 3 },
//               1024: { slidesPerView: 4 },
//             }}
//           >
//             {students.map((student, index) => {
//               const cardColor =
//                 index % 4 === 0
//                   ? styles.yellow
//                   : index % 4 === 1
//                     ? styles.blue
//                     : index % 4 === 2
//                       ? styles.red
//                       : styles.orange;

//               return (
//                 <SwiperSlide key={index}>
//                   <div className={`${styles.card} ${cardColor}`}>
//                     <div className={styles.topInfo}>
//                       <div className={styles.namelogo}>
//                         <div className={styles.name}>
//                           <p className={styles.stuname}>{student.alumniName}</p>
//                         </div>

//                         <div className={styles.logoBox}>
//                           <img src={student.companyLogo} alt="Company Logo" />
//                         </div>
//                       </div>

//                       <div className={styles.companyText}>
//                         <p className={styles.companyName}>{student.position}</p>
//                       </div>
//                     </div>

//                     <div className={styles.img}>
//                       <img src={student.alumniImage} alt={student.alumniName} />
//                     </div>
//                   </div>
//                 </SwiperSlide>
//               );
//             })}
//           </Swiper>
//         ) : (
//           <div className={styles.emptyState}>
//             <FaUserGraduate className={styles.emptyIcon} />
//             <p>No Students Placed Yet</p>
//           </div>
//         )}
//       </div>
//     </div>
//   );
// };

// export default StudentPlaced;

import React, { useEffect, useState } from "react";
import styles from "./studentplaced.module.css";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay } from "swiper/modules";
import { getAlumniOnly } from "@/api/serviceApi";
import { FaUserGraduate } from "react-icons/fa";

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
          companyLogo: item.companyLogo || "https://via.placeholder.com/40",
        }));

        setStudents(mappedData);
      }
    } catch (error) {
      console.error("Error fetching alumni list:", error);
    }
  };

 const shouldLoop = students.length >= 1;

  return (
    <div data-aos="fade-up" className={styles.container}>
      <div className={styles.wrapper}>
        <div className={styles.head}>
          <p className={styles.title}>100+ Placed Students</p>
          <p className={styles.para}>
            ALO has placed 100+ trainees in leading IT companies, ensuring
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
                    <div className={styles.topInfo}>
                      <div className={styles.namelogo}>
                        <div className={styles.name}>
                          <p className={styles.stuname}>{student.alumniName}</p>
                        </div>

                        <div className={styles.logoBox}>
                          <img src={student.companyLogo} alt="Company Logo" />
                        </div>
                      </div>

                      <div className={styles.companyText}>
                        <p className={styles.companyName}>{student.position}</p>
                      </div>
                    </div>

                    <div className={styles.img}>
                      <img src={student.alumniImage} alt={student.alumniName} />
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