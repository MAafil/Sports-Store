import React, { useRef } from "react";
import { FaEnvelope, FaPhoneAlt, FaTwitter } from "react-icons/fa";
import Card from "../../components/card/Card";
import styles from "./Contact.module.scss";
import { GoLocation } from "react-icons/go";

import emailjs from "@emailjs/browser";
import { toast } from "react-toastify";
import { Link } from "react-router-dom";
//import logoImage from "../../assets/dan_logo_big.png";

// const logo = (
//   <div className={styles.logo}>
//     <Link to="/">
//       <h2>
//         Aafil's<span>Sport</span>Store
//       </h2>
//     </Link>
//   </div>
// );
const logo = (
  <div className={styles.logo}>
    <Link to="/">
      <h2>Aafil's Sport Store</h2>
    </Link>
  </div>
);


const Contact = () => {
  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm(
        `${process.env.REACT_APP_EMAILJS_SERVICE_ID}`,
        `${process.env.REACT_APP_EMAILJS_TEMPLATE_ID}`,
        form.current,
        `${process.env.REACT_APP_EMAILJS_OTHER_ID}`
      )
      .then(
        (result) => {
          toast.success("Message sent successfully");
        },
        (error) => {
          toast.error(error.text);
        }
      );
    e.target.reset();
  };
  return (
    <section>
      <div className={`container ${styles.contact}`}>
        <h2>Contact Us</h2>
        <div className={styles.section}>
          <form ref={form} onSubmit={sendEmail}>
            <Card cardClass={styles.card}>
              <label>Name</label>
              <input
                type="text"
                name="user_name"
                placeholder="Full Name"
                required
              />
              <label>Email</label>
              <input
                type="text"
                name="user_email"
                placeholder="Your active Email"
                required
              />
              <label>Subject</label>
              <input
                type="text"
                name="subject"
                placeholder="Subject"
                required
              />
              <label>Message</label>
              <textarea cols="30" rows="10" name="message"></textarea>
              <button className="--btn --btn-primary">Send Message</button>
            </Card>
          </form>
          <div className={styles.details}>
          <div className={styles.logo}>{logo}</div>
            <Card cardClass={styles.card2}>
              <h3>Our Contact Information</h3>
              <p>Fill the form or contact us via other channels listed below</p>
              <div className={styles.icons}>
                <span>
                  <FaPhoneAlt />
                  <p>+19057818924</p>
                </span>
                <span>
                  <FaEnvelope />
                  <p>aafilzenin@gmail.com</p>
                </span>
                <span>
                  <GoLocation />
                  <p> London, ON </p>
                </span>
                {/* <span>
                  <FaTwitter />
                  <p></p>
                </span> */}
              </div>
            </Card>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
