import { useEffect, useState } from 'react'
import { useLocation } from 'react-router-dom'
import AOS from 'aos'
import 'aos/dist/aos.css'
import './WhoWeAre.css'

// Import team member images
import RafaImg from '../../assets/images/Rafa.jpg'
import MuzammilImg from '../../assets/images/Muzammil.jpg'
import YounusImg from '../../assets/images/Younus.jpg'
import MudassirImg from '../../assets/images/Mudassir.jpg'

function WhoWeAre() {
  const [activeSection, setActiveSection] = useState('')

  // Team member data
  const teamMembers = [
    {
      id: 'founder-ceo',
      name: 'Rafa Mohammad',
      role: 'Founder & CEO',
      image: RafaImg,
      previewBullets: [
        'Compliance-first, systems-driven export execution',
        'Anticipates regulatory, tax, and documentation risk early',
        'Builds foundations before scaling'
      ],
      professionalOverview: [
        'Chartered Accountant by profession, with strong experience in taxation, regulatory advisory, and business structuring across diverse client engagements',
        'Has extensively advised businesses involved in exports on tax structuring, compliance positioning, pricing logic, and transaction documentation',
        'Brings a deep understanding of the export ecosystem from a governance and advisory lens, including GST, customs-linked considerations, foreign exchange aspects, and cross-border transaction mechanics',
        'Experienced in designing export-ready frameworks that align commercial intent with regulatory and documentation requirements'
      ],
      roleInOrg: [
        'Leads the venture with a compliance-first and systems-driven approach, ensuring that export operations are built correctly from inception',
        'Responsible for structuring the entire compliance and governance framework, rather than retrofitting controls after scale',
        'Oversees supplier onboarding, contractual clarity, and pricing frameworks, ensuring transactions are commercially sound and defensible',
        'Actively involved in setting up internal processes, checks, and documentation standards across procurement, logistics coordination, and financial reporting'
      ],
      executionPhilosophy: [
        'Acknowledges that the organisation is at an early stage of direct export execution, and deliberately prioritises correctness over speed',
        'Focused on building strong foundations before scaling, drawing from advisory experience rather than legacy execution claims',
        'Believes that sustainable export businesses are built through process discipline, transparency, and risk awareness'
      ],
      whatHeBrings: [
        'Ability to anticipate regulatory, tax, and documentation risks before they impact operations',
        'Strong analytical mindset that converts complex regulations into practical operating frameworks',
        'Leadership anchored in credibility, accountability, and long-term sustainability, rather than short-term volumes'
      ],
      overviewTitle: 'Professional Overview',
      philosophyTitle: 'Execution Philosophy'
    },
    {
      id: 'trade-intelligence',
      name: 'Muzammil',
      role: 'Chief Trade Intelligence Officer',
      image: MuzammilImg,
      previewBullets: [
        'Converts raw market data into actionable trade insights',
        'Improves pricing accuracy and market selection with analytics',
        'Builds repeatable intelligence frameworks'
      ],
      professionalOverview: [
        'Computer Science & Business Systems graduate with a strong academic foundation in technology, data analytics, and systems-oriented problem solving',
        'Trained in data science, programming, and analytical thinking, with hands-on exposure',
        'Possesses working knowledge of web technologies, and data handling, enabling structured analysis of market and trade data',
        'Academic and project exposure to machine learning and pattern recognition, strengthening analytical reasoning and insight generation'
      ],
      roleInOrg: [
        'Leads trade intelligence, market research, and analytical support for sourcing, pricing, and market selection decisions',
        'Responsible for collecting, structuring, and analysing market and product data to support informed trade decisions',
        'Supports leadership with data-backed insights on demand trends, pricing benchmarks, and opportunity assessment',
        'Works closely with operations and strategy teams to ensure commercial decisions are supported by logic and evidence, not assumptions'
      ],
      executionPhilosophy: [
        'Approaches trade decision-making with a data-first and systems-driven mindset, reducing reliance on intuition',
        'Focused on building repeatable intelligence frameworks rather than one-off analysis',
        'Emphasises clarity, structure, and validation of information before execution',
        'Continuously updates analytical methods and tools to align with evolving market dynamics'
      ],
      whatHeBrings: [
        'Ability to translate raw data into actionable trade insights',
        'Strong analytical discipline that improves pricing accuracy and market selection',
        'A technology-enabled perspective that strengthens decision quality and execution confidence',
        'Long-term focus on building intelligence-led trade operations that scale with the organisation'
      ],
      overviewTitle: 'Professional Background',
      philosophyTitle: 'Execution Approach'
    },
    {
      id: 'platform-systems',
      name: 'Younus',
      role: 'Chief Platform & Systems Officer',
      image: YounusImg,
      previewBullets: [
        'Architects scalable systems connecting data and execution',
        'Applies AI/automation only where it adds measurable value',
        'Builds upgrade-ready, secure platform foundations'
      ],
      professionalOverview: [
        'Computer Science & Engineering graduate with strong academic performance and a solid foundation in full-stack development, systems architecture, and enterprise software engineering',
        'Trained in Java, Python, JavaScript, React, Node.js, and Spring Boot, with hands-on exposure across frontend, backend, and integration layers',
        'Experience working on enterprise-grade software environments, including large corporate projects involving scalability, performance optimisation, and accessibility',
        'Exposure to modern development practices, including version control, testing frameworks, DevOps support, and structured deployment workflows'
      ],
      roleInOrg: [
        'Architects and manages the organisation\'s digital platform, internal systems, and technology backbone',
        'Responsible for designing and maintaining scalable, secure, and maintainable systems that support trade operations and data flow',
        'Oversees platform automation, system integration, and technical process optimisation',
        'Actively evaluates and integrates AI-assisted tools and intelligent automation where they add measurable efficiency, accuracy, or decision support'
      ],
      executionPhilosophy: [
        'Follows a research-driven and future-oriented approach, continuously tracking advancements in AI, automation, and platform technologies',
        'Builds systems that are adaptive and upgrade-ready, allowing incorporation of new technologies without disruption',
        'Aligns platform evolution with operational realities and governance requirements, not experimentation in isolation'
      ],
      whatHeBrings: [
        'Ability to convert technology and AI research into practical, usable systems',
        'A structured approach to continuous improvement and system evolution',
        'Strong execution discipline that ensures innovation is controlled, secure, and scalable',
        'Long-term focus on positioning technology as a strategic growth and efficiency enabler'
      ],
      overviewTitle: 'Professional Background',
      philosophyTitle: 'Execution Approach'
    },
    {
      id: 'operations',
      name: 'Mudassir',
      role: 'Chief Operations Officer',
      image: MudassirImg,
      previewBullets: [
        'Hands-on trading execution discipline and coordination',
        'Ensures timing accuracy, vendor reliability, and controls',
        'Builds repeatable operational rhythms for export scale-up'
      ],
      professionalOverview: [
        'Experienced in domestic gold trading operations, with hands-on exposure to commodity procurement, pricing sensitivity, and execution discipline',
        'Strong understanding of day-to-day trading mechanics, including vendor coordination, quality considerations, inventory movement, and transaction timelines',
        'Brings practical exposure to risk-aware trading environments, where price volatility and execution accuracy are critical',
        'Currently expanding operational scope from domestic commodity trading to structured export operations, supported by robust systems and governance'
      ],
      roleInOrg: [
        'Oversees end-to-end operational execution, covering procurement coordination, logistics planning, shipment readiness, and execution controls',
        'Responsible for ensuring operational discipline across the trade lifecycle, from supplier engagement to final delivery',
        'Acts as the execution anchor, translating strategy and intelligence into on-ground action',
        'Coordinates closely with compliance, intelligence, and platform teams to ensure smooth, timely, and controlled execution'
      ],
      executionPhilosophy: [
        'Brings a practical, hands-on execution mindset, grounded in real trading experience rather than theoretical models',
        'Focused on process consistency, vendor reliability, and timing accuracy',
        'Acknowledges that international operations are in a structured build-out phase, and prioritises learning-by-execution with strong controls',
        'Emphasises operational clarity, accountability, and escalation discipline across all activities'
      ],
      whatHeBrings: [
        'Real-world trading exposure that strengthens execution realism',
        'Strong coordination skills across suppliers, logistics partners, and internal teams',
        'An operations-led mindset that ensures plans convert into outcomes',
        'Long-term focus on building repeatable, scalable, and disciplined trade operations'
      ],
      overviewTitle: 'Professional Background',
      philosophyTitle: 'Execution Approach'
    }
  ]

  const leadershipPillars = [
    {
      title: 'Governance',
      bullets: [
        'Sets direction and compliance guardrails',
        'Reviews risk, pricing, and structure before execution'
      ]
    },
    {
      title: 'Trade Intelligence',
      bullets: [
        'Researches markets, demand, and pricing',
        'Converts data into clear trade decisions'
      ]
    },
    {
      title: 'Systems & Technology',
      bullets: [
        'Builds platforms that connect intelligence and execution',
        'Continuously upgrades systems through responsible automation and AI adoption'
      ]
    },
    {
      title: 'Operations',
      bullets: [
        'Executes end-to-end trade activities',
        'Coordinates suppliers, logistics, and delivery timelines'
      ]
    }
  ]

  // Handle scroll spy for sticky nav
  useEffect(() => {
    const handleScroll = () => {
      const sections = teamMembers.map(member => document.getElementById(member.id))
      const navbar = document.querySelector('nav')
      const navHeight = navbar ? navbar.offsetHeight : 0
      const scrollPosition = window.scrollY + navHeight + 150

      for (let i = sections.length - 1; i >= 0; i--) {
        const section = sections[i]
        if (section && section.offsetTop <= scrollPosition) {
          setActiveSection(teamMembers[i].id)
          break
        }
      }
    }

    window.addEventListener('scroll', handleScroll)

    // Initialize AOS
    AOS.init({
      duration: 1000,
      easing: 'ease-out-cubic',
      once: false,
      mirror: true,
      offset: 50,
      anchorPlacement: 'top-bottom'
    })

    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  const location = useLocation()

  // Handle state-based scrolling on navigation (from footer team member clicks)
  useEffect(() => {
    const scrollTarget = location.state?.scrollTo || (location.hash ? location.hash.replace('#', '') : null)

    if (scrollTarget) {
      // Small timeout to ensure DOM is ready
      setTimeout(() => {
        scrollToMemberFromFooter(scrollTarget)
      }, 100)
    }
  }, [location])

  // Scroll used by scroll-indicator and team card clicks (within the page)
  const scrollToSection = (id) => {
    const element = document.getElementById(id)
    if (element) {
      const navbar = document.querySelector('nav')
      const navHeight = navbar ? navbar.offsetHeight + 20 : 0

      const elementPosition = element.getBoundingClientRect().top + window.pageYOffset
      window.scrollTo({
        top: elementPosition - navHeight,
        behavior: 'smooth'
      })
    }
  }

  // Scroll used when navigating from footer team member clicks
  const scrollToMemberFromFooter = (id) => {
    const element = document.getElementById(id)
    if (element) {
      const navbar = document.querySelector('nav')
      const navHeight = navbar ? navbar.offsetHeight + 140 : 0

      const elementPosition = element.getBoundingClientRect().top + window.pageYOffset
      window.scrollTo({
        top: elementPosition - navHeight,
        behavior: 'smooth'
      })
    }
  }

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' })
  }

  return (
    <div className="our-team-page">
      {/* Hero Section */}
      <section className="team-hero">
        <div className="team-hero-background">
          <img
            src="https://images.unsplash.com/photo-1522071820081-009f0129c71c?w=1920&h=1080&fit=crop&q=80"
            alt="Professional Team"
            className="team-hero-image"
          />
        </div>
        <div className="team-hero-content">
          <h1 className="team-title" data-aos="fade-up" title="Click to explore our team">Our Team</h1>
          <p className="team-subtitle" data-aos="fade-up" data-aos-delay="100">Precision, accountability, sustainable trade execution</p>
          {/* <p className="team-tagline">Four roles. One operating rhythm.</p> */}
          <div className="team-hero-cta">
            <p className="team-cta-text">Meet the people driving our vision</p>
            <div className="scroll-indicator" onClick={() => scrollToSection('team-overview')}>
              <span className="scroll-arrow">↓</span>
            </div>
          </div>
        </div>
      </section>

      {/* Team Overview Grid */}
      <section id="team-overview" className="team-section team-overview-section">
        <div className="team-overview-grid">
          {teamMembers.map((member, index) => (
            <div
              key={member.id}
              className="team-card"
              onClick={() => scrollToMemberFromFooter(member.id)}
              data-aos="fade-up"
              data-aos-delay={index * 100}
              title={`Click to view full profile of ${member.name}`}
            >
              <div className="team-card-image">
                <img src={member.image} alt={member.name} />
              </div>
              <div className="team-card-content">
                <h3 className="team-card-name">{member.name}</h3>
                <span className="team-card-role">{member.role}</span>
                <ul className="team-card-bullets">
                  {member.previewBullets.map((bullet, index) => (
                    <li key={index}>{bullet}</li>
                  ))}
                </ul>
                <button className="view-profile-btn">
                  View Profile <span className="arrow">→</span>
                </button>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* How Our Leadership Works Together */}
      <section className="team-section leadership-rhythm-section">
        <div className="section-header" data-aos="fade-up">
          <h2>How Our Leadership Works Together</h2>
        </div>
        <div className="leadership-intro" data-aos="fade-up" data-aos-delay="100">
          <p className="leadership-statement">A leadership model built for precision, accountability, and sustainable trade execution.</p>
          {/* <p className="leadership-roles">Four roles. One operating rhythm.</p> */}
          <p className="leadership-flow">Decisions move from <span className="flow-highlight">governance</span> → <span className="flow-highlight">intelligence</span> → <span className="flow-highlight">systems</span> → <span className="flow-highlight">execution</span></p>
        </div>
        <div className="leadership-pillars-grid">
          {leadershipPillars.map((pillar, index) => (
            <div key={index} className="leadership-pillar">
              <h3 className="pillar-title">{pillar.title}</h3>
              <ul className="pillar-bullets">
                {pillar.bullets.map((bullet, bulletIndex) => (
                  <li key={bulletIndex}>{bullet}</li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </section>

      {/* Detailed Profiles */}
      <section className="team-section detailed-profiles-section">
        <div className="section-header" data-aos="fade-up">
          <h2>Leadership Profiles</h2>
        </div>

        {teamMembers.map((member, index) => (
          <div key={member.id} id={member.id} className="profile-detail-new" data-aos="fade-up" data-aos-delay="100">
            {/* Left Column */}
            <div className="profile-left">
              {/* Top Left - Image + Name + Role */}
              <div className="profile-identity">
                <div className="profile-photo">
                  <img src={member.image} alt={member.name} />
                </div>
                <div className="profile-name-role">
                  <h3 className="profile-name">{member.name}</h3>
                  <span className="profile-role-badge">{member.role}</span>
                </div>
              </div>

              {/* Bottom Left - What He Brings */}
              <div className="profile-brings">
                <h4>What He Brings</h4>
                <ul>
                  {member.whatHeBrings.map((item, index) => (
                    <li key={index}>{item}</li>
                  ))}
                </ul>
              </div>
            </div>

            {/* Right Column - All Professional Info */}
            <div className="profile-right">
              <div className="profile-section">
                <h4>{member.overviewTitle}</h4>
                <ul>
                  {member.professionalOverview.map((item, index) => (
                    <li key={index}>{item}</li>
                  ))}
                </ul>
              </div>

              <div className="profile-section">
                <h4>Role in the Organisation</h4>
                <ul>
                  {member.roleInOrg.map((item, index) => (
                    <li key={index}>{item}</li>
                  ))}
                </ul>
              </div>

              <div className="profile-section">
                <h4>{member.philosophyTitle}</h4>
                <ul>
                  {member.executionPhilosophy.map((item, index) => (
                    <li key={index}>{item}</li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
        ))}
      </section>
    </div>
  )
}

export default WhoWeAre
