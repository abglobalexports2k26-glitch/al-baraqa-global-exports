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
          <div className="stats-grid">
            <div className="stat-item">
              <div className="stat-icon">
                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                  <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"></path>
                </svg>
              </div>
              <h4>IEC Registered</h4>
              <p>Licensed Export Entity</p>
            </div>
            <div className="stat-item">
              <div className="stat-icon">
                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                  <circle cx="12" cy="12" r="10"></circle>
                  <line x1="2" y1="12" x2="22" y2="12"></line>
                  <path d="M12 2a15.3 15.3 0 0 1 4 10 15.3 15.3 0 0 1-4 10 15.3 15.3 0 0 1-4-10 15.3 15.3 0 0 1 4-10z"></path>
                </svg>
              </div>
              <h4>Global Trade</h4>
              <p>International Compliance</p>
            </div>
            <div className="stat-item">
              <div className="stat-icon">
                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                  <path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z"></path>
                  <polyline points="14 2 14 8 20 8"></polyline>
                </svg>
              </div>
              <h4>CA & Engineer Led</h4>
              <p>Professional Oversight</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default WhoWeAre
