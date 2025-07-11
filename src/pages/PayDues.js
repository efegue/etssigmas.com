import React from 'react';

function PayDues() {
  return (
    <div className="pay-dues-content">
      <div className="pay-dues-section">
        <h2>Pay Your Dues</h2>
        
        <div className="dues-intro">
          <p>
            Thank you for choosing to pay your dues using Epsilon Theta Sigma Chapter website. 
            Please select from the following options to pay dues:
          </p>
        </div>

        <div className="dues-options">
          <h3>2026 Dues Options</h3>
          
          <div className="dues-list">
            <div className="dues-item">
              <h4>Local Quarterly Dues</h4>
              <p>
                If you would like to pay your 2026 Local Dues of $175.00<sup>*</sup>, please{' '}
                <a 
                  href="https://www.paypal.com/cgi-bin/webscr?cmd=_s-xclick&hosted_button_id=EWYGLL8QDNKY2" 
                  target="_blank" 
                  rel="noopener noreferrer"
                >
                  Click Here
                </a>.
              </p>
            </div>

            <div className="dues-item">
              <h4>National and Regional Dues</h4>
              <p>
                If you would like to pay your 2026 National and Regional Dues of $220.00<sup>*</sup>, please{' '}
                <a 
                  href="http://www.phibetasigma1914.org/bluprint/" 
                  target="_blank" 
                  rel="noopener noreferrer"
                >
                  Click Here
                </a>.
              </p>
            </div>

            <div className="dues-item">
              <h4>National, Regional, and Local Dues (Quarterly)</h4>
              <p>
                If you would like to pay towards your 2026 National, Regional, and Local Dues (Quarterly) of $98.75<sup>*</sup>, please{' '}
                <a 
                  href="https://www.paypal.com/cgi-bin/webscr?cmd=_s-xclick&hosted_button_id=KKFT2QJ7CDRZ6" 
                  target="_blank" 
                  rel="noopener noreferrer"
                >
                  Click Here
                </a>.
              </p>
            </div>

            <div className="dues-item">
              <h4>Full Dues (National, Regional, and Local)</h4>
              <p>
                If you would like to pay your 2026 National, Regional, and Local Dues of $395.00<sup>*</sup>, please{' '}
                <a 
                  href="https://www.paypal.com/cgi-bin/webscr?cmd=_s-xclick&hosted_button_id=ZJN58AMSREMFA" 
                  target="_blank" 
                  rel="noopener noreferrer"
                >
                  Click Here
                </a>.
              </p>
            </div>
          </div>

          <h3>2025 Dues Options</h3>
          
          <div className="dues-list">
            <div className="dues-item">
              <h4>Local Dues</h4>
              <p>
                If you would like to pay your 2025 Local Dues of $150.00<sup>*</sup>, please{' '}
                <a 
                  href="https://www.paypal.com/cgi-bin/webscr?cmd=_s-xclick&hosted_button_id=P7PMYUHCSHFH4" 
                  target="_blank" 
                  rel="noopener noreferrer"
                >
                  Click Here
                </a>.
              </p>
            </div>

            <div className="dues-item">
              <h4>Full Dues (National, Regional, and Local)</h4>
              <p>
                If you would like to pay your 2025 National, Regional, and Local Dues of $331.50<sup>*</sup>, please{' '}
                <a 
                  href="https://www.paypal.com/cgi-bin/webscr?cmd=_s-xclick&hosted_button_id=M6JBLUCKZ8ZBS" 
                  target="_blank" 
                  rel="noopener noreferrer"
                >
                  Click Here
                </a>.
              </p>
            </div>
          </div>

          <div className="reactivation-notice">
            <h4>Reactivation</h4>
            <p>
              If you were inactive during the 2023 and 2024, please{' '}
              <a 
                href="mailto:estsigmas@gmail.com?Subject=Reactivation" 
                target="_top"
              >
                Click Here
              </a>{' '}
              to send an email to the ETS Finance Team and someone will contact you regarding reactivation.
            </p>
          </div>

          <div className="processing-fee-notice">
            <p><em>* Amount shown does not include processing fee</em></p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default PayDues; 