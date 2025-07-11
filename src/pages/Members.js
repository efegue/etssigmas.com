import React from 'react';

function Members() {
  return (
    <div className="members-page">
      <section className="members-content">
        <h2>Members Only</h2>
        
        {/* <div className="members-section">
          <h3>Chapter Resources</h3>
          <p>
            Welcome to the members-only section of the Epsilon Theta Sigma Chapter website. 
            This area provides access to chapter resources, announcements, and member information.
          </p>
        </div> */}

        <div className="members-section">
          <h3>Member Login</h3>
          <div className="login-form">
            <p>
              <strong>Note:</strong> This section is currently under development. 
              Member login functionality will be available soon.
            </p>
            <p>
              For now, please contact chapter leadership for access to member resources 
              and information.
            </p>
          </div>
        </div>

        {/* <div className="members-section">
          <h3>Available Resources</h3>
          <div className="resources">
            <div className="resource">
              <h4>Chapter Documents</h4>
              <p>Access to chapter bylaws, meeting minutes, and official documents.</p>
            </div>
            
            <div className="resource">
              <h4>Event Calendar</h4>
              <p>Detailed calendar of chapter events, meetings, and activities.</p>
            </div>
            
            <div className="resource">
              <h4>Member Directory</h4>
              <p>Contact information for chapter members and leadership.</p>
            </div>
            
            <div className="resource">
              <h4>Announcements</h4>
              <p>Important updates and announcements for chapter members.</p>
            </div>
          </div>
        </div>

        <div className="members-section">
          <h3>Contact Leadership</h3>
          <p>
            For immediate assistance or to access member resources, please contact 
            chapter leadership at <strong>etssigmas@gmail.com</strong>.
          </p>
        </div> */}

        <div className="members-section">
          <h3>Coming Soon</h3>
          <ul>
            <li>Secure member login system</li>
            <li>Online event registration</li>
            <li>Member profile management</li>
            <li>Chapter communication tools</li>
            <li>Resource library access</li>
          </ul>
        </div>
      </section>
    </div>
  );
}

export default Members; 