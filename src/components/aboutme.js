// import React, { Component } from "react";
// import { Link } from "react-router-dom";

// import { Card, CardBody } from "reactstrap";

import resume from "../images/DanielleArandaResume2022.pdf";

function About() {
  return (
    <section id="about-me">
      <div class="outer-container">
        <div class="inner-container about-me">
          <h2>About Me</h2>
          <p>
            Hi my name is Danielle and I am a Certified Software Engineer with a
            background in Industrial Engineering.
          </p>

          <p>
            Helping others has always been a core value, and with this
            transition into software development I am excited for the
            opportunity to break into new industries and take part in projects
            that have the potential to impact future generations.
          </p>

          <p>
            I’ve spent seven years in the tech industry focusing primarily on
            manufacturing processes and have continually found myself
            gravitating towards software development. I have always looked up to
            the subject matter experts I worked with and was amazed by the
            knowledge they possessed. In my last role, I had the opportunity to
            partner with one of those experts and found a new sense of
            excitement while taking part in the software development process. I
            enjoyed diving into the logic and the process of translating our
            business needs into code. For the first time, I left this project
            wanting to learn more, and knowing this is where I wanted to take my
            career.
          </p>
          <a className="resume" href={resume} target="_blank">
            PDF Resume
          </a>
        </div>
      </div>
    </section>
  );
}

export default About;
