import { Link } from 'react-router-dom'
import './Banner.css'

function Banner() {
  const tags = [
    'Chartered Accountant–Led Governance',
    'IEC Registered Export Entity',
    'LC/TT Advance Payment Support',
    'Export Documentation Accuracy',
    'Compliance Driven Trade Execution'
  ]

  return (
    <section className="banner">
      <div className="banner-background">
        <div className="banner-image-placeholder">
          <img 
            src="https://images.unsplash.com/photo-1526778548025-fa2f459cd5c1?w=1920&h=1080&fit=crop&q=80" 
            alt="Global Trade Network"
            className="banner-background-image"
          />
        </div>
      </div>

      <div className="banner-overlay">
        <div className="banner-content">
          <h1 data-aos="fade-down" data-aos-duration="1000">A Professionally Governed Export Platform from India</h1>
          <h3 data-aos="fade-up" data-aos-delay="200" data-aos-duration="1000">
            We execute international trade with a strong focus on compliance, 
            documentation accuracy, financial discipline, and risk-aware execution.
          </h3>
          
          <div className="banner-buttons" data-aos="fade-up" data-aos-delay="400">
            <Link to="/contact" className="btn-primary">
              Initiate Trade Discussions
            </Link>
            <Link to="/operational-model" className="btn-secondary">
              View our Capabilities
            </Link>
          </div>
        </div>

        <div className="banner-tags" data-aos="fade-up" data-aos-delay="100">
          {tags.map((tag, index) => (
            <span key={index} className="tag" data-aos="zoom-in" data-aos-delay={300 + (index * 10)}>
              {tag}
            </span>
          ))}
        </div>
      </div>
    </section>
  )
}

export default Banner
