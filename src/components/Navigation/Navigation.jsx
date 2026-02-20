import { useState, useEffect } from 'react'
import { Link, useLocation } from 'react-router-dom'
import './Navigation.css'
import falconLogo from '../../assets/images/only_falcon_logo.png'
import brandName from '../../assets/images/brand_name.png'

function Navigation() {
  const [menuOpen, setMenuOpen] = useState(false)
  const location = useLocation()

  // Close mobile menu on route change
  useEffect(() => { setMenuOpen(false) }, [location])

  // Close on Escape
  useEffect(() => {
    const onKey = (e) => { if (e.key === 'Escape') setMenuOpen(false) }
    window.addEventListener('keydown', onKey)
    return () => window.removeEventListener('keydown', onKey)
  }, [])

  const navItems = [
    { to: '/', label: 'Home' },
    { to: '/vision', label: 'Vision' },
    { to: '/our-team', label: 'Our Team' },
    { to: '/what-we-export', label: 'What We Export' },
    { to: '/operational-model', label: 'Operational Model' },
    { to: '/contact', label: 'Contact Us' },
  ]

  return (
    <header className="site-header">
      <div className="wrap">
        <div className="glass-nav">
          <div className="nav-row">
            {/* Brand */}
            <Link to="/" className="brand" aria-label="Al Baraqah Global Exports home">
              <img src={falconLogo} alt="" className="brand__logo" />
              <img src={brandName} alt="Al Baraqah Global Exports" className="brand__name-img" />
            </Link>

            {/* Desktop nav links */}
            <nav className={`nav-links ${menuOpen ? 'nav-links--open' : ''}`} aria-label="Primary">
              {navItems.map((item) => (
                <Link
                  key={item.to}
                  to={item.to}
                  className={location.pathname === item.to ? 'active' : ''}
                  onClick={() => setMenuOpen(false)}
                >
                  {item.label}
                </Link>
              ))}
            </nav>

            {/* Hamburger (mobile only) */}
            <button
              className={`hamburger ${menuOpen ? 'hamburger--active' : ''}`}
              onClick={() => setMenuOpen(!menuOpen)}
              aria-label={menuOpen ? 'Close menu' : 'Open menu'}
              aria-expanded={menuOpen}
            >
              <span /><span /><span />
            </button>
          </div>
        </div>
      </div>
    </header>
  )
}

export default Navigation
