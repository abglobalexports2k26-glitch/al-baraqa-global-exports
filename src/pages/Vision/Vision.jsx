import { useEffect } from 'react'
import AOS from 'aos'
import 'aos/dist/aos.css'
import './Vision.css'
import ourvisionBg from '../../assets/images/ourvision_page_bg.jpeg'
function Vision() {
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
    <div className="vision-page">
      {/* Hero Section */}
      <section className="vision-hero">
        <div className="vision-hero-background">
          <img
            src={ourvisionBg}
            alt="Global Shipping and Logistics"
            className="vision-hero-image"
          />
        </div>
        <div className="vision-hero-content">
          <h1 className="vision-title" data-aos="fade-up">Our Vision</h1>
          <p className="vision-lead" data-aos="fade-up" data-aos-delay="100">
            We envision building a globally respected export enterprise from India that is driven not by trading instincts alone,
            but by professional governance, financial discipline, engineering precision, and international compliance.
          </p>
          <div className="leadership-callout" data-aos="zoom-in" data-aos-delay="200">
            <div className="callout-accent"></div>
            <p>
              <strong>Our Enterprise is led by Chartered Accountants and Engineers</strong> bringing together
              commercial intelligence with operational rigour.
            </p>
          </div>
          <p className="vision-intro" data-aos="fade-up" data-aos-delay="300">
            Our vision is to design an export organization where global trade is executed with the same level of structure, transparency,
            and analytical discipline that international buyers expect from professionally governed institutions.
          </p>
          <p className="vision-intro" data-aos="fade-up" data-aos-delay="300">
            Rather than focusing solely on volumes or transactions, we aim to build an export house where every shipment, contract,
            and customer relationship is managed through well-defined processes, clear accountability, and disciplined execution.
          </p>
        </div>
      </section>

      {/* Long-Term Vision */}
      <section className="vision-section long-term-vision">
        <div className="section-header" data-aos="fade-up">
          <h2>Our Long-Term Vision</h2>
        </div>
        <div className="vision-statement">
          <p className="statement-primary" data-aos="fade-right" data-aos-delay="200">
            To become one of India's most professionally governed and globally trusted export houses where finance,
            engineering, and compliance shape every shipment.
          </p>
          <p className="statement-secondary" data-aos="fade-left" data-aos-delay="300">
            An enterprises recognized not for shipment volumes, but for the precision, transparency, and reliability of its operations.
          </p>
        </div>
      </section>

      {/* Professionally Governed Platform */}
      <section className="vision-section governance-section">
        <div className="section-header" data-aos="fade-up">
          <h2>Building a Professionally Governed Export Platform</h2>
        </div>
        <p className="section-intro" data-aos="fade-up" data-aos-delay="100">
          While many export businesses rely heavily on relationship-led processes, our vision is to build a structure-led export platform anchored in:
        </p>
        <div className="vision-grid">
          <div className="vision-card" data-aos="zoom-in" data-aos-delay="200">
            <div className="card-icon">
              <svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <rect x="2" y="7" width="20" height="14" rx="2" ry="2"></rect>
                <path d="M16 21V5a2 2 0 0 0-2-2h-4a2 2 0 0 0-2 2v16"></path>
              </svg>
            </div>
            <h3>Financial Control</h3>
            <p>Robust financial control frameworks</p>
          </div>
          <div className="vision-card" data-aos="zoom-in" data-aos-delay="300">
            <div className="card-icon">
              <svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"></path>
              </svg>
            </div>
            <h3>Risk Management</h3>
            <p>Structured risk management systems</p>
          </div>
          <div className="vision-card" data-aos="zoom-in" data-aos-delay="400">
            <div className="card-icon">
              <svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z"></path>
                <polyline points="14 2 14 8 20 8"></polyline>
                <line x1="16" y1="13" x2="8" y2="13"></line>
                <line x1="16" y1="17" x2="8" y2="17"></line>
                <polyline points="10 9 9 9 8 9"></polyline>
              </svg>
            </div>
            <h3>Trade Compliance</h3>
            <p>Regulatory and trade compliance processes</p>
          </div>
          <div className="vision-card" data-aos="zoom-in" data-aos-delay="500">
            <div className="card-icon">
              <svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <circle cx="12" cy="12" r="10"></circle>
                <polyline points="12 6 12 12 16 14"></polyline>
              </svg>
            </div>
            <h3>Margin Engineering</h3>
            <p>Cost and margin engineering discipline</p>
          </div>
          <div className="vision-card" data-aos="zoom-in" data-aos-delay="600">
            <div className="card-icon">
              <svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <line x1="18" y1="20" x2="18" y2="10"></line>
                <line x1="12" y1="20" x2="12" y2="4"></line>
                <line x1="6" y1="20" x2="6" y2="14"></line>
              </svg>
            </div>
            <h3>Data-Driven Decisions</h3>
            <p>Data-driven decision-making models</p>
          </div>
        </div>
        <p className="section-conclusion">
          Our objective is to provide international buyers with a level of documentation clarity, reporting discipline,
          and commercial transparency that supports long-term partnerships and confident decision-making.
        </p>
      </section>

      {/* Finance Meets Supply Chain */}
      <section className="vision-section finance-engineering-section">
        <div className="section-header" data-aos="fade-up">
          <h2>Where Finance Meets Supply Chain Engineering</h2>
        </div>
        <p className="section-intro" data-aos="fade-up" data-aos-delay="100">
          Our leadership integrates financial governance and supply chain engineering into a single operating framework.
        </p>
        <div className="dual-pillars">
          <div className="pillar" data-aos="fade-right" data-aos-delay="200">
            <div className="pillar-header">
              <div className="pillar-icon ca-icon">
                <svg xmlns="http://www.w3.org/2000/svg" width="40" height="40" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <line x1="12" y1="1" x2="12" y2="23"></line>
                  <path d="M17 5H9.5a3.5 3.5 0 0 0 0 7h5a3.5 3.5 0 0 1 0 7H6"></path>
                </svg>
              </div>
              <h3>Chartered Accountants</h3>
            </div>
            <ul className="pillar-list">
              <li>Pricing integrity</li>
              <li>Tax and regulatory compliance</li>
              <li>Foreign exchange discipline</li>
              <li>Risk controls</li>
            </ul>
          </div>
          <div className="pillar" data-aos="fade-left" data-aos-delay="400">
            <div className="pillar-header">
              <div className="pillar-icon engineer-icon">
                <svg xmlns="http://www.w3.org/2000/svg" width="40" height="40" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M14.7 6.3a1 1 0 0 0 0 1.4l1.6 1.6a1 1 0 0 0 1.4 0l3.77-3.77a6 6 0 0 1-7.94 7.94l-6.91 6.91a2.12 2.12 0 0 1-3-3l6.91-6.91a6 6 0 0 1 7.94-7.94l-3.76 3.76z"></path>
                </svg>
              </div>
              <h3>Engineers</h3>
            </div>
            <ul className="pillar-list">
              <li>Product quality</li>
              <li>Process reliability</li>
              <li>Logistics optimisation</li>
              <li>Supply chain stability</li>
            </ul>
          </div>
        </div>
        <p className="section-conclusion">
          Our vision is to unify these disciplines so that exports are not only executed on time, but are also financially sound,
          technically controlled, and operationally predictable.
        </p>
      </section>

      {/* Trusted Gateway */}
      <section className="vision-section trusted-gateway-section">
        <div className="trusted-gateway-background">
          <img
            src="https://images.unsplash.com/photo-1586528116311-ad8dd3c8310d?w=1920&h=600&fit=crop&q=80"
            alt="Global Business Partnership"
            className="section-background-image"
          />
        </div>
        <div className="container">
          <div className="section-header" data-aos="fade-up">
            <h2>To Build A Trusted Gateway for Global Buyers</h2>
          </div>
          <p className="gateway-intro" data-aos="fade-up" data-aos-delay="100">
            Today's international buyers demand more than products. They expect audit-ready records, compliant contracts,
            traceable sourcing, and predictable execution.
          </p>
          <div className="gateway-commitment">
            <p>
              Our vision is to be an Indian export partner that global buyers can engage with confidence knowing they are working
              with a professionally managed, compliance-focused, and governance-driven organization built for long-term collaboration.
            </p>
          </div>
        </div>
      </section>

      {/* Empowering Producers */}
      <section className="vision-section producers-section">
        <div className="section-header" data-aos="fade-up">
          <h2>Empowering Indian Producers Through Structure</h2>
        </div>
        <p className="section-intro" data-aos="fade-up" data-aos-delay="100">
          We also envision transforming how Indian producers access global markets not through ad-hoc transactions,
          but through structured export programs supported by:
        </p>
        <div className="producers-grid">
          <div className="producer-item" data-aos="zoom-in" data-aos-delay="200">
            <div className="producer-icon">
              <svg xmlns="http://www.w3.org/2000/svg" width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <line x1="8" y1="6" x2="21" y2="6"></line>
                <line x1="8" y1="12" x2="21" y2="12"></line>
                <line x1="8" y1="18" x2="21" y2="18"></line>
                <line x1="3" y1="6" x2="3.01" y2="6"></line>
                <line x1="3" y1="12" x2="3.01" y2="12"></line>
                <line x1="3" y1="18" x2="3.01" y2="18"></line>
              </svg>
            </div>
            <p>Forecasting</p>
          </div>
          <div className="producer-item" data-aos="zoom-in" data-aos-delay="300">
            <div className="producer-icon">
              <svg xmlns="http://www.w3.org/2000/svg" width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <rect x="1" y="4" width="22" height="16" rx="2" ry="2"></rect>
                <line x1="1" y1="10" x2="23" y2="10"></line>
              </svg>
            </div>
            <p>Working capital planning</p>
          </div>
          <div className="producer-item" data-aos="zoom-in" data-aos-delay="400">
            <div className="producer-icon">
              <svg xmlns="http://www.w3.org/2000/svg" width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <path d="M22 11.08V12a10 10 0 1 1-5.93-9.14"></path>
                <polyline points="22 4 12 14.01 9 11.01"></polyline>
              </svg>
            </div>
            <p>Quality systems</p>
          </div>
          <div className="producer-item" data-aos="zoom-in" data-aos-delay="500">
            <div className="producer-icon">
              <svg xmlns="http://www.w3.org/2000/svg" width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <circle cx="12" cy="12" r="10"></circle>
                <line x1="2" y1="12" x2="22" y2="12"></line>
                <path d="M12 2a15.3 15.3 0 0 1 4 10 15.3 15.3 0 0 1-4 10 15.3 15.3 0 0 1-4-10 15.3 15.3 0 0 1 4-10z"></path>
              </svg>
            </div>
            <p>International trade compliance</p>
          </div>
        </div>
        <p className="section-conclusion">
          By providing this professional framework, we enable manufacturers and farmers to focus on production excellence,
          while we manage global market access with disciplined oversight and operational control.
        </p>

      </section>
    </div>
  )
}

export default Vision
