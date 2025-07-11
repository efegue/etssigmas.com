import React from 'react';

function Contact() {
  const handleSocialClick = (e) => {
    e.preventDefault();
    alert('This would redirect to our social media page.');
  };

  return (
    <section className="contact">
      <div className="logos">
        <img src="phi-beta-sigma-left.png" alt="PBS Seal" className="logo" />
        <div className="social">
          <h3>Follow Us</h3>
          <a href="#" onClick={handleSocialClick}>
            <img src="facebook.png" alt="Facebook" />
          </a>
          <a href="#" onClick={handleSocialClick}>
            <img src="instagram.png" alt="Instagram" />
          </a>
          <h3>Contact Us</h3>
          <p>etssigmas@gmail.com</p>
        </div>
        <img src="phi-beta-sigma-right.png" alt="River Region Logo" className="logo" />
      </div>
    </section>
  );
}

export default Contact; 