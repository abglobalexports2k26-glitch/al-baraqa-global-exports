import { Link, NavLink } from 'react-router-dom'
import { useState, useEffect } from 'react'
import './Navigation.css'
import falconLogo from '../../assets/images/only_falcon_logo.png'
import brandName from '../../assets/images/brand_name.png'

function Navigation() {
  const [isScrolled, setIsScrolled] = useState(false)
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false)
  const [isProductsOpen, setIsProductsOpen] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20)
    }
    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' })
  }

  const products = [
    { name: 'Product 1', path: '/products/product-1' },
    { name: 'Product 2', path: '/products/product-2' },
    { name: 'Product 3', path: '/products/product-3' }
  ]

  return (
    <header className={`header ${isScrolled ? 'scrolled' : ''}`}>
      <div className="header-container">
        <div className="header-content">
          {/* Logo */}
          <Link to="/" className="logo-link" onClick={scrollToTop}>
            <img src={falconLogo} alt="Al Baraqah Global Exports Logo" className="logo-image" />
            <img src={brandName} alt="Al Baraqah Global Exports" className="brand-name-image" />
          </Link>

          {/* Desktop Navigation */}
          <nav className="desktop-nav">
            <NavLink to="/" className="nav-link" end onClick={scrollToTop}>Home</NavLink>
            <NavLink to="/vision" className="nav-link" onClick={scrollToTop}>Vision</NavLink>
            <NavLink to="/our-team" className="nav-link" onClick={scrollToTop}>Our Team</NavLink>

            {/* Products Dropdown */}
            <div className="dropdown">
              <button
                className="nav-link dropdown-toggle"
                onClick={() => setIsProductsOpen(!isProductsOpen)}
              >
                What We Export
                <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <path d="m6 9 6 6 6-6"></path>
                </svg>
              </button>
              {isProductsOpen && (
                <div className="dropdown-menu">
                  {products.map((product) => (
                    <Link
                      key={product.path}
                      to={product.path}
                      className="dropdown-item"
                      onClick={() => setIsProductsOpen(false)}
                    >
                      {product.name}
                    </Link>
                  ))}
                </div>
              )}
            </div>

            <NavLink to="/operational-model" className="nav-link" onClick={scrollToTop}>Operational Model</NavLink>
            <NavLink to="/market-intelligence" className="nav-link" onClick={scrollToTop}>Market Intelligence</NavLink>
            <NavLink to="/contact" className="nav-link" onClick={scrollToTop}>Contact Us</NavLink>
          </nav>

          {/* Desktop CTA Button */}
          {/* <div className="desktop-actions">
            <Link to="/contact" className="cta-button">
              Get Quote
              <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <path d="M5 12h14"></path>
                <path d="m12 5 7 7-7 7"></path>
              </svg>
            </Link>
          </div> */}

          {/* Mobile Menu Button */}
          <div className="mobile-menu-toggle">
            <button
              className="menu-button"
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            >
              {isMobileMenuOpen ? (
                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <line x1="18" x2="6" y1="6" y2="18"></line>
                  <line x1="6" x2="18" y1="6" y2="18"></line>
                </svg>
              ) : (
                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <line x1="4" x2="20" y1="12" y2="12"></line>
                  <line x1="4" x2="20" y1="6" y2="6"></line>
                  <line x1="4" x2="20" y1="18" y2="18"></line>
                </svg>
              )}
              <span className="sr-only">{isMobileMenuOpen ? 'Close menu' : 'Open menu'}</span>
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Navigation */}
      {isMobileMenuOpen && (
        <div className="mobile-nav">
          <NavLink to="/" className="mobile-nav-link" onClick={() => { setIsMobileMenuOpen(false); scrollToTop(); }} end>Home</NavLink>
          <NavLink to="/vision" className="mobile-nav-link" onClick={() => { setIsMobileMenuOpen(false); scrollToTop(); }}>Vision</NavLink>
          <NavLink to="/our-team" className="mobile-nav-link" onClick={() => { setIsMobileMenuOpen(false); scrollToTop(); }}>Our Team</NavLink>
          <div className="mobile-dropdown">
            <span className="mobile-nav-link">What We Export</span>
            <div className="mobile-dropdown-items">
              {products.map((product) => (
                <Link
                  key={product.path}
                  to={product.path}
                  className="mobile-dropdown-item"
                  onClick={() => setIsMobileMenuOpen(false)}
                >
                  {product.name}
                </Link>
              ))}
            </div>
          </div>
          <NavLink to="/operational-model" className="mobile-nav-link" onClick={() => { setIsMobileMenuOpen(false); scrollToTop(); }}>Operational Model</NavLink>
          <NavLink to="/market-intelligence" className="mobile-nav-link" onClick={() => { setIsMobileMenuOpen(false); scrollToTop(); }}>Market Intelligence</NavLink>
          <NavLink to="/contact" className="mobile-nav-link" onClick={() => { setIsMobileMenuOpen(false); scrollToTop(); }}>Contact Us</NavLink>
          <Link to="/contact" className="mobile-cta-button" onClick={() => { setIsMobileMenuOpen(false); scrollToTop(); }}>
            Get Quote
          </Link>
        </div>
      )}
    </header>
  )
}

export default Navigation
