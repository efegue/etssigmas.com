import React from 'react';

function Contact() {
  const handleSocialClick = (e) => {
    e.preventDefault();
    alert('This would redirect to our social media page.');
  };

  return (
    <section className="contact">
      <div className="logos">
        <img src="phi-beta-sigma-left.png" alt="PBS Seal" className="logo" loading="lazy" srcSet="phi-beta-sigma-left.png 120w" sizes="120px" />
        <div className="social">
          <h3>Follow Us</h3>
          <a href="#" onClick={handleSocialClick}>
            <img src="facebook.png" alt="Facebook" loading="lazy" srcSet="facebook.png 30w" sizes="30px" />
          </a>
          <a href="#" onClick={handleSocialClick}>
            <img src="instagram.png" alt="Instagram" loading="lazy" srcSet="instagram.png 30w" sizes="30px" />
          </a>
          <h3>Contact Us</h3>
          <p>etssigmas@gmail.com</p>
        </div>
        <img src="phi-beta-sigma-right.png" alt="River Region Logo" className="logo" loading="lazy" srcSet="phi-beta-sigma-right.png 120w" sizes="120px" />
      </div>
    </section>
  );
}

export default Contact; 