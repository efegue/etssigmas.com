import React from 'react';

function Home() {
  return (
    <div className="home-page">
      <section className="group-photo">
        <img 
          src="group_photo.jpg" 
          alt="ETS Chapter Group Photo" 
          loading="lazy"
          srcSet="group_photo-400.jpg 400w, group_photo-800.jpg 800w, group_photo-1200.jpg 1200w"
          sizes="(max-width: 600px) 100vw, (max-width: 1000px) 100vw, 1000px"
        />
      </section>
      
      <section className="welcome">
        <h2>Welcome to Epsilon Theta Sigma Chapter</h2>
        <p>
          Welcome to the official website of the Epsilon Theta Sigma Chapter of 
          Phi Beta Sigma Fraternity, Inc. We are dedicated to the principles of 
          Brotherhood, Scholarship, and Service.
        </p>
        <p>
          Our chapter serves the community through various initiatives and programs, 
          fostering leadership, academic excellence, and community service among our members.
        </p>
      </section>
    </div>
  );
}

export default Home; 