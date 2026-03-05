import { useEffect, useRef, useState } from 'react'
import emailjs from '@emailjs/browser'
import AOS from 'aos'
import 'aos/dist/aos.css'
import './Contact.css'

// ============================================================
// EmailJS Configuration
// 
// Follow these steps to set up:
// 1. Go to https://www.emailjs.com/ and create a free account
// 2. Add an Email Service (Gmail) → copy the SERVICE_ID
// 3. Create an Email Template → copy the TEMPLATE_ID
// 4. Go to Account → copy your PUBLIC_KEY
//
// In your Email Template, use these variables:
//   {{from_name}}     - sender's full name
//   {{from_email}}    - sender's email
//   {{company}}       - sender's company
//   {{phone}}         - sender's phone
//   {{country}}       - sender's country
//   {{product}}       - product interest
//   {{message}}       - the message body
//
// Set the template's "To Email" to: abglobalexports2k26@gmail.com
// ============================================================
const EMAILJS_SERVICE_ID = 'service_f7uugoa'
const EMAILJS_TEMPLATE_ID = 'template_0x51fjp'
const EMAILJS_PUBLIC_KEY = '75O1FTWp-AEQ00O3m'

function Contact() {
  const formRef = useRef()
  const formSectionRef = useRef()
  const [status, setStatus] = useState('idle') // idle | sending | success | error
  const [errorMsg, setErrorMsg] = useState('')

  useEffect(() => {
    AOS.init({
      duration: 1000,
      easing: 'ease-out-cubic',
      once: false,
      mirror: true,
      offset: 50,
      anchorPlacement: 'top-bottom'
    })
  }, [])

  const handleSubmit = async (e) => {
    e.preventDefault()
    setStatus('sending')
    setErrorMsg('')

    try {
      await emailjs.sendForm(
        EMAILJS_SERVICE_ID,
        EMAILJS_TEMPLATE_ID,
        formRef.current,
        EMAILJS_PUBLIC_KEY
      )
      setStatus('success')
      formRef.current.reset()

      // Scroll to form section so user sees the success message
      formSectionRef.current?.scrollIntoView({ behavior: 'smooth', block: 'start' })

      // Auto-dismiss success message after 5 seconds
      setTimeout(() => setStatus('idle'), 5000)
    } catch (error) {
      console.error('EmailJS Error:', error)
      setStatus('error')
      setErrorMsg(error?.text || 'Something went wrong. Please try again or email us directly.')

      // Scroll to form section so user sees the error message
      formSectionRef.current?.scrollIntoView({ behavior: 'smooth', block: 'start' })

      // Auto-dismiss error message after 6 seconds
      setTimeout(() => setStatus('idle'), 6000)
    }
  }

  return (
    <div className="contact-container">
      <h1>Contact Us</h1>

      <div className="contact-content">
        {/* Contact Details */}
        <div className="contact-details" data-aos="fade-right" data-aos-delay="200">
          <h2>Get in Touch</h2>
          <div className="contact-info">
            <div className="info-item">
              <h3>Address</h3>
              <p>21/196, Hyderkhan Street,<br />Proddatur, Kadapa District,<br />Andhra Pradesh, 516360</p>
            </div>
            <div className="info-item">
              <h3>Email</h3>
              <p> rafa@abqglobalexports.com <span style={{ fontSize: '0.8em', opacity: 0.7 }}>(Primary)</span><br /> abglobalexports2k26@gmail.com <span style={{ fontSize: '0.8em', opacity: 0.7 }}>(Secondary)</span></p>
            </div>
            <div className="info-item">
              <h3>Phone</h3>
              <p>+91 9030873730<br />+91 7893052850<br />+91 9100520653</p>
            </div>
          </div>
        </div>

        {/* Contact Form */}
        <div className="contact-form" data-aos="fade-left" data-aos-delay="200" ref={formSectionRef}>
          <h2>Send Us a Message</h2>

          {/* Status Messages */}
          {status === 'success' && (
            <div className="form-status form-status-success">
              <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <path d="M22 11.08V12a10 10 0 1 1-5.93-9.14" />
                <polyline points="22 4 12 14.01 9 11.01" />
              </svg>
              <span>Thank you! Your message has been sent successfully. We'll get back to you soon.</span>
            </div>
          )}

          {status === 'error' && (
            <div className="form-status form-status-error">
              <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <circle cx="12" cy="12" r="10" />
                <line x1="15" y1="9" x2="9" y2="15" />
                <line x1="9" y1="9" x2="15" y2="15" />
              </svg>
              <span>{errorMsg}</span>
            </div>
          )}

          <form ref={formRef} onSubmit={handleSubmit}>
            <div className="form-group">
              <label htmlFor="name">Full Name *</label>
              <input type="text" id="name" name="from_name" placeholder="Enter your full name" required />
            </div>

            <div className="form-group">
              <label htmlFor="company">Company Name</label>
              <input type="text" id="company" name="company" placeholder="Enter your company name" />
            </div>

            <div className="form-group">
              <label htmlFor="email">Email Address *</label>
              <input type="email" id="email" name="from_email" placeholder="Enter your email address" required />
            </div>

            <div className="form-group">
              <label htmlFor="phone">Phone Number *</label>
              <input type="tel" id="phone" name="phone" placeholder="Enter your phone number" required />
            </div>

            <div className="form-group">
              <label htmlFor="country">Country *</label>
              <input type="text" id="country" name="country" placeholder="Enter your country" required />
            </div>

            <div className="form-group">
              <label htmlFor="product">Product Interest *</label>
              <select id="product" name="product" required>
                <option value="">Select a category</option>
                <option value="Fruits & Vegetables">Fruits & Vegetables</option>
                <option value="Spices">Spices</option>
              </select>
            </div>

            <div className="form-group">
              <label htmlFor="message">Message</label>
              <textarea id="message" name="message" rows="5" placeholder="Describe your trade inquiry or message..."></textarea>
            </div>

            <button
              type="submit"
              className={`submit-button ${status === 'sending' ? 'submit-button-sending' : ''}`}
              disabled={status === 'sending'}
            >
              {status === 'sending' ? (
                <>
                  <span className="spinner" />
                  Sending...
                </>
              ) : (
                'Send Message'
              )}
            </button>
          </form>
        </div>
      </div>
    </div>
  )
}

export default Contact
