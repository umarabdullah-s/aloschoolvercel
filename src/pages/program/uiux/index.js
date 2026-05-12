import React, { Fragment } from "react";
import Head from "next/head";


import ProgramHero from "@/sections/uiux/programSection/ProgramHero/ProgramHero";
import ProgramStructure from "@/sections/uiux/programSection/ProgramStructure/ProgramStructure";
import LearningOutcome from "@/sections/uiux/programSection/learningprocess/LearningOutcome";
import StudentPlaced from "@/sections/uiux/programSection/studentplaced/StudentPlaced";
import StudentPortfolio from "@/sections/uiux/programSection/StudentPortfolio/StudentPortfolio";

const UIUX= () => {
  return (
    <Fragment>
      <Head>
        <title>ALO School | Application Form</title>
     
      </Head>
       <ProgramHero/>
     <ProgramStructure/>
     <StudentPlaced/>
     <LearningOutcome/>
     <StudentPortfolio/>
    </Fragment>
  );
};

export default UIUX;