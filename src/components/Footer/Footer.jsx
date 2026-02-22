import { Link, useLocation, useNavigate } from 'react-router-dom'
import './Footer.css'

function Footer() {
  const location = useLocation()
  const navigate = useNavigate()

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' })
  }

  const navigateToTeamMember = (memberId) => {
    if (location.pathname === '/our-team') {
      // Already on team page  scroll directly with footer offset
      const element = document.getElementById(memberId)
      if (element) {
        const navbar = document.querySelector('nav')
        const navHeight = navbar ? navbar.offsetHeight + 140 : 0
        const elementPosition = element.getBoundingClientRect().top + window.pageYOffset
        window.scrollTo({
          top: elementPosition - navHeight,
          behavior: 'smooth'
        })
      }
    } else {
      // Navigate to team page with scrollTo state
      navigate('/our-team', { state: { scrollTo: memberId } })
    }
  }
  return (
    <footer className="footer">
      <div className="footer-container">
        <div className="footer-content">
          {/* Column 1: Brand & Authority */}
          <div className="footer-column">
            <h3 className="footer-heading">Al Baraqah Global Exports</h3>
            <p className="footer-description">
              Leading the future of global trade with intelligence, compliance, and operational excellence.
              Building long-term trade relationships through governance and market insights.
            </p>
            <div className="social-links">
              <a href="#" className="social-link" aria-label="LinkedIn">
                <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z" />
                </svg>
              </a>
              <a href="https://www.instagram.com/abqglobalexports?igsh=OWUwZHQyajc0aHpp" className="social-link" aria-label="Instagram" target="_blank" rel="noopener noreferrer">
                <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z" />
                </svg>
              </a>
            </div>
          </div>

          {/* Column 2: Quick Navigation */}
          <div className="footer-column">
            <h3 className="footer-heading">Quick Navigation</h3>
            <nav className="footer-nav">
              <Link to="/" className="footer-link" onClick={scrollToTop}>Home</Link>
              <Link to="/vision" className="footer-link" onClick={scrollToTop}>Vision</Link>
              <Link to="/our-team" className="footer-link" onClick={scrollToTop}>Our Team</Link>
              <Link to="/what-we-export" className="footer-link" onClick={scrollToTop}>What We Export</Link>
              <Link to="/operational-model" className="footer-link" onClick={scrollToTop}>Operational Model</Link>
              {/* <Link to="/market-intelligence" className="footer-link" onClick={scrollToTop}>Market Intelligence</Link> */}
              <Link to="/contact" className="footer-link" onClick={scrollToTop}>Contact Us</Link>
            </nav>
          </div>



          {/* Column 4: Contact and Trade Initiation */}
          <div className="footer-column">
            <h3 className="footer-heading">Contact & Trade Initiation</h3>
            <div className="contact-info-footer">
              <div className="contact-item">
                <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z"></path>
                  <circle cx="12" cy="10" r="3"></circle>
                </svg>
                <span>21/196, Hyderkhan Street,<br />Proddatur, Kadapa District,<br />Andhra Pradesh, 516360</span>
              </div>
              <div className="contact-item">
                <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z"></path>
                  <polyline points="22,6 12,13 2,6"></polyline>
                </svg>
                <span>abglobalexports2k26@gmail.com</span>
              </div>
              <div className="contact-item">
                <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z"></path>
                </svg>
                <span>+91 9030873730</span>
              </div>
            </div>
            <Link to="/contact" className="footer-cta">
              Initiate Trade Inquiry
            </Link>
          </div>
        </div>

        {location.pathname !== '/our-team' && (
          <div>
            {/* Column 3: Our Team */}
            <div className="footer-column">
              <Link to="/our-team" className="footer-heading-link" onClick={scrollToTop} title="Click to see team strengths & expertise">
                <h3 className="footer-heading">Our Team</h3>
              </Link>
              <div className="team-members">
                <div className="team-member" title="Click to view full profile of Rafa - Founder & CEO" onClick={() => navigateToTeamMember('founder-ceo')}>
                  <h4>Rafa</h4>
                  <p className="team-role">Founder & Chief Executive Officer (CEO)</p>
                  <p className="team-bio">Chartered Accountant with leadership over trade governance, compliance, and financial risk management.</p>
                </div>
                <div className="team-member" title="Click to view full profile of Muzammil - Chief Trade Intelligence Officer" onClick={() => navigateToTeamMember('trade-intelligence')}>
                  <h4>Muzammil</h4>
                  <p className="team-role">Chief Trade Intelligence Officer</p>
                  <p className="team-bio">Leads global market research, product intelligence, pricing insights, and strategic trade decision support.</p>
                </div>
                <div className="team-member" title="Click to view full profile of Younus - Chief Platform & Systems Officer" onClick={() => navigateToTeamMember('platform-systems')}>
                  <h4>Younus</h4>
                  <p className="team-role">Chief Platform & Systems Officer</p>
                  <p className="team-bio">Architects and manages the digital platform, trade systems, automation, and technology infrastructure.</p>
                </div>
                <div className="team-member" title="Click to view full profile of Mudassir - Chief Operations Officer" onClick={() => navigateToTeamMember('operations')}>
                  <h4>Mudassir</h4>
                  <p className="team-role">Chief Operations Officer</p>
                  <p className="team-bio">Oversees end-to-end export operations, procurement coordination, logistics, and execution discipline.</p>
                </div>
              </div>
            </div>
          </div>
        )}

        <div className="footer-bottom">
          <p>&copy; 2026 Al Baraqah Global Exports. All rights reserved.</p>
          <div className="footer-legal">
            <Link to="/privacy-policy" className="legal-link" onClick={scrollToTop}>Privacy Policy</Link>
            <span>•</span>
            <Link to="/terms-of-service" className="legal-link" onClick={scrollToTop}>Terms of Service</Link>
            <span>•</span>
            <Link to="/trade-terms" className="legal-link" onClick={scrollToTop}>Trade Terms</Link>
          </div>
        </div>
      </div>
    </footer>
  )
}

export default Footer
