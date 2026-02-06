import { useEffect } from 'react'
import AOS from 'aos'
import 'aos/dist/aos.css'

function WhatWeExport() {
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
    <div className="page-container">
      <h1 data-aos="fade-up">What We Export</h1>
      <p data-aos="fade-up" data-aos-delay="100">Product categories and offerings.</p>
    </div>
  )
}

export default WhatWeExport
