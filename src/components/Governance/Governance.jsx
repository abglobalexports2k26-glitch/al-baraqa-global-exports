import './Governance.css'

function Governance() {
  return (
    <section className="governance">
      <div className="governance-background">
        <img
          src="https://images.unsplash.com/photo-1450101499163-c8848c66ca85?w=1920&h=800&fit=crop&q=80"
          alt="Business Compliance and Governance"
          className="governance-bg-image"
        />
      </div>
      <div className="governance-overlay">
        <div className="governance-content">
          <div className="governance-icon" data-aos="zoom-in" data-aos-duration="1000">
            <svg xmlns="http://www.w3.org/2000/svg" width="64" height="64" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
              <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"></path>
            </svg>
          </div>
          <h2 data-aos="fade-up" data-aos-delay="200">Governance & Compliance</h2>
          <h3 data-aos="fade-up" data-aos-delay="300">Governance Built into Every Shipment</h3>
          <p data-aos="fade-up" data-aos-delay="400">
            Every export transaction is reviewed from a compliance, documentation, and risk perspective
            before execution.
          </p>
          <p data-aos="fade-up" data-aos-delay="500">
            This ensures that trade is conducted responsibly, transparently, and in line with applicable
            regulations and banking expectations.
          </p>
        </div>
      </div>
    </section>
  )
}

export default Governance
