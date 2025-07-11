import React from 'react';

function Events() {
  return (
    <div className="events-page">
      <section className="events-content">
        <h2>Chapter Events</h2>
        
        <div className="events-section">
          <h3>Upcoming Events</h3>
          <div className="event-list">
            <div className="event">
              <h4>Community Service Day</h4>
              <p><strong>Date:</strong> TBD</p>
              <p><strong>Location:</strong> Local Community Center</p>
              <p>Join us for a day of community service and giving back to our local community.</p>
            </div>
            
            <div className="event">
              <h4>Leadership Workshop</h4>
              <p><strong>Date:</strong> TBD</p>
              <p><strong>Location:</strong> Chapter Meeting Hall</p>
              <p>Professional development workshop focused on leadership skills and personal growth.</p>
            </div>
            
            <div className="event">
              <h4>Scholarship Fundraiser</h4>
              <p><strong>Date:</strong> TBD</p>
              <p><strong>Location:</strong> TBD</p>
              <p>Annual fundraiser to support educational initiatives and student scholarships.</p>
            </div>
          </div>
        </div>

        <div className="events-section">
          <h3>Past Events</h3>
          <div className="event-list">
            <div className="event">
              <h4>Mentoring Program Launch</h4>
              <p><strong>Date:</strong> Previous Month</p>
              <p>Successfully launched our youth mentoring program in partnership with local schools.</p>
            </div>
            
            <div className="event">
              <h4>Educational Seminar</h4>
              <p><strong>Date:</strong> Previous Month</p>
              <p>Hosted an educational seminar on financial literacy and career development.</p>
            </div>
          </div>
        </div>

        <div className="events-section">
          <h3>Regular Activities</h3>
          <ul>
            <li>Monthly Chapter Meetings</li>
            <li>Community Service Projects</li>
            <li>Educational Workshops</li>
            <li>Social Gatherings</li>
            <li>Leadership Development Sessions</li>
          </ul>
        </div>

        <div className="events-section">
          <h3>Get Involved</h3>
          <p>
            Interested in attending our events or getting involved with our chapter? 
            Contact us at <strong>etssigmas@gmail.com</strong> for more information 
            about upcoming events and opportunities to participate.
          </p>
        </div>
      </section>
    </div>
  );
}

export default Events; 