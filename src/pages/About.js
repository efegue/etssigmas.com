import React from 'react';

function About() {
  const leadership = [
    {
      name: "Brother Robert McGhee",
      position: "Chapter President",
      image: "president.jpg"
    },
    {
      name: "Brother Tony Holmes",
      position: "Vice President",
      image: "vice-president.jpg"
    }/*,
    {
      name: "Brother David Williams",
      position: "Secretary",
      image: "secretary.jpg"
    },
    {
      name: "Brother Robert Brown",
      position: "Treasurer",
      image: "treasurer.jpg"
    },
    {
      name: "Brother James Davis",
      position: "Chaplain",
      image: "chaplain.jpg"
    },
    {
      name: "Brother Thomas Wilson",
      position: "Historian",
      image: "historian.jpg"
    }*/
  ];

  return (
    <div className="about-page">
      <section className="about-content">
        <h2>About Our Chapter</h2>
        
        <div className="about-section">
          <h3>Our Mission</h3>
          <p>
            The Epsilon Theta Sigma Chapter is committed to promoting Brotherhood, 
            Scholarship, and Service within our community. We strive to develop 
            leaders who will make positive contributions to society.
          </p>
        </div>

        <div className="leadership-section">
          <h3>Chapter Leadership</h3>
          <div className="leadership-grid">
            {leadership.map((leader, index) => (
              <div key={index} className="leader-card">
                <div className="leader-image">
                  <img 
                    src={leader.image} 
                    alt={`${leader.name} - ${leader.position}`}
                    loading="lazy"
                    srcSet={
                      leader.image.replace('.jpg', '-400.jpg') + ' 400w, ' +
                      leader.image.replace('.jpg', '-800.jpg') + ' 800w, ' +
                      leader.image.replace('.jpg', '-1200.jpg') + ' 1200w'
                    }
                    sizes="(max-width: 600px) 100vw, (max-width: 400px) 100vw, 400px"
                    onError={(e) => {
                      e.target.style.display = 'none';
                      e.target.nextSibling.style.display = 'flex';
                    }}
                  />
                  <div className="sigma-letter" style={{display: 'none'}}>Σ</div>
                </div>
                <div className="leader-info">
                  <h4 className="leader-name">{leader.name}</h4>
                  <p className="leader-position">{leader.position}</p>
                </div>
              </div>
            ))}
          </div>
        </div>

        <div className="about-section">
          <h3>Community Involvement</h3>
          <p>
            We actively participate in community service projects, educational 
            programs, and leadership development initiatives. Our chapter works 
            closely with local organizations to create positive change.
          </p>
        </div>

        <div className="about-section">
          <h3>Chapter Activities</h3>
          <ul>
            <li>Community Service Projects</li>
            <li>Educational Workshops</li>
            <li>Leadership Development Programs</li>
            <li>Mentoring Initiatives</li>
            <li>Social Events and Gatherings</li>
          </ul>
        </div>
      </section>
    </div>
  );
}

export default About; 