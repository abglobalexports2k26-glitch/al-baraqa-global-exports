import { useEffect } from 'react'
import AOS from 'aos'
import 'aos/dist/aos.css'
import './OperationalModel.css'

function OperationalModel() {
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
    <div className="operational-model-page">
      {/* Hero Section */}
      <section className="om-hero">
        <div className="om-hero-background">
          <img
            src="https://images.unsplash.com/photo-1494412574643-ff11b0a5c1c3?w=1920&h=800&fit=crop&q=80"
            alt="Export Operations"
            className="om-hero-image"
          />
        </div>
        <div className="om-hero-content">
          <h1 className="om-title" data-aos="fade-up">Our Operational Model</h1>
          <p className="om-lead" data-aos="fade-up" data-aos-delay="100">
            A Structured, Compliance-Driven Export Execution Framework
          </p>
          <p className="om-intro" data-aos="fade-up" data-aos-delay="200">
            Our export operations follow a clearly defined, end-to-end operating framework designed to ensure quality integrity,
            regulatory compliance, financial discipline, and predictable execution across all products and markets.
          </p>
          <p className="om-intro" data-aos="fade-up" data-aos-delay="300">
            This operational model is product-agnostic and forms the foundation for all exports undertaken by AlBaraqah Global Exports.
          </p>
        </div>
      </section>



      {/* 8-Step Process */}
      <section className="om-section om-process-section">
        <div className="section-header" data-aos="fade-up">
          <h2>End-to-End Export Execution Process</h2>
        </div>

        <div className="process-grid">
          {/* Step 1 */}
          {/* Step 1 */}
          <div className="process-card" data-aos="fade-right" data-aos-delay="100">
            <div className="process-number">1</div>
            <div className="process-content">
              <h3>Source Identification & Direct Procurement</h3>
              <p>We work directly with identified farms, estates, processors, and aggregators based on predefined quality, compliance, and capacity criteria.</p>
              <p>Procurement is structured to ensure traceability, consistency of supply, and alignment with buyer specifications from the source itself.</p>
            </div>
          </div>

          {/* Step 2 */}
          {/* Step 2 */}
          <div className="process-card" data-aos="fade-left" data-aos-delay="100">
            <div className="process-number">2</div>
            <div className="process-content">
              <h3>Quality Assessment & Pre-Shipment Controls</h3>
              <p>All products undergo defined quality checks, grading standards, and pre-shipment inspections based on product category and destination market requirements.</p>
              <p>This stage ensures adherence to export quality norms, buyer specifications, and phytosanitary standards.</p>
            </div>
          </div>

          {/* Step 3 */}
          <div className="process-card" data-aos="fade-right" data-aos-delay="100">
            <div className="process-number">3</div>
            <div className="process-content">
              <h3>Sorting, Grading & Product Classification</h3>
              <p>Products are systematically sorted and graded as per internationally accepted commercial classifications.</p>
              <p>This enables transparent pricing, accurate documentation, and reduced dispute risk with overseas buyers.</p>
            </div>
          </div>

          {/* Step 4 */}
          <div className="process-card" data-aos="fade-left" data-aos-delay="100">
            <div className="process-number">4</div>
            <div className="process-content">
              <h3>Controlled Handling, Storage & Professional Packaging</h3>
              <p>Products are handled under controlled storage conditions (where applicable) to preserve quality and shelf life.</p>
              <p>Packaging is executed using export-grade materials, moisture control, labelling standards, and palletization protocols suitable for international transit.</p>
            </div>
          </div>

          {/* Step 5 */}
          <div className="process-card" data-aos="fade-right" data-aos-delay="100">
            <div className="process-number">5</div>
            <div className="process-content">
              <h3>Logistics Planning & Containerization</h3>
              <p>Shipments are planned based on Incoterms, transit timelines, container suitability (dry / reefer), and port selection.</p>
              <p>Container loading follows weight distribution, safety, and cargo integrity guidelines to minimize transit risk.</p>
            </div>
          </div>

          {/* Step 6 */}
          <div className="process-card" data-aos="fade-left" data-aos-delay="100">
            <div className="process-number">6</div>
            <div className="process-content">
              <h3>Documentation, Regulatory & Banking Compliance</h3>
              <p>Each shipment is supported by accurate export documentation, including:</p>
              <ul className="doc-list">
                <li>Commercial Invoice & Packing List</li>
                <li>Shipping Bill & Bill of Lading</li>
                <li>Certificates (Phytosanitary, FSSAI, COO, etc.)</li>
                <li>Banking and foreign exchange compliance</li>
              </ul>
              <p>All documentation is reviewed through a compliance-first lens before shipment execution.</p>
            </div>
          </div>

          {/* Step 7 */}
          <div className="process-card" data-aos="fade-right" data-aos-delay="100">
            <div className="process-number">7</div>
            <div className="process-content">
              <h3>Shipment Execution & Port Operations</h3>
              <p>Exports are executed through approved ports, with coordination across freight forwarders, customs authorities, and shipping lines.</p>
              <p>Shipment tracking and milestone monitoring ensure predictable departure timelines and accountability.</p>
            </div>
          </div>

          {/* Step 8 */}
          <div className="process-card" data-aos="fade-left" data-aos-delay="100">
            <div className="process-number">8</div>
            <div className="process-content">
              <h3>Post-Shipment Monitoring & Trade Closure</h3>
              <p>Post-shipment activities include document submission to banks, payment tracking, buyer coordination, and transaction closure.</p>
              <p>This ensures financial discipline, reconciliation accuracy, and long-term relationship continuity.</p>
            </div>
          </div>
        </div>
      </section>

      {/* Governance Section */}
      <section className="om-section om-governance-section">
        <div className="om-governance-background">
          <img
            src="https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?w=1920&h=600&fit=crop&q=80"
            alt="Governance and Compliance"
            className="section-background-image"
          />
        </div>
        <div>
          <div className="section-header" data-aos="fade-up">
            <h2>Governance Embedded at Every Stage</h2>
          </div>
          <p className="governance-intro" data-aos="fade-up" data-aos-delay="100">Each stage of our operational model is governed by:</p>
          <div className="governance-pillars">
            <div className="governance-pillar" data-aos="zoom-in" data-aos-delay="200">
              <svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2"></path>
                <circle cx="9" cy="7" r="4"></circle>
                <path d="M23 21v-2a4 4 0 0 0-3-3.87"></path>
                <path d="M16 3.13a4 4 0 0 1 0 7.75"></path>
              </svg>
              <span>Clear Role Ownership</span>
            </div>
            <div className="governance-pillar" data-aos="zoom-in" data-aos-delay="300">
              <svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <path d="M14.7 6.3a1 1 0 0 0 0 1.4l1.6 1.6a1 1 0 0 0 1.4 0l3.77-3.77a6 6 0 0 1-7.94 7.94l-6.91 6.91a2.12 2.12 0 0 1-3-3l6.91-6.91a6 6 0 0 1 7.94-7.94l-3.76 3.76z"></path>
              </svg>
              <span>Defined Process Controls</span>
            </div>
            <div className="governance-pillar" data-aos="zoom-in" data-aos-delay="400">
              <svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <path d="M22 11.08V12a10 10 0 1 1-5.93-9.14"></path>
                <polyline points="22 4 12 14.01 9 11.01"></polyline>
              </svg>
              <span>Compliance Checks</span>
            </div>
            <div className="governance-pillar" data-aos="zoom-in" data-aos-delay="500">
              <svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"></path>
              </svg>
              <span>Financial & Risk Oversight</span>
            </div>
          </div>
          <p className="governance-conclusion">
            This structure allows us to operate not as an ad-hoc trader, but as a professionally governed export enterprise.
          </p>
        </div>
      </section>

      {/* Service Scope Section */}
      <section className="om-section om-scope-section">
        <div className="section-header" data-aos="fade-up">
          <h2>Service Scope & Boundaries</h2>
        </div>

        <div className="scope-grid">
          <div className="scope-card" data-aos="fade-up" data-aos-delay="200">
            <div className="scope-icon">
              <svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <circle cx="12" cy="12" r="10"></circle>
                <line x1="2" y1="12" x2="22" y2="12"></line>
                <path d="M12 2a15.3 15.3 0 0 1 4 10 15.3 15.3 0 0 1-4 10 15.3 15.3 0 0 1-4-10 15.3 15.3 0 0 1 4-10z"></path>
              </svg>
            </div>
            <h3>Operational Scope</h3>
            <p>Our operational model covers end-to-end export execution, including sourcing coordination, quality handling, documentation, logistics coordination, and trade closure.</p>
            <p className="scope-note">Activities outside the agreed scope such as destination-side distribution, retail handling, or third-party processing are undertaken only where contractually agreed.</p>
          </div>

          <div className="scope-card" data-aos="fade-up" data-aos-delay="300">
            <div className="scope-icon">
              <svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <rect x="1" y="3" width="15" height="13"></rect>
                <polygon points="16 8 20 8 23 11 23 16 16 16 16 8"></polygon>
                <circle cx="5.5" cy="18.5" r="2.5"></circle>
                <circle cx="18.5" cy="18.5" r="2.5"></circle>
              </svg>
            </div>
            <h3>Commercial & Delivery Framework</h3>
            <p>Our export operations support commonly used international trade terms, structured based on buyer requirements and shipment feasibility.</p>
            <div className="incoterms-list">
              <span className="incoterm">FOB / FCA</span>
              <span className="incoterm">CIF / CFR</span>
              <span className="incoterm">Other mutually agreed Incoterms</span>
            </div>
            <p className="scope-note">All delivery responsibilities are clearly defined prior to execution.</p>
          </div>

          <div className="scope-card" data-aos="fade-up" data-aos-delay="400">
            <div className="scope-icon">
              <svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <line x1="12" y1="1" x2="12" y2="23"></line>
                <path d="M17 5H9.5a3.5 3.5 0 0 0 0 7h5a3.5 3.5 0 0 1 0 7H6"></path>
              </svg>
            </div>
            <h3>Payment & Trade Settlement</h3>
            <p>Payment structures are finalized prior to shipment execution and aligned with banking and foreign exchange regulations.</p>
            <div className="payment-list">
              <span className="payment-term">Advance Payment</span>
              <span className="payment-term">Letter of Credit (LC)</span>
              <span className="payment-term">Telegraphic Transfer (TT)</span>
            </div>
            <p className="scope-note">Trade execution proceeds only after confirmation of agreed payment terms.</p>
          </div>

          <div className="scope-card" data-aos="fade-up" data-aos-delay="500">
            <div className="scope-icon">
              <svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <path d="M21 16V8a2 2 0 0 0-1-1.73l-7-4a2 2 0 0 0-2 0l-7 4A2 2 0 0 0 3 8v8a2 2 0 0 0 1 1.73l7 4a2 2 0 0 0 2 0l7-4A2 2 0 0 0 21 16z"></path>
                <polyline points="3.27 6.96 12 12.01 20.73 6.96"></polyline>
                <line x1="12" y1="22.08" x2="12" y2="12"></line>
              </svg>
            </div>
            <h3>Ports & Logistics Network</h3>
            <p>Shipments are executed through major Indian ports based on product suitability, logistics efficiency, and destination alignment.</p>
            <p className="scope-note">We coordinate with established freight forwarders and shipping lines to ensure compliant and reliable cargo movement across international trade lanes.</p>
          </div>

          <div className="scope-card" data-aos="fade-up" data-aos-delay="600">
            <div className="scope-icon">
              <svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z"></path>
                <polyline points="14 2 14 8 20 8"></polyline>
                <line x1="16" y1="13" x2="8" y2="13"></line>
                <line x1="16" y1="17" x2="8" y2="17"></line>
                <polyline points="10 9 9 9 8 9"></polyline>
              </svg>
            </div>
            <h3>Documentation Transparency</h3>
            <p>All export documentation is shared with buyers in a transparent and timely manner, ensuring clarity across commercial, shipping, and regulatory records.</p>
            <p className="scope-note">This enables smooth customs clearance, banking processes, and downstream coordination.</p>
          </div>

          <div className="scope-card" data-aos="fade-up" data-aos-delay="700">
            <div className="scope-icon">
              <svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <path d="M22 11.08V12a10 10 0 1 1-5.93-9.14"></path>
                <polyline points="22 4 12 14.01 9 11.01"></polyline>
              </svg>
            </div>
            <h3>Quality Responsibility Framework</h3>
            <p>Quality parameters are agreed upfront based on product specifications, destination norms, and buyer requirements.</p>
            <p className="scope-note">Our operational responsibility is aligned to handling, storage, packing, and shipment integrity in accordance with agreed specifications.</p>
          </div>
        </div>
      </section>

      {/* Scalability Section */}
      <section className="om-section om-scalable-section">
        <div className="section-header">
          <h2>Scalable Execution Model</h2>
        </div>
        <div className="scalable-content">
          <p className="scalable-text">
            Our operational framework is designed to scale across volumes and geographies while maintaining consistency
            in execution discipline and documentation standards.
          </p>
          <p className="scalable-text">
            This allows us to support both trial shipments and repeat trade programs.
          </p>
        </div>
      </section>

      {/* FAQs Section */}
      <section className="om-section om-faq-section">
        <div className="section-header">
          <h2>Operational FAQs</h2>
        </div>
        <div className="faq-grid">
          <div className="faq-card">
            <h3>Q: Do you handle small trial shipments?</h3>
            <p>A: Yes, subject to product feasibility and commercial alignment.</p>
          </div>
          <div className="faq-card">
            <h3>Q: Can buyers appoint their own inspection agency?</h3>
            <p>A: Yes, inspections can be coordinated as agreed.</p>
          </div>
          <div className="faq-card">
            <h3>Q: Do you support destination-specific compliance?</h3>
            <p>A: Product and destination requirements are reviewed during trade structuring.</p>
          </div>
        </div>
      </section>
    </div>
  )
}

export default OperationalModel
