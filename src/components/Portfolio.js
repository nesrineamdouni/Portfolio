import React from "react";

function Portfolio() {
  return (
    <div classname="Portfolio">
      <section id="portfolio" className="portfolio">
        <div className="portfolio-details">
          <div className="section-heading text-center">
            <h2>portfolio</h2>
          </div>
          <div className="container">
            <div className="portfolio-content">
              <div className="isotope">
                <div className="row">
                  <div className="col-sm-4">
                    <div className="item">
                      <img
                        src="assets/images/portfolio/p1.jpg"
                        alt="portfolio image"
                      />
                      <div className="isotope-overlay">
                        <a href="#">ui/ux design</a>
                      </div>
                    </div>
                    <div className="item">
                      <img
                        src="assets/images/portfolio/p2.jpg"
                        alt="portfolio image"
                      />
                      <div className="isotope-overlay">
                        <a href="#">ui/ux design</a>
                      </div>
                    </div>
                  </div>
                  <div className="col-sm-4">
                    <div className="item">
                      <img
                        src="assets/images/portfolio/portfolio-5.jpg"
                        alt="portfolio image"
                      />
                      <div className="isotope-overlay">
                        <a href="#">web design</a>
                      </div>
                    </div>
                  </div>
                  <div className="col-sm-4">
                    <div className="item">
                      <img
                        src="assets/images/portfolio/work-3.jpg"
                        alt="portfolio image"
                      />
                      <div className="isotope-overlay">
                        <a href="#">web development</a>
                      </div>
                    </div>
                    <div className="item">
                      <img
                        src="assets/images/portfolio/work-6.jpg"
                        alt="portfolio image"
                      />
                      <div className="isotope-overlay">
                        <a href="#">web development</a>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
export default Portfolio;
