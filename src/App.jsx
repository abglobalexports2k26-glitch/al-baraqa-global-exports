import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Navigation from './components/Navigation'
import Footer from './components/Footer'
import ScrollToTop from './components/ScrollToTop'
import Home from './pages/Home'
import Vision from './pages/Vision'
import WhoWeAre from './pages/WhoWeAre'
import WhatWeExport from './pages/WhatWeExport'
import OperationalModel from './pages/OperationalModel'
import MarketIntelligence from './pages/MarketIntelligence'
import Contact from './pages/Contact'
import './App.css'

function App() {
  return (
    <BrowserRouter>
      <ScrollToTop />
      <Navigation />
      <div className="container">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/vision" element={<Vision />} />
          <Route path="/our-team" element={<WhoWeAre />} />
          <Route path="/what-we-export" element={<WhatWeExport />} />
          <Route path="/operational-model" element={<OperationalModel />} />
          <Route path="/market-intelligence" element={<MarketIntelligence />} />
          <Route path="/contact" element={<Contact />} />
        </Routes>
      </div>
      <Footer />
    </BrowserRouter>
  )
}

export default App
