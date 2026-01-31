import './WhoWeAre.css'

function WhoWeAre() {
  return (
    <section className="who-we-are">
      <div className="who-we-are-container">
        <div className="who-we-are-image">
          <img 
            src="https://images.unsplash.com/photo-1521737711867-e3b97375f902?w=800&h=600&fit=crop&q=80" 
            alt="Professional Business Team"
          />
          <div className="image-overlay"></div>
        </div>
        <div className="who-we-are-content">
          <div className="section-header">
            <h2>Who We Are</h2>
          </div>
          <p className="lead">
            We are an India-based export business operating under Chartered Accountant & Engineers leadership.
          </p>
          <p>
            Our approach combines global trade execution with structured governance, regulatory awareness, 
            and disciplined financial processes.
          </p>
          <p>
            We work with international buyers who value transparency, accuracy, and long-term trade relationships.
          </p>
        </div>
      </div>

      <div className="stats-grid">
        <div className="stat-item">
          <div className="stat-icon">
            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
              <rect x="4" y="2" width="16" height="20" rx="2"></rect>
              <line x1="8" y1="6" x2="16" y2="6"></line>
              <line x1="8" y1="10" x2="16" y2="10"></line>
              <line x1="8" y1="14" x2="16" y2="14"></line>
              <line x1="8" y1="18" x2="16" y2="18"></line>
            </svg>
          </div>
          <h4>CA Brain</h4>
          <p>Strategic Financial Leadership</p>
        </div>
        <div className="stat-item">
          <div className="stat-icon">
            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
              <path d="M14.7 6.3a1 1 0 0 0 0 1.4l1.6 1.6a1 1 0 0 0 1.4 0l3.77-3.77a6 6 0 0 1-7.94 7.94l-6.91 6.91a2.12 2.12 0 0 1-3-3l6.91-6.91a6 6 0 0 1 7.94-7.94l-3.76 3.76z"></path>
            </svg>
          </div>
          <h4>Engineer Execution</h4>
          <p>Technical Implementation</p>
        </div>
        <div className="stat-item">
          <div className="stat-icon">
            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
              <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"></path>
            </svg>
          </div>
          <h4>IEC Registered</h4>
          <p>Licensed Export Entity</p>
        </div>
      </div>
    </section>
  )
}

export default WhoWeAre
