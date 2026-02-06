import { useEffect } from 'react'
import AOS from 'aos'
import 'aos/dist/aos.css'

function MarketIntelligence() {
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
      <h1 data-aos="fade-up">Market Intelligence</h1>
      <p data-aos="fade-up" data-aos-delay="100">Understanding of global markets, region-specific trade behaviour, import regulation awareness, payment practices across regions, and risk awareness across markets.</p>
    </div>
  )
}

export default MarketIntelligence
