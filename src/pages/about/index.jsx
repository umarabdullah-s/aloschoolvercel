import React,{Fragment} from 'react'
import Head from 'next/head'
import OurStory from '@/sections/aboutSection/OurStory/OurStory'



const About = () => {
  return (
    <Fragment>
      <Head>
        <title>ALO School | About</title>
        {/* enter seo here */}
      </Head>
    <OurStory/>
    </Fragment>
  )
}

export default About
