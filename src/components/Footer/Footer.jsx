import { Link, useLocation } from 'react-router-dom'
import './Footer.css'

function Footer() {
  const location = useLocation()
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' })
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
              <a href="#" className="social-link" aria-label="Twitter">
                <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M24 4.557c-.883.392-1.832.656-2.828.775 1.017-.609 1.798-1.574 2.165-2.724-.951.564-2.005.974-3.127 1.195-.897-.957-2.178-1.555-3.594-1.555-3.179 0-5.515 2.966-4.797 6.045-4.091-.205-7.719-2.165-10.148-5.144-1.29 2.213-.669 5.108 1.523 6.574-.806-.026-1.566-.247-2.229-.616-.054 2.281 1.581 4.415 3.949 4.89-.693.188-1.452.232-2.224.084.626 1.956 2.444 3.379 4.6 3.419-2.07 1.623-4.678 2.348-7.29 2.04 2.179 1.397 4.768 2.212 7.548 2.212 9.142 0 14.307-7.721 13.995-14.646.962-.695 1.797-1.562 2.457-2.549z" />
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
              <Link to="/market-intelligence" className="footer-link" onClick={scrollToTop}>Market Intelligence</Link>
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
                <span>123 Export Street, Trade District<br />City, Country 12345</span>
              </div>
              <div className="contact-item">
                <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z"></path>
                  <polyline points="22,6 12,13 2,6"></polyline>
                </svg>
                <span>info@albaraqahexports.com</span>
              </div>
              <div className="contact-item">
                <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z"></path>
                </svg>
                <span>+1 (555) 123-4567</span>
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
              <Link to="/our-team" className="footer-heading-link" onClick={scrollToTop}>
                <h3 className="footer-heading">Our Team</h3>
              </Link>
              <div className="team-members">
                <Link to="/our-team#founder-ceo" className="team-member">
                  <h4>Rafa</h4>
                  <p className="team-role">Founder & Chief Executive Officer (CEO)</p>
                  <p className="team-bio">Chartered Accountant with leadership over trade governance, compliance, and financial risk management.</p>
                </Link>
                <Link to="/our-team#trade-intelligence" className="team-member">
                  <h4>Muzammil</h4>
                  <p className="team-role">Chief Trade Intelligence Officer</p>
                  <p className="team-bio">Leads global market research, product intelligence, pricing insights, and strategic trade decision support.</p>
                </Link>
                <Link to="/our-team#platform-systems" className="team-member">
                  <h4>Younus</h4>
                  <p className="team-role">Chief Platform & Systems Officer</p>
                  <p className="team-bio">Architects and manages the digital platform, trade systems, automation, and technology infrastructure.</p>
                </Link>
                <Link to="/our-team#operations" className="team-member">
                  <h4>Mudassir</h4>
                  <p className="team-role">Chief Operations Officer</p>
                  <p className="team-bio">Oversees end-to-end export operations, procurement coordination, logistics, and execution discipline.</p>
                </Link>
              </div>
            </div>
          </div>
        )}

        <div className="footer-bottom">
          <p>&copy; 2026 Al Baraqah Global Exports. All rights reserved.</p>
          <div className="footer-legal">
            <a href="#" className="legal-link">Privacy Policy</a>
            <span>•</span>
            <a href="#" className="legal-link">Terms of Service</a>
            <span>•</span>
            <a href="#" className="legal-link">Trade Terms</a>
          </div>
        </div>
      </div>
    </footer>
  )
}

export default Footer
