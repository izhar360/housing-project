import React from "react";
import useWindowDimensions from "../components/usewindow";

/**
 * @author
 * @function contact
 **/

const Contact = (props) => {
  const { width } = useWindowDimensions();

  return (
    <section
      class="ftco-section "
      style={{ backgroundColor: "#F8F9FA", marginTop: "30px" }}
    >
      <div
        class="container"
        style={{
          backgroundColor: "#fff",
          borderRadius: "3%",
          boxShadow:
            "0 4px 8px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19)",
        }}
      >
        <div class="row justify-content-center">
          <div class="col-md-12">
            <div class="wrapper">
              <div class="row no-gutters">
                <div class="col-lg-6">
                  <div class="contact-wrap w-100 p-md-5 p-4">
                    <h3>Contact us</h3>
                    <p class="mb-4">
                      We're open for any suggestion or just to have a chat
                    </p>
                    <div id="form-message-warning" class="mb-4"></div>
                    <div id="form-message-success" class="mb-4">
                      Your message was sent, thank you!
                    </div>
                    <div class="row mb-4">
                      <div class="col-md-4">
                        <div class="dbox w-100 d-flex align-items-start">
                          <div class="text">
                            <p>
                              <span
                                style={{
                                  color: `rgba(0, 0, 0, 0.2)`,
                                  fontSize: "13px",
                                  display: "block",
                                  marginBottom: "7px",
                                }}
                              >
                                Address:
                              </span>{" "}
                              198 West 21th Street, Suite 721 New York NY 10016
                            </p>
                          </div>
                        </div>
                      </div>
                      <div class="col-md-4">
                        <div class="dbox w-100 d-flex align-items-start">
                          <div class="text">
                            <p>
                              <span
                                style={{
                                  color: `rgba(0, 0, 0, 0.2)`,
                                  fontSize: "13px",
                                  display: "block",
                                  marginBottom: "7px",
                                }}
                              >
                                Email:
                              </span>{" "}
                              <a href="mailto:info@yoursite.com">
                                info@yoursite.com
                              </a>
                            </p>
                          </div>
                        </div>
                      </div>
                      <div class="col-md-4">
                        <div class="dbox w-100 d-flex align-items-start">
                          <div class="text">
                            <p>
                              <span
                                style={{
                                  color: `rgba(0, 0, 0, 0.2)`,
                                  fontSize: "13px",
                                  display: "block",
                                  marginBottom: "7px",
                                }}
                              >
                                Phone:
                              </span>{" "}
                              <a href="tel://1234567920">+ 1235 2355 98</a>
                            </p>
                          </div>
                        </div>
                      </div>
                    </div>
                    <form
                      method="POST"
                      id="contactForm"
                      name="contactForm"
                      class="contactForm"
                    >
                      <div class="row">
                        <div class="col-md-12">
                          <div class="form-group">
                            <input
                              type="text"
                              style={{
                                border: "none",
                                borderBottom: "1px solid rgba(0, 0, 0, 0.1)",
                              }}
                              class="form-control"
                              name="name"
                              id="name"
                              placeholder="Name"
                            />
                          </div>
                        </div>
                        <div class="col-md-12">
                          <div class="form-group">
                            <input
                              type="email"
                              class="form-control"
                              style={{
                                border: "none",
                                borderBottom: "1px solid rgba(0, 0, 0, 0.1)",
                              }}
                              name="email"
                              id="email"
                              placeholder="Email"
                            />
                          </div>
                        </div>
                        <div class="col-md-12">
                          <div class="form-group">
                            <input
                              type="text"
                              style={{
                                border: "none",
                                borderBottom: "1px solid rgba(0, 0, 0, 0.1)",
                              }}
                              class="form-control"
                              name="subject"
                              id="subject"
                              placeholder="Subject"
                            />
                          </div>
                        </div>
                        <div class="col-md-12">
                          <div class="form-group">
                            <textarea
                              name="message"
                              style={{
                                border: "none",
                                borderBottom: "1px solid rgba(0, 0, 0, 0.1)",
                              }}
                              class="form-control"
                              id="message"
                              cols="30"
                              rows="4"
                              placeholder="Create a message here"
                            ></textarea>
                          </div>
                        </div>
                        <div class="col-md-12">
                          <div class="form-group">
                            <input
                              type="submit"
                              value="Send Message"
                              class="btn btn-primary"
                            />
                            <div class="submitting"></div>
                          </div>
                        </div>
                      </div>
                    </form>
                    <div class="w-100 social-media mt-5">
                      <h3>Follow us here</h3>
                      <p>
                        <a style={{ marginLeft: "6px" }} href="#">
                          Facebook
                        </a>
                        <a style={{ marginLeft: "6px" }} href="#">
                          Twitter
                        </a>
                        <a style={{ marginLeft: "6px" }} href="#">
                          Instagram
                        </a>
                        <a style={{ marginLeft: "6px" }} href="#">
                          Dribbble
                        </a>
                      </p>
                    </div>
                  </div>
                </div>
                {width > 800 && (
                  <div class="col-lg-6 d-flex align-items-stretch">
                    <div
                      class="info-wrap w-100 h-full p-5"
                      style={{
                        marginTop: "11%",
                        backgroundImage: "url(./contact.jpg)",
                        backgroundSize: "contain",
                        backgroundRepeat: "no-repeat",
                      }}
                    ></div>
                  </div>
                )}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
