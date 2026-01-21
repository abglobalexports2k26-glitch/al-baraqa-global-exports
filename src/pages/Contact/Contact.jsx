import './Contact.css'

function Contact() {
  return (
    <div className="contact-container">
      <h1>Contact Us</h1>
      
      <div className="contact-content">
        {/* Contact Details */}
        <div className="contact-details">
          <h2>Get in Touch</h2>
          <div className="contact-info">
            <div className="info-item">
              <h3>Address</h3>
              <p>123 Export Street<br />Trade District<br />City, Country 12345</p>
            </div>
            <div className="info-item">
              <h3>Email</h3>
              <p>info@albaraqahexports.com<br />sales@albaraqahexports.com</p>
            </div>
            <div className="info-item">
              <h3>Phone</h3>
              <p>+1 (555) 123-4567<br />+1 (555) 987-6543</p>
            </div>
            <div className="info-item">
              <h3>Business Hours</h3>
              <p>Monday - Friday: 9:00 AM - 6:00 PM<br />Saturday: 10:00 AM - 4:00 PM</p>
            </div>
          </div>
        </div>

        {/* Contact Form */}
        <div className="contact-form">
          <h2>Send Us a Message</h2>
          <form>
            <div className="form-group">
              <label htmlFor="name">Full Name *</label>
              <input type="text" id="name" name="name" required />
            </div>
            
            <div className="form-group">
              <label htmlFor="company">Company Name *</label>
              <input type="text" id="company" name="company" required />
            </div>
            
            <div className="form-group">
              <label htmlFor="email">Email Address *</label>
              <input type="email" id="email" name="email" required />
            </div>
            
            <div className="form-group">
              <label htmlFor="phone">Phone Number</label>
              <input type="tel" id="phone" name="phone" />
            </div>
            
            <div className="form-group">
              <label htmlFor="country">Country *</label>
              <input type="text" id="country" name="country" required />
            </div>
            
            <div className="form-group">
              <label htmlFor="product">Product Interest</label>
              <select id="product" name="product">
                <option value="">Select a category</option>
                <option value="category1">Product Category 1</option>
                <option value="category2">Product Category 2</option>
                <option value="category3">Product Category 3</option>
              </select>
            </div>
            
            <div className="form-group">
              <label htmlFor="message">Message *</label>
              <textarea id="message" name="message" rows="5" required></textarea>
            </div>
            
            <button type="submit" className="submit-button">
              Send Message
            </button>
          </form>
        </div>
      </div>
    </div>
  )
}

export default Contact
