import '../../index.css';

export default function Contact() {
  return (
    <div className="page-wrapper">

      <div style={{ marginBottom: '32px' }}>
        <h1 style={{ marginBottom: '6px' }}>Contact Us</h1>
        <p>Have questions about the Gymkhana, societies, or upcoming events? We'd love to hear from you.</p>
      </div>

      <div className="contact-container">

        {/* ── Left: Info ── */}
        <div className="contact-info">
          <h3 style={{ marginBottom: '8px' }}>Get in Touch</h3>
          <p style={{ marginBottom: '24px' }}>Reach out to us for any queries related to student activities, societies, or welfare.</p>

          <div className="contact-detail">
            <div className="contact-detail-icon">📍</div>
            <div>
              <strong>Address</strong>
              <span>Institute of Engineering & Management<br />Salt Lake, Kolkata — 700 091</span>
            </div>
          </div>

          <div className="contact-detail">
            <div className="contact-detail-icon">📧</div>
            <div>
              <strong>Email</strong>
              <span>gymkhana@iemcal.com</span>
            </div>
          </div>

          <div className="contact-detail">
            <div className="contact-detail-icon">📞</div>
            <div>
              <strong>Phone</strong>
              <span>+91 33 2337 8026</span>
            </div>
          </div>
        </div>

        {/* ── Right: Form ── */}
        <div className="contact-form-wrapper">
          <h3 style={{ marginBottom: '20px' }}>Send a Message</h3>
          <form className="contact-form" onSubmit={(e) => e.preventDefault()}>

            <div className="form-group">
              <label htmlFor="name">Name</label>
              <input type="text" id="name" placeholder="Your full name" required />
            </div>

            <div className="form-group">
              <label htmlFor="email">Email</label>
              <input type="email" id="email" placeholder="you@example.com" required />
            </div>

            <div className="form-group">
              <label htmlFor="message">Message</label>
              <textarea id="message" rows="5" placeholder="How can we help you?" required />
            </div>

            <button type="submit" className="submit-btn">Send Message</button>
          </form>
        </div>

      </div>
    </div>
  );
}