import { Link } from 'react-router-dom'
import { useState, useEffect } from 'react'
import './Navigation.css'

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
          <Link to="/" className="logo-link">
            <div className="logo-circle">
              <span className="logo-text">AB</span>
            </div>
            <span className="brand-name">Al Baraqah Global Exports</span>
          </Link>

          {/* Desktop Navigation */}
          <nav className="desktop-nav">
            <Link to="/" className="nav-link active">Home</Link>
            <Link to="/vision" className="nav-link">Vision</Link>
            <Link to="/who-we-are" className="nav-link">Who We Are</Link>
            
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

            <Link to="/operational-model" className="nav-link">Operational Model</Link>
            <Link to="/market-intelligence" className="nav-link">Market Intelligence</Link>
            <Link to="/contact" className="nav-link">Contact Us</Link>
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
              <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <line x1="4" x2="20" y1="12" y2="12"></line>
                <line x1="4" x2="20" y1="6" y2="6"></line>
                <line x1="4" x2="20" y1="18" y2="18"></line>
              </svg>
              <span className="sr-only">Open menu</span>
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Navigation */}
      {isMobileMenuOpen && (
        <div className="mobile-nav">
          <Link to="/" className="mobile-nav-link" onClick={() => setIsMobileMenuOpen(false)}>Home</Link>
          <Link to="/vision" className="mobile-nav-link" onClick={() => setIsMobileMenuOpen(false)}>Vision</Link>
          <Link to="/who-we-are" className="mobile-nav-link" onClick={() => setIsMobileMenuOpen(false)}>Who We Are</Link>
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
          <Link to="/operational-model" className="mobile-nav-link" onClick={() => setIsMobileMenuOpen(false)}>Operational Model</Link>
          <Link to="/market-intelligence" className="mobile-nav-link" onClick={() => setIsMobileMenuOpen(false)}>Market Intelligence</Link>
          <Link to="/contact" className="mobile-nav-link" onClick={() => setIsMobileMenuOpen(false)}>Contact Us</Link>
          <Link to="/contact" className="mobile-cta-button" onClick={() => setIsMobileMenuOpen(false)}>
            Get Quote
          </Link>
        </div>
      )}
    </header>
  )
}

export default Navigation
