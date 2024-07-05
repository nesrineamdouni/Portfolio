import React from "react";

function About() {
  return (
    <div classname="About">
      <section id="about" className="about">
        <div className="section-heading text-center">
          <h2>about me</h2>
        </div>
        <div className="container">
          <div className="about-content">
            <div className="row">
              <div className="col-sm-6">
                <div className="single-about-txt">
                  <h3>
                    I am a graphic designer and web developer. <br />
                    Consectetur an adipisi elita, sed do eiusmod tempor
                    incididunt ut labore et dolore magna aliqua. Ut enim ad
                    minim veniam quis nostrud.
                  </h3>
                  <p>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut
                    tristique libero a tortor egestas blandit. Sed at urna
                    pulvinar, porta lectus vel, semper lorem. Praesent placerat
                    nisi vel maximus aliquam. Integer faucibus luctus egestas.
                    Morbi ultrices vehicula leo condimentum rhoncus. Duis mollis
                    mauris sit amet lacus rutrum iaculis. Vivamus id blandit
                    mauris, nec sagittis purus. Donec ac orci tincidunt, tempor
                    neque nec, tincidunt erat.
                  </p>
                  <div className="row">
                    <div className="col-sm-4">
                      <div className="single-about-add-info">
                        <h3>phone</h3>
                        <p>964-248-1384</p>
                      </div>
                    </div>
                    <div className="col-sm-4">
                      <div className="single-about-add-info">
                        <h3>email</h3>
                        <p>martinez@gmail.com</p>
                      </div>
                    </div>
                    <div className="col-sm-4">
                      <div className="single-about-add-info">
                        <h3>website</h3>
                        <p>www.emmamartinez.com</p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="col-sm-offset-1 col-sm-5">
                <div className="single-about-img">
                  <img
                    src="assets/images/about/Screenshot_118.png"
                    alt="profile_image"
                  />
                  <div className="about-list-icon">
                    <ul>
                      <li>
                        <a href="#">
                          <i className="fa fa-facebook" aria-hidden="true" />
                        </a>
                      </li>
                      <li>
                        <a href="#">
                          <i className="fa fa-dribbble" aria-hidden="true" />
                        </a>
                      </li>
                      <li>
                        <a href="#">
                          <i className="fa fa-twitter" aria-hidden="true" />
                        </a>
                      </li>
                      <li>
                        <a href="#">
                          <i className="fa fa-linkedin" aria-hidden="true" />
                        </a>
                      </li>
                      <li>
                        <a href="#">
                          <i className="fa fa-instagram" aria-hidden="true" />
                        </a>
                      </li>
                    </ul>
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
export default About;
