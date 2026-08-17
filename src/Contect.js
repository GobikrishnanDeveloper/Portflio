import React from "react";
import "./Contect.css";

function Contect() {
  return (
    <section id="contact" className="contact-page">
      <div className="contact-container">
        
        {/* Left Side - Info */}
        <div className="contact-info">
          <h2>Get In Touch</h2>
          <p>
            I’d love to connect with you! Whether it’s about projects,
            collaborations, or opportunities, feel free to reach out.
          </p>
          <ul>
            <li>📧 Email: velmani@example.com</li>
            <li>📞 Phone: +91 98765 43210</li>
            <li>📍 Location: Cuddalore, Tamil Nadu, India</li>
          </ul>
          <div className="social-links">
            <a href="#">🌐 LinkedIn</a>
            <a href="#">💻 GitHub</a>
            <a href="#">🐦 Twitter</a>
          </div>
        </div>

        {/* Right Side - Form */}
        <div className="contact-form">
          <h2>Send a Message</h2>
          <form>
            <input type="text" placeholder="Your Name" required />
            <input type="email" placeholder="Your Email" required />
            <textarea placeholder="Your Message" rows="5" required></textarea>
            <button type="submit" className="btn-send">Send Message</button>
          </form>
        </div>
      </div>
    </section>
  );
}

export default Contect;
