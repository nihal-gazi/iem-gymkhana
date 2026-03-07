import '../../index.css';

export default function Contact() {
  return (
    <div className="page-wrapper">
      <h1 style={{ marginBottom: '30px', fontSize: '2.5rem' }}>Contact Us</h1>
      
      <div className="contact-container">
        {/* Left Side: Contact Information */}
        <div className="contact-info">
          <h3>Get in Touch</h3>
          <p>Have questions about the gymkhana, societies, or upcoming events? Reach out to us!</p>
          
          <div style={{ marginTop: '20px' }}>
            <p><strong>📍 Address:</strong><br /> [Institute Name / Gymkhana Building]<br /> [City, State, ZIP]</p>
            <p style={{ marginTop: '10px' }}><strong>📧 Email:</strong><br /> contact@gymkhana.edu</p>
            <p style={{ marginTop: '10px' }}><strong>📞 Phone:</strong><br /> +91 12345 67890</p>
          </div>
        </div>

        {/* Right Side: Contact Form Skeleton */}
        <div className="contact-form-wrapper">
          <form className="contact-form" onSubmit={(e) => e.preventDefault()}>
            <div className="form-group">
              <label htmlFor="name">Name</label>
              <input type="text" id="name" placeholder="Your Name" required />
            </div>
            
            <div className="form-group">
              <label htmlFor="email">Email</label>
              <input type="email" id="email" placeholder="Your Email" required />
            </div>
            
            <div className="form-group">
              <label htmlFor="message">Message</label>
              <textarea id="message" rows="5" placeholder="How can we help you?" required></textarea>
            </div>
            
            <button type="submit" className="submit-btn">Send Message</button>
          </form>
        </div>
      </div>
    </div>
  );
}