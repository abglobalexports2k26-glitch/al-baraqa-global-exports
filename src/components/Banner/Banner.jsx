import { Link } from 'react-router-dom'
import './Banner.css'
import logisticsBg from '../../assets/images/home_page_bg.jpeg'

function Banner() {
  const tags = [
    'Chartered Accountant–Led Governance',
    'Engineers-Led Execution',
    'IEC Registered Export Entity',
    'Export Documentation Accuracy',
    'Compliance Driven Trade Execution'
  ]

  return (
    <section className="banner">
      <div className="banner-background">
        <div className="banner-image-placeholder">
          <img
            src={logisticsBg}
            alt="Global Trade Network"
            className="banner-background-image"
          />
        </div>
      </div>

      <div className="banner-overlay">
        <div className="banner-content">
          <h1 data-aos="fade-down" data-aos-duration="1000">A Professionally Governed Export Business - Redefining How India Exports to the World</h1>
          <h3 data-aos="fade-up" data-aos-delay="200" data-aos-duration="1000">
            We execute international trade with a strong focus on compliance,
            documentation accuracy, financial discipline, and risk-aware execution.
          </h3>

          <div className="banner-buttons" data-aos="fade-up" data-aos-delay="400">
            <Link to="/contact" className="btn-primary">
              Initiate Trade Discussions
            </Link>
            <Link to="/what-we-export" className="btn-secondary">
              Our Products Portfolio
            </Link>
          </div>
        </div>

        <div className="banner-tags banner-tags-animate">
          {tags.map((tag, index) => (
            <span key={index} className="tag tag-animate" style={{ animationDelay: `${0.7 + (index * 0.1)}s` }}>
              {tag}
            </span>
          ))}
        </div>
      </div>
    </section>
  )
}

export default Banner
