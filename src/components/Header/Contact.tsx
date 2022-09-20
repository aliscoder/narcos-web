import React, { useState, useEffect } from "react";
import { DangerCircle } from "../SVG/DangerCircle";

const Contact: React.FC = () => {
  function handleInput(evt: any) {
    const value = evt.target.value;
    const emailRegex =
      /^(([^<>()[\]\.,;:\s@\"]+(\.[^<>()[\]\.,;:\s@\"]+)*)|(\".+\"))@(([^<>()[\]\.,;:\s@\"]+\.)+[^<>()[\]\.,;:\s@\"]{2,})$/i;

    if (emailRegex.test(value.trim())) {
      evt.target.classList.add("valid");
      evt.target.classList.remove("invalid");
    } else {
      evt.target.classList.add("invalid");
      evt.target.classList.remove("valid");
    }

    if (!value) {
      evt.target.classList.remove("invalid");
    }
  }

  const [name, setName] = useState("");
  const [message, setMessage] = useState("");
  const [nameError, setNameErr] = useState(false);
  const [messageError, setMessageErr] = useState(false);
  const submit = () => {
    if (name.length > 3 && message.length > 5) {
      console.log(name, "name");
      console.log(message, "message");
    } else {
      name.length < 4 && setNameErr(true);
      message.length < 6 && setMessageErr(true);
    }
  };

  useEffect(() => {
    name.length > 3 && setNameErr(false);
    message.length > 5 && setMessageErr(false);
  }, [name, message]);

  return (
    <div className="contact-us" id="Contact-us">
      <div className="contact">
        <div className="contact__left">
          <div className="contact__left-title">Contact Us </div>
          <div className="contact__left-subtitle">
            Have any ideas? Want to become our partner? Don’t hesitate to
            contact us!
          </div>
        </div>
        <div className="contact__right">
          <div className="input-container">
            <input
              type="text"
              placeholder="Name"
              value={name}
              onChange={(e) => setName(e.target.value)}
              className={nameError ? "error-input" : ""}
            />
            <span>{nameError && <DangerCircle />}</span>
          </div>
          <div className="input-container">
            {/* <input type="text" placeholder="Email Address (optional)" /> */}
            <input
              onInput={(e) => handleInput(e)}
              placeholder="Email Address (optional)"
              type="text"
              className="email-input"
            />
            <span className="svg">
              <DangerCircle />
            </span>
          </div>
          <div className="input-container">
            <input
              type="text"
              placeholder="Write your a message..."
              value={message}
              onChange={(e) => setMessage(e.target.value)}
              className={messageError ? "error-input" : ""}
            />
            <span>{messageError && <DangerCircle />}</span>
          </div>
          <div className="contact__right--button-container">
            <button className="contact__right--button" onClick={submit}>
              SEND
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;
