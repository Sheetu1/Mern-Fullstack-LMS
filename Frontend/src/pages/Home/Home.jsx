import React from 'react'
import HeroSection from './HeroSection'
import Navbar from './Navbar'
import FeaturesSection from './FeaturesSection'
import CoursePreview from './CoursePreview'
import HowItWorks from './HowItWorks'
import Footer from './Footer'


const Home = () => {
  return (
    <div>
        <Navbar/>
        <HeroSection/>
        <FeaturesSection/>
        <CoursePreview/>
        <HowItWorks/>
        <Footer/>
    </div>
  )
}

export default Home