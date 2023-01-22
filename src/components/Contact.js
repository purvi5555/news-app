import { FormControl } from "@chakra-ui/react";
import React from "react";
import Footer from "./Footer";

export default function Contact() {
  return (
    <div style={{ margin: "35px 0px", marginTop: "180px" }}>
      <h1 className="mb-3" style={{ textAlign: "center" }}>
        Contact Us
      </h1>

      <div style={{ textAlign: "center" }} className="container">
        <iframe
          className="map"
          id="gmap_canvas"
          src="https://maps.google.com/maps?q=Indore&t=&z=13&ie=UTF8&iwloc=&output=embed"
        ></iframe>
      </div>
      <div className="mt-5" style={{ textAlign: "center" }}>
        <h5>Khabrii News Pvt. Ltd.</h5>
        <p>
          Khabrii Media House, 18-20, Gandhi Marg
          <br />
          Indore - 452001, India <br />
          Phone:+91- 12- 60044242
          <br />
          Timings:Mon- Sat, 09:00am - 06:00pm
        </p>
      </div>
      <div className="mt-5" style={{ textAlign: "center" }}>
        <h3>EDITORIAL ISSUES</h3>
        <p>
          In case of any issues regarding the content on the site please mail us
          at
          <br />
          <b> editorial@khabrii.com</b>
        </p>
      </div>
      <div className="mt-5" style={{ textAlign: "center" }}>
        <h3>BUSINESS QUERIES</h3>
        <p>
          To reach out to us for any business related queries please mail us at
          <br />
          <b> businessqueries@khabrii.com</b>
        </p>
      </div>
      <div className="mt-5" style={{ textAlign: "center" }}>
        <h3>TECH ISSUES</h3>
        <p>
          To report any bug or resolve site related issues, please email us at
          <br />
          <b>tech@khabrii.com</b>
        </p>
      </div>
      <div className="mt-5" style={{ textAlign: "center" }}>
        <h3>CUSTOMER CARE</h3>
        <p>
        For any customer care service for DELHI NCR, reach out to Jaideep Dahiya at
          <br />
          <b>aman.chouhan@khabrii.com</b>
        </p>
      </div>
      <h3 className="mt-5 container" style={{ textAlign: "center" }}>We value your feedback, go ahead and say it all. We will take all accolades & brickbats and try our best to improve!

</h3>
      <div>
        <div>
        <section>
          <div className="container py-5">
            <div className="row">
              <div className="col-lg-6 mx-auto">
                <div className="card">
                  <div className="card-body">
                    <div className="row">
                      <div className="col-lg-12">
                        <div className="head text-center text-white py-3">
                          <h3>FEEDBACK</h3>
                        </div>
                      </div>
                    </div>
                    <div className="form p-3">
                      <div className="form row my-5">
                        <div className="col-lg-6">
                          <input
                            type="text"
                            className="effect-1"
                            placeholder="First Name"
                          />
                          <span className="Focus-border"></span>
                        </div>
                        <div className="col-lg-6 mt-0">
                          <input
                            type="text"
                            className="effect-1"
                            placeholder="Last  Name"
                          />
                          <span className="Focus-border"></span>
                        </div>
                      </div>
                      <div className="form row pb-3">
                        <div className="col-lg-12">
                          <input
                            type="text"
                            className="effect-1"
                            placeholder="Email Address"
                          />
                          <span className="Focus-border"></span>
                        </div>
                      </div>
                      <div className="form row pt-3">
                        <div className="col-lg-12">
                          <input
                            type="text"
                            className="effect-1"
                            placeholder="Message"
                          />
                          <span className="Focus-border"></span>
                        </div>
                      </div>
                      <div className="form row pt-4">
                        <div className="col-lg-6">
                          <p>
                            {" "}
                            <input type="checkbox" />
                            I'm not a robot
                          </p>
                        </div>
                        <div className="offset-2 col-lg-4">
                          <button className="btn1">SEND MESSAGE</button>
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
      </div>
      <Footer/>
    </div>
  );
}
