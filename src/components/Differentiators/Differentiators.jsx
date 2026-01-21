import './Differentiators.css'

function Differentiators() {
  const points = [
    'Trade execution under Chartered Accountant & Engineers supervision',
    'Strong emphasis on compliance and documentation accuracy',
    'Risk-aware structuring of contracts and payment terms',
    'Process-driven execution, not ad-hoc trading',
    'Long-term, relationship-oriented approach'
  ]

  return (
    <section className="differentiators">
      <div className="section-header">
        <h2>What Makes us Different</h2>
        <p className="section-subtitle">
          Unlike conventional exporters, our trade operations are managed with a governance-first mindset.
        </p>
      </div>
      <div className="differentiators-grid">
        {points.map((point, index) => (
          <div key={index} className="differentiator-item" data-aos="fade-up" data-aos-delay={index * 100}>
            <div className="check-icon">
              <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round">
                <polyline points="20 6 9 17 4 12"></polyline>
              </svg>
            </div>
            <p>{point}</p>
          </div>
        ))}
      </div>
    </section>
  )
}

export default Differentiators
