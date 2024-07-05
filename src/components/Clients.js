import React from "react";
import { Carousel } from "react-bootstrap";

function Clients() {
  return (
    <div classname="Clients">
      <section id="clients" className="clients">
        <div className="section-heading text-center">
          <h2>clients</h2>
        </div>
        <div className="clients-area">
          <div className="container">
            <Carousel
              id="client"
              slide={false}
              interval={null}
              controls={false}
              className="d-flex justify-content-between"
            >
              <Carousel.Item>
                <div className="d-flex">
                  <a href="#">
                    <img
                      className="mr-3"
                      style={{ marginRight: "50px" }}
                      src="assets/images/clients/c1.png"
                      alt="brand-image"
                    />
                  </a>
                  <a href="#">
                    <img
                      className="mr-3"
                      style={{ marginRight: "50px" }}
                      src="assets/images/clients/c2.png"
                      alt="brand-image"
                    />
                  </a>
                  <a href="#">
                    <img
                      className="mr-3"
                      style={{ marginRight: "50px" }}
                      src="assets/images/clients/c3.png"
                      alt="brand-image"
                    />
                  </a>
                  <a href="#">
                    <img
                      className="mr-3"
                      style={{ marginRight: "50px" }}
                      src="assets/images/clients/c4.png"
                      alt="brand-image"
                    />
                  </a>
                  <a href="#">
                    <img
                      className="mr-3"
                      style={{ marginRight: "50px" }}
                      src="assets/images/clients/c5.png"
                      alt="brand-image"
                    />
                  </a>
                  <a href="#">
                    <img
                      className="mr-3"
                      style={{ marginRight: "50px" }}
                      src="assets/images/clients/c6.png"
                      alt="brand-image"
                    />
                  </a>
                  <a href="#">
                    <img
                      className="mr-3"
                      style={{ marginRight: "50px" }}
                      src="assets/images/clients/c7.png"
                      alt="brand-image"
                    />
                  </a>
                </div>
              </Carousel.Item>
            </Carousel>
          </div>
        </div>
      </section>
    </div>
  );
}
export default Clients;
