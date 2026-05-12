import React, { Fragment } from "react";
import Head from "next/head";
import Applicationform from "@/sections/homeSection/AdmissionProcedure/Applicationform";


const applicationform = () => {
  return (
    <Fragment>
      <Head>
        <title>ALO School | Application Form</title>
        {/* enter seo here */}
      </Head>
      <Applicationform />
    </Fragment>
  );
};

export default applicationform;