import React from 'react';

function History() {
  return (
    <div className="history-page">
      <section className="history-content">
        <h2>History & Mission</h2>
        
        <div className="history-section">
          <h3>Phi Beta Sigma Fraternity, Inc.</h3>
          <p>
            Phi Beta Sigma Fraternity, Inc. was founded on January 9, 1914, at 
            Howard University in Washington, D.C. The fraternity was established 
            with the motto "Culture for Service and Service for Humanity."
          </p>
        </div>

        <div className="history-section">
          <h3>Our Founding Fathers</h3>
          <p>
            Phi Beta Sigma Fraternity, Inc. was founded by three visionary men 
            who came together to create an organization that would promote 
            brotherhood, scholarship, and service. These founding fathers were:
          </p>
          <div className="founding-fathers">
            <div className="founder">
              <h4>A. Langston Taylor</h4>
              <p>
                The first president of Phi Beta Sigma, A. Langston Taylor was 
                born in Memphis, Tennessee. He was a graduate of Howard University 
                and served as the fraternity's first president from 1914-1915. 
                Taylor was instrumental in establishing the fraternity's foundation 
                and guiding principles.
              </p>
            </div>
            <div className="founder">
              <h4>Leonard F. Morse</h4>
              <p>
                Leonard F. Morse was born in Washington, D.C. and graduated from 
                Howard University. He served as the fraternity's first secretary 
                and was responsible for much of the early administrative work 
                that helped establish Phi Beta Sigma's organizational structure.
              </p>
            </div>
            <div className="founder">
              <h4>Charles I. Brown</h4>
              <p>
                Charles I. Brown was born in Topeka, Kansas and graduated from 
                Howard University. He served as the fraternity's first treasurer 
                and played a crucial role in the financial foundation of the 
                organization during its formative years.
              </p>
            </div>
          </div>
          <p>
            These three men, known as the "Three Musketeers," worked together 
            to establish an organization that would become one of the most 
            influential fraternities in the African American community, 
            promoting excellence in scholarship, leadership, and service.
          </p>
        </div>

        <div className="history-section">
          <h3>Our Founding Principles</h3>
          <div className="principles">
            <div className="principle">
              <h4>Brotherhood</h4>
              <p>
                We foster a strong bond of brotherhood among our members, 
                creating lifelong friendships and support networks.
              </p>
            </div>
            <div className="principle">
              <h4>Scholarship</h4>
              <p>
                We promote academic excellence and intellectual growth, 
                encouraging our members to pursue knowledge and education.
              </p>
            </div>
            <div className="principle">
              <h4>Service</h4>
              <p>
                We are committed to serving our communities through 
                various initiatives and programs that create positive change.
              </p>
            </div>
          </div>
        </div>

        <div className="history-section">
          <h3>Our Mission</h3>
          <p>
            To promote Brotherhood, Scholarship, and Service while developing 
            leaders who will contribute positively to society. We strive to 
            create opportunities for personal and professional growth while 
            serving our community with dedication and excellence.
          </p>
        </div>
      </section>
    </div>
  );
}

export default History; 