import React, { useRef, useState } from "react";
import emailjs from "@emailjs/browser";
import "../components/contactForm.css";
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
            <section
              className="contact-us"
              id="contact-section"
              style={{ padding: "20px" }}
            >
              <form
                //   id="form-submit"
                action="https://formspree.io/f/xqkvnoyv"
                method="POST"
              >
                <div className="section-heading">
                  <h4 className="contact_us">Contact us</h4>
                </div>

                <div className="inputField">
                  <input
                    type="name"
                    name="name"
                    id="name"
                    placeholder="Your name"
                    autocomplete="on"
                    required
                  />
                  <span className="valid_info_name"></span>
                </div>

                <div className="inputField">
                  <input
                    type="number"
                    name="phoneNumber"
                    id="phone"
                    placeholder="Your Phone number"
                    required=""
                  />
                  <span className="valid_info_email"></span>
                </div>
                <div className="inputField">
                  <input
                    type="Email"
                    name="email"
                    id="email"
                    placeholder="Your email"
                    required=""
                  />
                  <span className="valid_info_email"></span>
                </div>

                <div className="inputField">
                  <textarea
                    name="message"
                    id="message"
                    placeholder="Your message"
                  ></textarea>
                  <span className="valid_info_message"></span>
                </div>

                <button
                  type="submit"
                  id="form-submit"
                  className="main-gradient-button button_contact  monteseraat_btn"
                  style={{
                    // backgroundColor: "red",
                    color: "white",
                    cursor: "pointer",
                  }}
                  // onClick={() => {
                  //   console.log("clcick");
                  // }}
                >
                  Submit
                </button>
                {/* <div className="inputField btn"></div> */}
              </form>
            </section>
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
        {/* <section
          className="contact-us"
          id="contact-section"
          style={{ padding: "20px" }}
        >
          <form
            //   id="form-submit"
            action="https://formspree.io/f/moqodrre"
            method="POST"
          >
            <div className="section-heading">
              <h4 className="contact_us">Contact us</h4>
            </div>

            <div className="inputField">
              <input
                type="name"
                name="name"
                id="name"
                placeholder="Your name"
                autocomplete="on"
                required
              />
              <span className="valid_info_name"></span>
            </div>

            <div className="inputField">
              <input
                type="number"
                name="phoneNumber"
                id="phone"
                placeholder="Your Phone number"
                required=""
              />
              <span className="valid_info_email"></span>
            </div>
            <div className="inputField">
              <input
                type="Email"
                name="email"
                id="email"
                placeholder="Your email"
                required=""
              />
              <span className="valid_info_email"></span>
            </div>

            <div className="inputField">
              <textarea
                name="message"
                id="message"
                placeholder="Your message"
              ></textarea>
              <span className="valid_info_message"></span>
            </div>

            <button
              type="submit"
              id="form-submit"
              className="main-gradient-button button_contact  monteseraat_btn"
              style={{
                color: "white",
                cursor: "pointer",
              }}
            >
              Submit
            </button>
          </form>
        </section> */}
      </div>
    </div>
  );
};
