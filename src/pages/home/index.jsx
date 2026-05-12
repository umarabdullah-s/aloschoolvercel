import React, { Fragment } from "react";
import Head from "next/head";
import HeroSection from "@/sections/homeSection/HeroSection/HeroSection";
import MissionVision from "@/sections/homeSection/MissionVision/MissionVision";
import WhyAlo from "@/sections/homeSection/WhyAlo/WhyAlo";
import AdmissionProcedure from "@/sections/homeSection/AdmissionProcedure/AdmissionProcedure";
import StudentSays from "@/sections/homeSection/StudentSays/StudentSays";

const Home = () => {
  return (
    <Fragment>
      <Head>
        <title>Alo School of Design and Technology</title>
        {/* enter seo here */}
      </Head>
      <HeroSection />
      <MissionVision/>
      <WhyAlo/>
      <AdmissionProcedure/>
      <StudentSays/>
    </Fragment>
  );
};

export default Home;
