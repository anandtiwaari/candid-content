import React, { useRef, useState } from "react";
import emailjs from "@emailjs/browser";
export const GetInTouch = () => {
  const form = useRef();
  const [formvalue, setFormValue] = useState({
    from_name: "",
    user_email: "",
    message: "",
  });
  const handleChange = (e) => {
    let { name, value } = e.target;
    setFormValue({
      ...formvalue,
      [name]: value,
    });
  };
  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm(
        "service_ikp2l1m",
        "template_z6yev2z",
        formvalue,
        "Rku31VSpu0LSHrRIa"
      )
      .then(
        (result) => {
          console.log(result.text);
        },
        (error) => {
          console.log(error.text);
        }
      );
    console.log(formvalue, "its a formvalue");
  };

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
                  onChange={handleChange}
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
                  onChange={handleChange}
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
                <button className="btn btn-danger mt-4" onClick={sendEmail}>
                  Send
                </button>
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
            <div
              className="right"
              style={{ marginTop: "2rem", padding: "32px" }}
            >
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
        </div>
      </div>
    </div>
  );
};
