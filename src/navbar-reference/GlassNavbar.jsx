/**
 * ============================================================
 * REFERENCE FILE — Al Baraqah Global Exports Glassmorphic Navbar
 * ============================================================
 * This file contains the COMPLETE navbar implementation
 * (React JSX + full CSS) from the live site, copied here
 * as a single-file reference. You can revert/delete this
 * folder once you're done using it as a guide.
 * ============================================================
 */

import { useState, useEffect } from 'react'
import { Link, useLocation } from 'react-router-dom'
import falconLogo from '../assets/images/only_falcon_logo.png'

/* ================================================================
   CSS VARIABLES (from index.css :root)
   ================================================================
   --bg:         #F7F6EF
   --green:      #1B3B36
   --green-deep: #15312C
   --gold:       #B89A5E
   --gold-2:     #C5A065
   --text:       #0F1F1B
   --muted:      #3E3E3E
   --muted-2:    #5A5A5A
   --stroke:     #C0C2BD
   --glass:      rgba(255, 255, 255, .55)
   --hero-sub:   #2F4A43
   ================================================================ */

/* ================================================================
   FULL NAVBAR CSS (Navigation.css) — embedded as a style tag
   ================================================================ */
const navbarCSS = `
/* ================================================================
   Glass Navigation — matching homepage_design.html
   ================================================================ */

.site-header {
  padding: 22px 0 0;
  position: sticky;
  top: 14px;
  z-index: 1000;
}

.glass-nav {
  position: relative;
  border-radius: 14px;
  background: var(--glass);
  backdrop-filter: blur(14px);
  -webkit-backdrop-filter: blur(14px);
  border: 1px solid rgba(0, 0, 0, .06);
  box-shadow:
    0 28px 38px rgba(0, 0, 0, .14),
    inset 0 1px 0 rgba(255, 255, 255, .55);
  overflow: hidden;
  padding: 18px 28px;
}

/* Radial gradient overlays — green left, gold right */
.glass-nav::before {
  content: "";
  position: absolute;
  inset: -2px;
  pointer-events: none;
  opacity: .95;
  background:
    radial-gradient(520px 140px at 33% 60%, rgba(27, 59, 54, .20), transparent 62%),
    radial-gradient(560px 160px at 83% 55%, rgba(197, 160, 101, .30), transparent 64%);
  filter: blur(2px);
}

.nav-row {
  position: relative;
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 18px;
}

/* ---------- Brand ---------- */
.brand {
  display: flex;
  align-items: center;
  gap: 10px;
  text-decoration: none;
  white-space: nowrap;
}

.brand__logo {
  width: 40px;
  height: 40px;
  object-fit: contain;
}

.brand__text {
  display: flex;
  flex-direction: column;
  line-height: 1.05;
  font-family: Cinzel, serif;
  letter-spacing: .08em;
  color: var(--gold);
  text-transform: uppercase;
  font-weight: 700;
  font-size: 22px;
}

.brand__text small {
  font-size: 12px;
  letter-spacing: .22em;
  font-weight: 700;
  opacity: .95;
  margin-top: 3px;
}

/* ---------- Nav Links ---------- */
.nav-links {
  display: flex;
  align-items: center;
  gap: 10px;
  flex: 1;
  justify-content: center;
  flex-wrap: nowrap;
}

.nav-links a {
  text-decoration: none;
  color: #222;
  font-size: 14px;
  padding: 8px 14px;
  border-radius: 999px;
  font-weight: 500;
  white-space: nowrap;
  transition: background .2s ease, color .2s ease, box-shadow .2s ease;
}

.nav-links a:hover {
  background: rgba(27, 59, 54, .08);
}

.nav-links a.active {
  background: var(--green);
  color: #fff;
  box-shadow:
    inset 0 0 0 1px rgba(255, 255, 255, .10),
    0 8px 18px rgba(0, 0, 0, .18);
}

/* ---------- Hamburger (Mobile) ---------- */
.hamburger {
  display: none;
  flex-direction: column;
  gap: 5px;
  background: none;
  border: none;
  cursor: pointer;
  padding: 4px;
  z-index: 10;
}

.hamburger span {
  display: block;
  width: 22px;
  height: 2px;
  background: var(--text);
  border-radius: 2px;
  transition: transform .25s ease, opacity .2s ease;
}

.hamburger--active span:nth-child(1) {
  transform: translateY(7px) rotate(45deg);
}

.hamburger--active span:nth-child(2) {
  opacity: 0;
}

.hamburger--active span:nth-child(3) {
  transform: translateY(-7px) rotate(-45deg);
}

/* ---------- Responsive ---------- */
@media (max-width: 1200px) {
  .nav-links a {
    font-size: 13px;
    padding: 7px 10px;
  }
}

@media (max-width: 980px) {
  .glass-nav {
    padding: 14px 20px;
  }

  .hamburger {
    display: flex;
  }

  .nav-links {
    display: none;
    position: absolute;
    top: 100%;
    left: 0;
    right: 0;
    flex-direction: column;
    background: rgba(255, 255, 255, .96);
    backdrop-filter: blur(16px);
    border-radius: 0 0 14px 14px;
    padding: 16px 20px;
    gap: 4px;
    box-shadow: 0 20px 40px rgba(0, 0, 0, .12);
    z-index: 100;
  }

  .nav-links--open {
    display: flex;
  }

  .nav-links a {
    width: 100%;
    text-align: center;
    padding: 10px 16px;
  }

  /* hide utility icons on small screens */
  .icon-btn {
    display: none;
  }
}
`;

/* ================================================================
   REACT COMPONENT (Navigation.jsx)
   ================================================================ */
function GlassNavbar() {
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
    { to: '/market-intelligence', label: 'Market Intelligence' },
    { to: '/contact', label: 'Contact Us' },
  ]

  return (
    <>
      {/* Inject the navbar CSS */}
      <style>{navbarCSS}</style>

      <header className="site-header">
        <div className="wrap">
          <div className="glass-nav">
            <div className="nav-row">
              {/* Brand */}
              <Link to="/" className="brand" aria-label="Al Baraqah Global Exports home">
                <img src={falconLogo} alt="" className="brand__logo" />
                <div className="brand__text">
                  <span>AL BARAQAH</span>
                  <small>GLOBAL EXPORTS</small>
                </div>
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
    </>
  )
}

export default GlassNavbar
