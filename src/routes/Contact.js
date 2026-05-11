import React, { Component } from "react";
import "./styles/Contact.css";
import emailjs from "@emailjs/browser";

export default class Contact extends Component {
  constructor() {
    super();
    this.sendEmail = this.sendEmail.bind(this);
    this.state = {
      sent: false,
    };
  }

  sendEmail(e) {
    e.preventDefault();

    emailjs
      .sendForm(
        "service_9ff0rcs",
        "template_k13laab",
        e.target,
        "irVYsQcCilWcApvw1"
      )

      .then(
        (result) => {
          console.log(result.text);
        },
        (error) => {
          console.log(error.text);
        }
      );

    this.setState({
      sent: true,
    });
  }

  render() {
    if (this.state.sent === false) {
      return (
        <section className="contact-page">
          <div className="contact-text">
              <h1 className="contact-me">Contact Me</h1>
              <p className="statement">
                Need to get in touch with me? Leave your name and a brief
                message in the form below or send me an email at
                wendel.ryan@yahoo.com.
              </p>
            <form className="contact-form" onSubmit={this.sendEmail}>
                <label className="contact-label">Name:</label>
                <input className="contact-input" ref="name" type="text" name="user_name" />
                <label className="contact-label">Email:</label>
                <input className="contact-input" ref="email" type="email" name="user_email" />
                <label className="contact-label">Message:</label>
                <textarea className="contact-textarea" ref="message" name="message" />
                <input className="submit" type="submit" value="Send" />
            </form>
          </div>
        </section>
      );
    } else {
      return (
        <section className="thank-you-page">
          <div className="thank-you">
            <h1 className="thank-you-statement">Thank you for reaching out.</h1>
            <p className="thank-you-message">
              I will be in contact with you soon!
            </p>
          </div>
        </section>
      );
    }
  }
}
