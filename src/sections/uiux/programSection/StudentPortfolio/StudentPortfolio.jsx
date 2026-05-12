import React, { useEffect, useState } from "react";
import styles from "./studentportfolio.module.css";
import { FaBehance } from "react-icons/fa";
import { getPortfolioOnly } from "@/api/serviceApi";
import { TbFoldersOff } from "react-icons/tb";
import Image from "next/image"; // ✅ import

const StudentPortfolio = () => {
  const [portfolio, setPortfolio] = useState([]);
  const [visibleCount, setVisibleCount] = useState(9);

  useEffect(() => {
    fetchPortfolio();
  }, []);

  const fetchPortfolio = async () => {
    try {
      const res = await getPortfolioOnly();

      const workData = res.data.data.filter((item) => item.model === "work");

      setPortfolio(workData);
    } catch (err) {
      console.error("Portfolio fetch failed", err);
    }
  };

  const handleViewMore = () => {
    setVisibleCount(portfolio.length);
  };

  return (
    <div data-aos="fade-up" className={styles.container}>
      <div className={styles.wrapper}>
        {/* HEADER */}
        <div className={styles.head}>
          <p className={styles.title}>Students Portfolio</p>
          <p className={styles.para}>
            A Showcase of Real Projects Created by
            <br />
            Our Talented Students
          </p>
        </div>

        {/* CARDS */}
        <div className={styles.cards}>
          {portfolio.slice(0, visibleCount).map((item) => (
            <div className={styles.card} key={item._id}>
              {/* PROJECT IMAGE */}
              <div className={styles.img}>
                <Image
                  src={item.thumbnailImage}
                  alt="Project"
                  width={300}
                  height={200}
                  className={styles.image}
                />
              </div>

              {/* PROFILE */}
              <div className={styles.desc}>
                <div className={styles.profile}>
                  <div className={styles.profileimg}>
                    <Image
                      src={item.alumniImage}
                      alt={item.alumniName}
                      width={50}
                      height={50}
                      className={styles.profileImage}
                    />
                  </div>

                  <div className={styles.profilename}>
                    <p className={styles.name1}>{item.alumniName}</p>
                    <p className={styles.name2}>{item.position}</p>
                  </div>
                </div>

                {/* LINK */}
                <a
                  href={item.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className={styles.profilelink}
                >
                  <FaBehance className={styles.behanceIcon} />
                </a>
              </div>
            </div>
          ))}

          {/* EMPTY STATE */}
          {portfolio.length === 0 && (
            <div className={styles.emptyState}>
              <TbFoldersOff className={styles.emptyIcon} />
              <p className={styles.emptyTitle}>No Portfolio Yet</p>
              <p className={styles.emptySub}>
                Student projects will appear here once uploaded
              </p>
            </div>
          )}
        </div>

        {/* VIEW MORE */}
        {portfolio.length > 9 && visibleCount === 9 && (
          <div className={styles.viewMoreContainer}>
            <button className={styles.viewMoreBtn} onClick={handleViewMore}>
              View More
            </button>
          </div>
        )}
      </div>
    </div>
  );
};

export default StudentPortfolio;
