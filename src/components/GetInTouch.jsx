import React from "react";

export const GetInTouch = () => {
  return (
    <div style={{ marginTop: "57px" }}>
      <div className="container">
        <div className="row">
          <div className="col-lg-6">
            {" "}
            <div className="left d-flex flex-column">
              <h1
                style={{
                  textAlign: "left",
                  fontSize: "30px",
                  fontWeight: "bold",
                }}
              >
                Get in Touch
              </h1>
              <div className="formss d-flex flex-column">
                <input
                  type="text"
                  placeholder="Your Name"
                  style={{
                    boxShadow:
                      "rgba(0, 0, 0, 0.1) 0px 4px 6px -1px, rgba(0, 0, 0, 0.06) 0px 2px 4px -1px",
                    marginTop: "1rem",
                    padding: "8px",
                    borderRadius: "12px",
                    outline: "none",
                  }}
                />
                <input
                  type="email"
                  placeholder="Your Email"
                  style={{
                    boxShadow:
                      "rgba(0, 0, 0, 0.1) 0px 4px 6px -1px, rgba(0, 0, 0, 0.06) 0px 2px 4px -1px",
                    marginTop: "1rem",
                    padding: "8px",
                    borderRadius: "12px",
                    outline: "none",
                  }}
                />
                <textarea
                  name="Your Message"
                  style={{
                    boxShadow:
                      "rgba(0, 0, 0, 0.1) 0px 4px 6px -1px, rgba(0, 0, 0, 0.06) 0px 2px 4px -1px",
                    marginTop: "1rem",
                    padding: "8px",
                    borderRadius: "12px",
                    outline: "none",
                    height: "10em",
                    resize: "none",
                  }}
                  placeholder="Your Message"
                  id=""
                  cols="10"
                  rows="10"
                ></textarea>
                <button className="btn btn-danger mt-4">Send</button>
              </div>
            </div>
          </div>
          <div
            className="col-lg-6"
            style={{
              backgroundColor: "#F0F0F0",
              textAlign: "left",
              borderRadius: "1rem",
            }}
          >
            <div className="right" style={{ marginTop: "2rem" }}>
              <h2 style={{ fontSize: "22px" }}>Contact Details</h2>
              <p style={{ marginTop: "1rem" }}>
                Location : <br /> 123 Main Street, San Francisco, CA
              </p>
              <div className="phone" style={{ marginTop: "1rem" }}>
                <p>
                  Phone <br /> +1 (123) 456-7890
                </p>
              </div>
              <div className="email" style={{ marginTop: "1rem" }}>
                <p>
                  Email :<br />
                  hello@candidcontent.com
                </p>
              </div>
            </div>
          </div>
          {/* <div className="col">Column</div> */}
        </div>
      </div>
      {/* <div className="row">
        <div className="col-lg-6">
          <div className="left d-flex flex-column">
            <h1>Get in Touch</h1>
            <div className="formss d-flex flex-column">
              <input type="text" placeholder="Your Name" />
              <input type="email" placeholder="Your Email" />
              <textarea
                name="Your Message"
                placeholder="Your Message"
                id=""
                cols="30"
                rows="10"
              ></textarea>
              <button className="btn btn-danger">Send</button>
            </div>
          </div>
          <div className="col-lg-6">
            <div className="right" style={{ backgroundColor: "#F0F0F0" }}>
              <h2>Contact Details</h2>
              <p>Location 123 Main Street, San Francisco, CA</p>
              <div className="phone">
                <p>Phone +1 (123) 456-7890</p>
              </div>
              <div className="email">
                <p>
                  Email :<br />
                  hello@candidcontent.com
                </p>
              </div>
            </div>
          </div>
        </div>
      </div> */}
      {/* <div className="container">
        <div className="row">
          <div className="col-md-4">
            <div className="card">
              <div className="card-body">
                <h5 className="card-title">Twitter</h5>
                <p className="card-text">@yourtwitterhandle</p>
              </div>
            </div>
          </div>
          <div className="col-md-4">
            <div className="card">
              <div className="card-body">
                <h5 className="card-title">Facebook</h5>
                <p className="card-text">facebook.com/yourfacebookpage</p>
              </div>
            </div>
          </div>
        </div>
      </div> */}
    </div>
  );
};
