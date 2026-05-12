import React, { Fragment } from "react";
import Head from "next/head";
import ProgramHero from "@/sections/ai/programSection/ProgramHero/ProgramHero";
import ProgramStructure from "@/sections/ai/programSection/ProgramStructure/ProgramStructure";
import LearningOutcome from "@/sections/ai/programSection/learningprocess/LearningOutcome";
import StudentPlaced from "@/sections/ai/programSection/studentplaced/StudentPlaced";





const AI = () => {
  return (
    <Fragment>
      <Head>
        <title>ALO School | Application Form</title>
   
      </Head>
      <ProgramHero/>
     <ProgramStructure/>
     <StudentPlaced/>
     <LearningOutcome/>

    </Fragment>
  );
};

export default AI;