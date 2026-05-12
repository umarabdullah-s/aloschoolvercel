import React, { Fragment } from "react";
import Head from "next/head";
import CampusLife from "@/sections/campusLifeSection/campusLifeHero/CampusLife";


const Campus = () => {
  return (
    <Fragment>
      <Head>
        <title>ALO School | Campus Life</title>
        {/* enter seo here */}
      </Head>
      <CampusLife/>
    </Fragment>
  );
};

export default Campus;