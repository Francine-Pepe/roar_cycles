import React, { useRef } from "react";
import emailjs from "@emailjs/browser";
import { Container } from "@mui/material";
import "./Contact.css";
import { Icon } from "@iconify/react";
// import Postit from './../Images/postit.png';

export default function Contact() {
  const form = useRef();

  function sendEmail(e) {
    e.preventDefault();

    emailjs
      .sendForm(
        "service_5gpnfnk",
        "template_sgmp2xj",
        form.current,
        "user_YeUwC6WQsK1xiMGVBrKzC"
      )
      .then(
        (result) => {
          console.log(result.text);
        },
        (error) => {
          console.log(error.text);
        }
      );
    form.current.reset();
    alert("Thanks for contacting me! I will reply you soon! 📧");
  }

  return (
    <>
      <div className="background_container">
          <div className="contact_wrapper">
            <div className="contact_header">
                <h1>CONTACT</h1>
            </div>
            <div className="opacity_container">
                <Container
                fluid
                className="contact_container mt-5"
                sx={{
                    display: "flex",
                    marginTop: 5,
                }}
                >
                <form className="form_box" onSubmit={sendEmail}>
                    <label>Name:</label>
                    <input type="text" name="user_name" />
                    <label>Email:</label>
                    <input type="email" name="user_email" />
                    <label>Message:</label>
                    <textarea name="message" />
                    <button type="submit" value="Send" className="submit_button">
                    SUBMIT
                    </button>
                </form>
                </Container>
            </div>
        </div>
      </div>
    </>
  );
}
