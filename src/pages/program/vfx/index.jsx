import React, { Fragment } from "react";
import Head from "next/head";
import ProgramHero from "@/sections/vfx/programSection/ProgramHero/ProgramHero";
import ProgramStructure from "@/sections/vfx/programSection/ProgramStructure/ProgramStructure";
import LearningOutcome from "@/sections/vfx/programSection/learningprocess/LearningOutcome";
import StudentPlaced from "@/sections/vfx/programSection/studentplaced/StudentPlaced";






const VFX = () => {
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

export default VFX;