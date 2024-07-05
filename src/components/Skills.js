import React from "react";
import { ProgressBar } from "react-bootstrap";

function Skills() {
  return (
    <div classname="Skills">
      <section id="skills" className="skills">
        <div className="skill-content">
          <div className="section-heading text-center">
            <h2>skills</h2>
          </div>
          <div className="container">
            <div className="row">
              <div className="col-md-6">
                <div className="single-skill-content">
                  <div className="barWrapper">
                    <span className="progressText">adobe photoshop</span>
                    <div className="single-progress-txt">
                      <ProgressBar now={98} min={10} max={100} />
                      <h3>98%</h3>
                    </div>
                  </div>
                  <div className="barWrapper">
                    <span className="progressText">adobe illustrator</span>
                    <div className="single-progress-txt">
                      <ProgressBar now={85} min={10} max={100} />
                      <h3>85%</h3>
                    </div>
                  </div>
                  <div className="barWrapper">
                    <span className="progressText">adobe after effects</span>
                    <div className="single-progress-txt">
                      <ProgressBar now={90} min={10} max={100} />
                      <h3>90%</h3>
                    </div>
                  </div>
                  <div className="barWrapper">
                    <span className="progressText">sketch</span>
                    <div className="single-progress-txt">
                      <ProgressBar now={95} min={10} max={100} />
                      <h3>95%</h3>
                    </div>
                  </div>
                </div>
              </div>
              <div className="col-md-6">
                <div className="single-skill-content">
                  <div className="barWrapper">
                    <span className="progressText">html 5</span>
                    <div className="single-progress-txt">
                      <ProgressBar now={90} min={10} max={100} />
                      <h3>90%</h3>
                    </div>
                  </div>
                  <div className="barWrapper">
                    <span className="progressText">React JS</span>
                    <div className="single-progress-txt">
                      <ProgressBar now={70} min={10} max={100} />
                      <h3>70%</h3>
                    </div>
                  </div>
                  <div className="barWrapper">
                    <span className="progressText">Angular</span>
                    <div className="single-progress-txt">
                      <ProgressBar now={95} min={10} max={100} />
                      <h3>95%</h3>
                    </div>
                  </div>
                  <div className="barWrapper">
                    <span className="progressText"> Symfony</span>
                    <div className="single-progress-txt">
                      <ProgressBar now={80} min={10} max={100} />
                      <h3>80%</h3>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>{" "}
        </div>
      </section>
    </div>
  );
}
export default Skills;
