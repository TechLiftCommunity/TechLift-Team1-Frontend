import React from "react";
import "./Form.css";

const Form = () => {
  return (
    <div className="app__form">
      <div className="app__form-top">
        <h1>Can’t find your community listed?</h1>

        <p className="form-p">
          Contact us if your community isn't listed; we'll expand our network to
          connect you with like-minded individuals and resources.
        </p>
      </div>

      <div className="app__form-input">
        <input type="email" placeholder="Your Email" className="input" />

        <input type="text" placeholder="Your Message" className="message-box" />

        <button type="submit" className="form-btn">
          Send Message
        </button>
      </div>
    </div>
  );
};

export default Form;
