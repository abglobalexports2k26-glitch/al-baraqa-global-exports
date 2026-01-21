import { useEffect } from 'react'
import AOS from 'aos'
import 'aos/dist/aos.css'
import Banner from '../../components/Banner'
import WhoWeAre from '../../components/WhoWeAre'
import Differentiators from '../../components/Differentiators'
import WhatWeExecute from '../../components/WhatWeExecute'
import Governance from '../../components/Governance'
import CTASection from '../../components/CTASection'
import './Home.css'

function Home() {
  useEffect(() => {
    AOS.init({
      duration: 800,
      easing: 'ease-in-out',
      once: true,
      offset: 100
    })
  }, [])

  return (
    <div className="home-page">
      <Banner />
      <div data-aos="fade-up">
        <WhoWeAre />
      </div>
      <div data-aos="fade-up">
        <Differentiators />
      </div>
      <div data-aos="fade-up">
        <WhatWeExecute />
      </div>
      <div data-aos="fade-up">
        <Governance />
      </div>
      <div data-aos="fade-up" data-aos-delay="100">
        <CTASection />
      </div>
    </div>
  )
}

export default Home
