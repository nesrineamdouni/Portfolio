import React from "react";

function Contact() {
  return (
    <div classname="Contact">
      <section id="contact" className="contact">
        <div className="section-heading text-center">
          <h2>contact me</h2>
        </div>
        <div className="container">
          <div className="contact-content">
            <div className="row">
              <div className="col-md-offset-1 col-md-5 col-sm-6">
                <div className="single-contact-box">
                  <div className="contact-form">
                    <form>
                      <div className="row">
                        <div className="col-sm-6 col-xs-12">
                          <div className="form-group">
                            <input
                              type="text"
                              className="form-control"
                              id="name"
                              placeholder="Name"
                              name="name"
                            />
                          </div>
                        </div>
                        <div className="col-sm-6 col-xs-12">
                          <div className="form-group">
                            <input
                              type="email"
                              className="form-control"
                              id="email"
                              placeholder="Email"
                              name="email"
                            />
                          </div>
                        </div>
                      </div>
                      <div className="row">
                        <div className="col-sm-12">
                          <div className="form-group">
                            <input
                              type="text"
                              className="form-control"
                              id="subject"
                              placeholder="Subject"
                              name="subject"
                            />
                          </div>
                        </div>
                      </div>
                      <div className="row">
                        <div className="col-sm-12">
                          <div className="form-group">
                            <textarea
                              className="form-control"
                              rows={8}
                              id="comment"
                              placeholder="Message"
                              defaultValue={""}
                            />
                          </div>
                        </div>
                      </div>
                      <div className="row">
                        <div className="col-sm-12">
                          <div className="single-contact-btn">
                            <a className="contact-btn" href="#" role="button">
                              Send Message
                            </a>
                          </div>
                        </div>
                      </div>
                    </form>
                  </div>
                </div>
              </div>
              <div className="col-md-offset-1 col-md-5 col-sm-6">
                <div className="single-contact-box">
                  <div className="contact-adress">
                    <div className="contact-add-head">
                      <h3>Emma Martinez</h3>
                      <p>uI/uX designer</p>
                    </div>
                    <div className="contact-add-info">
                      <div className="single-contact-add-info">
                        <h3>phone</h3>
                        <p>964-248-1384</p>
                      </div>
                      <div className="single-contact-add-info">
                        <h3>email</h3>
                        <p>martinez@gmail.com</p>
                      </div>
                      <div className="single-contact-add-info">
                        <h3>website</h3>
                        <p>www.emmamartinez.com</p>
                      </div>
                    </div>
                  </div>
                  <div className="hm-foot-icon">
                    <ul>
                      <li>
                        <a href="#">
                          <i className="fa fa-facebook" />
                        </a>
                      </li>
                      <li>
                        <a href="#">
                          <i className="fa fa-dribbble" />
                        </a>
                      </li>
                      <li>
                        <a href="#">
                          <i className="fa fa-twitter" />
                        </a>
                      </li>
                      <li>
                        <a href="#">
                          <i className="fa fa-linkedin" />
                        </a>
                      </li>
                      <li>
                        <a href="#">
                          <i className="fa fa-instagram" />
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
export default Contact;
