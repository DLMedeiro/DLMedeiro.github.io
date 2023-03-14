// import React, { Component } from "react";
// import { Link } from "react-router-dom";
import { RiLinkedinLine } from "react-icons/ri";
import { FiGithub } from "react-icons/fi";
import { BsEnvelope } from "react-icons/bs";

function Connect() {
  return (
    <section id="connect">
      <div className="outer-container">
        <div className="inner-container connect">
          <h2>Let's Connect</h2>
          <div className="contact-info">
            <a
              target="_blank"
              href="https://www.linkedin.com/in/daniellemedeiros/"
            >
              <RiLinkedinLine />
            </a>
            <a target="_blank" href="https://github.com/DLMedeiro">
              <FiGithub />
            </a>
            <a id="email-btn" href="mailto:dlmedeiro@gmail.com" target="_blank">
              <BsEnvelope />
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Connect;
