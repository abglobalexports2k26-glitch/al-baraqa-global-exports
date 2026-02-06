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
      duration: 1000,
      easing: 'ease-out-cubic',
      once: false,
      mirror: true,
      offset: 50,
      anchorPlacement: 'top-bottom'
    })
  }, [])

  return (
    <div className="home-page">
      <Banner />
      <div>
        <WhoWeAre />
      </div>
      <div>
        <Differentiators />
      </div>
      <div>
        <WhatWeExecute />
      </div>
      <div>
        <Governance />
      </div>
      <div data-aos-delay="100">
        <CTASection />
      </div>
    </div>
  )
}

export default Home
