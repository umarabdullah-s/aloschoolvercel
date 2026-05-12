import React, { useState, useEffect } from "react";
import styles from "./campuslife.module.css";
import { getEvent } from "@/api/serviceApi";
import { HiOutlineCalendarDays } from "react-icons/hi2";
import Image from "next/image";

const CampusLife = () => {
  const [campusData, setCampusData] = useState([]);
  const [activeTab, setActiveTab] = useState(null);
  const [visibleCount, setVisibleCount] = useState(8);

  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [preview, setPreview] = useState(null);
const [tabLoading, setTabLoading] = useState(false);
  useEffect(() => {
    const fetchEvents = async () => {
      try {
        setLoading(true);
        const res = await getEvent(); // no param = list

        const events = res?.data?.data?.data || [];

        const formatted = events.map((item) => ({
          id: item._id,
          eventName: item.eventName,
          images: item.eventImage || [],
        }));

        setCampusData(formatted);

        if (formatted.length > 0) {
          setActiveTab(formatted[0]);
        }
      } catch (err) {
        console.error(err);
        setError("Failed to load campus events");
      } finally {
        setLoading(false);
      }
    };

    fetchEvents();
  }, []);

 const handleTabClick = async (tab, e) => {
   const btn = e.currentTarget;

   setActiveTab(tab);
   setVisibleCount(8);

   try {
     setTabLoading(true);

     const res = await getEvent(tab.eventName);
     const events = res?.data?.data?.data || [];

     if (events.length > 0) {
       // ✅ update images of selected tab only
       setActiveTab((prev) => ({
         ...prev,
         images: events[0]?.eventImage || [],
       }));
     }
   } catch (err) {
     console.error(err);
     setError("Failed to load images");
   } finally {
     setTabLoading(false);
   }

   btn?.scrollIntoView({
     behavior: "smooth",
     inline: "center",
     block: "nearest",
   });
 };
//  if (loading) {
//    return (
//      <div className={styles.grid}>
//        {Array.from({ length: 6 }).map((_, i) => (
//          <div key={i} className={styles.skeletonCard}></div>
//        ))}
//      </div>
//    );
//  }
//     e.currentTarget.scrollIntoView({
//       behavior: "smooth",
//       inline: "center",
//       block: "nearest",
//     });
//   };


  if (loading) {
    return (
      <div className={styles.fullPageLoader}>
        <div className={styles.grid}>
          {Array.from({ length: 6 }).map((_, i) => (
            <div key={i} className={styles.skeletonCard}></div>
          ))}
        </div>
      </div>
    );
  }

  if (error) return <p className={styles.error}>{error}</p>;
 if (!activeTab) {
   return (
     <div className={styles.noEventContainer}>
       <HiOutlineCalendarDays className={styles.noEventIcon} />
       <h2>No Events Yet</h2>
       <p>Campus photos will appear here once events are uploaded</p>
     </div>
   );
 }

  return (
    <div className={styles.container}>
      <div className={styles.wrapper}>
        <div className={styles.tabsWrapper}>
          <div className={styles.tabsScroll}>
            {campusData.map((tab) => (
              <button
                key={tab.id}
                onClick={(e) => handleTabClick(tab, e)}
                className={`${styles.tabButton} ${
                  activeTab.id === tab.id ? styles.activeTab : ""
                }`}
              >
                {tab.eventName}
              </button>
            ))}
          </div>
        </div>
        {tabLoading ? (
          <div className={styles.grid}>
            {Array.from({ length: 6 }).map((_, i) => (
              <div key={i} className={styles.skeletonCard}></div>
            ))}
          </div>
        ) : activeTab.images.length > 0 ? (
          <div className={styles.grid}>
            {activeTab.images.slice(0, visibleCount).map((img, i) => (
              <div key={i} className={styles.card}>
                {/* <Image
                  src={img}
                  alt="Campus Event"
                  width={270}
                  height={220}
                  className={styles.image}
                /> */}
                <img src={img} alt="" className={styles.image} />
              </div>
            ))}
          </div>
        ) : (
          <p className={styles.emptyState}>📸 Photos will be uploaded soon</p>
        )}

        {visibleCount < activeTab.images.length && (
          <div className={styles.loadMoreWrapper}>
            <button
              className={styles.loadMoreBtn}
              onClick={() => setVisibleCount((prev) => prev + 8)}
            >
              Load More
            </button>
          </div>
        )}
      </div>
    </div>
  );
};

export default CampusLife;