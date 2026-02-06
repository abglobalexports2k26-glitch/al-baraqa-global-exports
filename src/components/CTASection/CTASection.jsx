import { Link } from 'react-router-dom'
import './CTASection.css'

function CTASection() {
  return (
    <section className="cta-section">
      <div className="cta-content">
        <h2 data-aos="fade-up">Initiate a Trade Discussion</h2>
        <p data-aos="fade-up" data-aos-delay="100">
          We engage only in genuine, professionally governed trade discussions.
          <br />
          All inquiries are reviewed with due diligence and confidentiality.
        </p>
        <div data-aos="zoom-in" data-aos-delay="300">
          <Link to="/contact" className="cta-button-large">
            Initiate Trade Discussion
            <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
              <path d="M5 12h14"></path>
              <path d="m12 5 7 7-7 7"></path>
            </svg>
          </Link>
        </div>
      </div>
    </section>
  )
}

export default CTASection
