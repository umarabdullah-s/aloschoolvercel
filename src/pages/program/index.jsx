import React, { Fragment } from "react";
import Head from "next/head";
import ProgramHero from "@/sections/programSection/ProgramHero/ProgramHero";
import ProgramStructure from "@/sections/programSection/ProgramStructure/ProgramStructure";
import LearningOutcome from "@/sections/programSection/learningprocess/LearningOutcome";
import StudentPlaced from "@/sections/programSection/studentplaced/StudentPlaced";
import StudentPortfolio from "@/sections/programSection/StudentPortfolio/StudentPortfolio";


const Program = () => {
  return (
    <Fragment>
      <Head>
        <title>ALO School | Program</title>
        {/* enter seo here */}
      </Head>
     <ProgramHero/>
     <ProgramStructure/>
     <StudentPlaced/>
     <LearningOutcome/>
     <StudentPortfolio/>
    </Fragment>
  );
};

export default Program;
