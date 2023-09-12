import React from "react";

export const Feature = () => {
  return (
    <section id="feature" className="features section">
      <div className="container">
        <div className="features-inner section-inner has-bottom-divider">
          <h3 className="contact-h3">FEATURES</h3>
          <div className="features-wrap">
            <div className="feature text-center is-revealing">
              <div className="feature-inner">
                <div className="feature-icon">
                  <img
                    title="I'm a dummy icon. This varies based on the functionality."
                    src={"./images/feature-icon-01.svg"}
                    alt="Feature 01"
                  />
                </div>
                <h4 className="feature-title mt-24">Feature 1</h4>
                <p className="text-sm mb-0">
                 New advanced technology for patented sound sensor.
                 Patent No: 8,514.97
                </p>
              </div>
            </div>
            <div className="feature text-center is-revealing">
              <div className="feature-inner">
                <div className="feature-icon">
                  <img
                    title="I'm a dummy icon. This varies based on the functionality."
                    src={"./images/feature-icon-02.svg"}
                    alt="Feature 02"
                  />
                </div>
                <h4 className="feature-title mt-24">Feature 2</h4>
                <p className="text-sm mb-0">
                  Custom your bulk order, send email for serious inquiries
                </p>
              </div>
            </div>
            <div className="feature text-center is-revealing">
              <div className="feature-inner">
                <div className="feature-icon">
                  <img
                    title="I'm a dummy icon. This varies based on the functionality."
                    src={"./images/feature-icon-03.svg"}
                    alt="Feature 03"
                  />
                </div>
                <h4 className="feature-title mt-24">Feature 3</h4>
                <p className="text-sm mb-0">
                  We are in the middle of rebranding please be patient
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
