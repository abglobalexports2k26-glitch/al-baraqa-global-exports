import { useEffect } from 'react'
import { Link } from 'react-router-dom'
import AOS from 'aos'
import 'aos/dist/aos.css'
import './WhatWeExport.css'

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
    <div className="coming-soon-page">
      {/* Floating particles */}
      <div className="coming-soon-particles">
        <span className="particle" />
        <span className="particle" />
        <span className="particle" />
        <span className="particle" />
        <span className="particle" />
        <span className="particle" />
        <span className="particle" />
        <span className="particle" />
      </div>

      <div className="coming-soon-content">
        {/* Animated ring icon */}
        <div className="coming-soon-icon" data-aos="zoom-in" data-aos-duration="800">
          <div className="ring-outer" />
          <div className="ring-inner" />
          <div className="ring-glow" />
          <div className="ring-center-icon">
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
              <path d="M21 16V8a2 2 0 0 0-1-1.73l-7-4a2 2 0 0 0-2 0l-7 4A2 2 0 0 0 3 8v8a2 2 0 0 0 1 1.73l7 4a2 2 0 0 0 2 0l7-4A2 2 0 0 0 21 16z" />
              <polyline points="3.27 6.96 12 12.01 20.73 6.96" />
              <line x1="12" y1="22.08" x2="12" y2="12" />
            </svg>
          </div>
        </div>

        {/* Title */}
        <h1 className="coming-soon-title" data-aos="fade-up" data-aos-delay="200">
          What We Export
        </h1>

        {/* Intro paragraph */}
        <p className="coming-soon-subtitle" data-aos="fade-up" data-aos-delay="300">
          At <strong>Al Baraqah Global Exports</strong>, we are actively engaged in sourcing and supplying a wide range of products from India to international markets. With continuous trade involvement and established supplier networks, we ensure reliable execution, professional handling, and timely global deliveries.
        </p>

        {/* Export categories */}
        <div className="coming-soon-features" data-aos="fade-up" data-aos-delay="400">
          <span className="feature-chip">
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
              <path d="M12 2L2 7l10 5 10-5-10-5z" />
              <path d="M2 17l10 5 10-5" />
              <path d="M2 12l10 5 10-5" />
            </svg>
            Fresh Fruits &amp; Vegetables
          </span>
          <span className="feature-chip">
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
              <circle cx="12" cy="12" r="10" />
              <line x1="2" y1="12" x2="22" y2="12" />
              <path d="M12 2a15.3 15.3 0 0 1 4 10 15.3 15.3 0 0 1-4 10 15.3 15.3 0 0 1-4-10 15.3 15.3 0 0 1 4-10z" />
            </svg>
            Spices &amp; Agro Commodities
          </span>
          <span className="feature-chip">
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
              <path d="M22 11.08V12a10 10 0 1 1-5.93-9.14" />
              <polyline points="22 4 12 14.01 9 11.01" />
            </svg>
            Customized Sourcing as per Buyer Requirements
          </span>
        </div>

        {/* Quality note */}
        <p className="coming-soon-subtitle" data-aos="fade-up" data-aos-delay="500" style={{ fontSize: '0.98rem' }}>
          All products are <strong>quality-verified</strong>, securely packed, and shipped through dependable sea and air logistics channels.
        </p>

        {/* Divider */}
        <div className="coming-soon-divider" data-aos="fade" data-aos-delay="600" />

        {/* Portfolio note */}
        <p className="coming-soon-subtitle" data-aos="fade-up" data-aos-delay="650" style={{ fontSize: '0.95rem', opacity: 0.85 }}>
          A detailed product portfolio with specifications and packaging standards will be displayed shortly. In the meantime, share your requirement including product, quantity, packaging, and destination  and we will source and export it at the best quality and competitive pricing.
        </p>

        {/* CTA */}
        <p className="coming-soon-cta" data-aos="fade-up" data-aos-delay="700">
          Ready to trade? <Link to="/contact">Share your requirement →</Link>
        </p>
      </div>
    </div>
  )
}

export default WhatWeExport
