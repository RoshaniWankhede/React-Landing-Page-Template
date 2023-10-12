import { useState } from "react";
import emailjs from "emailjs-com";
import React from "react";
import "../styles/home/contact.css";
import {
  FacebookOutlined,
  TwitterCircleFilled,
  YoutubeOutlined,
} from "@ant-design/icons";

const initialState = {
  name: "",
  email: "",
  message: "",
};
export const Contact = (props) => {
  const [{ name, email, message }, setState] = useState(initialState);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setState((prevState) => ({ ...prevState, [name]: value }));
  };
  const clearState = () => setState({ ...initialState });

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(name, email, message);
    emailjs
      .sendForm("YOUR_SERVICE_ID", "YOUR_TEMPLATE_ID", e.target, "YOUR_USER_ID")
      .then(
        (result) => {
          console.log(result.text);
          clearState();
        },
        (error) => {
          console.log(error.text);
        }
      );
  };
  return (
    <div>
      <div id="contact" className="contactMainContainer">
        <div className="container">
          <div className="col-md-8">
            <div className="row">
              <div className="section-title" data-aos="fade-up">
                <h2>Get In Touch</h2>
                <p style={{ margin: "30px 0" }}>
                  Please fill out the form below to send us an email and we will
                  get back to you as soon as possible.
                </p>
              </div>
              <form
                name="sentMessage"
                validate
                onSubmit={handleSubmit}
                data-aos="fade-up"
              >
                <div className="row">
                  <div className="col-md-6">
                    <div className="form-group">
                      <input
                        type="text"
                        id="name"
                        name="name"
                        className="form-control"
                        placeholder="Name"
                        required
                        onChange={handleChange}
                      />
                      <p className="help-block text-danger"></p>
                    </div>
                  </div>
                  <div className="col-md-6">
                    <div className="form-group">
                      <input
                        type="email"
                        id="email"
                        name="email"
                        className="form-control"
                        placeholder="Email"
                        required
                        onChange={handleChange}
                      />
                      <p className="help-block text-danger"></p>
                    </div>
                  </div>
                </div>
                <div className="form-group">
                  <textarea
                    name="message"
                    id="message"
                    className="form-control"
                    rows="4"
                    placeholder="Message"
                    required
                    onChange={handleChange}
                  ></textarea>
                  <p className="help-block text-danger"></p>
                </div>
                <div id="success"></div>
                <button
                  type="submit"
                  className="btn btn-custom btn-lg"
                  style={{ color: "#000" }}
                >
                  Send Message
                </button>
              </form>
            </div>
            <div className="socialLinksContainer">
              <div>
                <FacebookOutlined className="socialIcon" />
              </div>
              <div>
                <TwitterCircleFilled className="socialIcon" />
              </div>
              <div>
                <YoutubeOutlined className="socialIcon" />
              </div>
            </div>
          </div>

          <div className="col-md-3 col-md-offset-1 contact-info">
            <div className="contact-item" data-aos="fade-up">
              <img
                src="/assets/homepage/logo.svg"
                alt="logo"
                className="footerLogo"
              />
              <h3>Contact Info</h3>
              <i className="fa fa-map-marker"></i> Address
              <p style={{ marginTop: "10px" }}>
                201, C Wing, Sadguru Colony No 3, Samrat Chowk, Datt mandir
                Road, Wakad, Pune 411057 Maharashtra.
              </p>
            </div>
            <div className="contact-item" data-aos="fade-up">
              <p>
                <span>
                  <i className="fa fa-phone"></i> Phone
                </span>{" "}
                +91 7507149084
              </p>
            </div>
            <div className="contact-item" data-aos="fade-up">
              <p>
                <span>
                  <i className="fa fa-envelope-o"></i> Email
                </span>{" "}
                - sales@cvit.in
              </p>
            </div>
          </div>
          {/* <div className="col-md-12"> */}

          {/* </div>   */}
        </div>
      </div>
      {/* <div id="footer">
        <div className="container text-center">
          <p>
            &copy; 2023 Issaaf Kattan React Land Page Template. Design by{" "}
            <a href="http://www.templatewire.com" rel="nofollow">
              TemplateWire
            </a>
          </p>
        </div>
      </div> */}
    </div>
  );
};
