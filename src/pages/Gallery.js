import React from 'react';

function Gallery() {
  return (
    <div className="gallery-page">
      <section className="gallery-content">
        <h2>Chapter Gallery</h2>
        
        <div className="gallery-section">
          <h3>Photo Gallery</h3>
          <p>
            Welcome to the Chapter Gallery! This section will showcase photos from 
            our chapter events, activities, and memorable moments.
          </p>
        </div>

        <div className="gallery-section">
          <h3>Coming Soon</h3>
          <div className="construction-notice">
            <p>
              <strong>Note:</strong> The Chapter Gallery is currently under construction. 
              We're working hard to bring you a beautiful photo gallery showcasing our 
              chapter's events and activities.
            </p>
            <p>
              Check back soon for updates, or contact chapter leadership for more 
              information about upcoming gallery features.
            </p>
          </div>
        </div>

        <div className="gallery-section">
          <h3>What to Expect</h3>
          <div className="gallery-features">
            <div className="feature">
              <h4>Event Photos</h4>
              <p>Highlights from chapter events, meetings, and special occasions.</p>
            </div>
            
            <div className="feature">
              <h4>Community Service</h4>
              <p>Photos from our community service projects and volunteer activities.</p>
            </div>
            
            <div className="feature">
              <h4>Brotherhood Moments</h4>
              <p>Memorable moments with brothers and chapter activities.</p>
            </div>
            
            <div className="feature">
              <h4>Awards & Recognition</h4>
              <p>Photos from award ceremonies and recognition events.</p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}

export default Gallery; 