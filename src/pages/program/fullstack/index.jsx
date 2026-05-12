import React, { Fragment } from "react";
import Head from "next/head";


import ProgramHero from "@/sections/fullstack/programSection/ProgramHero/ProgramHero";
import ProgramStructure from "@/sections/fullstack/programSection/ProgramStructure/ProgramStructure";
import LearningOutcome from "@/sections/fullstack/programSection/learningprocess/LearningOutcome";
import StudentPlaced from "@/sections/fullstack/programSection/studentplaced/StudentPlaced";


const Fullstack = () => {
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

export default Fullstack;