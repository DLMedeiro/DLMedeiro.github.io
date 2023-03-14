// import React, { Component } from "react";
// import { Link } from "react-router-dom";

// import { Card, CardBody } from "reactstrap";

function Projects() {
  return (
    <section id="projects">
      <div className="outer-container light">
        <div className="inner-container">
          <h2>Projects</h2>
          <div className="flex-items">
            <div className="project-container">
              <a
                href="https://warcardgame-frontend.onrender.com/"
                target="_blank"
              >
                <span className="project-name war">War Card Game</span>
                <span className="project-details">
                  <p>
                    Full Stack application mimicking the classNameic card game
                    “War”. Backend API built with Node and Express. Dynamic
                    Frontend built with React and Redux.
                  </p>
                </span>
              </a>
            </div>
            <div className="project-container">
              <a href="https://lonely-hill.surge.sh/" target="_blank">
                <span className="project-name jobFinder">Job Finder</span>
                <span className="project-details">
                  <p>
                    Full Stack application for Job seekers.Backend API built
                    with Node, Express, and PostgreSQL. Dynamic Frontend build
                    with React
                  </p>
                </span>
              </a>
            </div>
            <div className="project-container">
              <a
                href="https://dlmedeiro.github.io/Deck-of-Cards/"
                target="_blank"
              >
                <span className="project-name drawCards">Card Draw</span>
                <span className="project-details">
                  <p>
                    Utilizes the Deck of Cards API for the creation of a full
                    deck of cards. After a new deck is pulled, cards are
                    individually drawn each second until paused or the deck is
                    complete.
                  </p>
                  <p>Technologies Used: React, JavaScript, CSS, HTML</p>
                </span>
              </a>
            </div>
            <div className="project-container">
              <a href="https://dlmedeiro.github.io/Lights-Out/" target="_blank">
                <span className="project-name lightsOut">Lights Out</span>
                <span className="project-details">
                  <p>
                    Lights Out is a logic/puzzle game, played on a gird of
                    individual lights, which can either be lit or unlit. The
                    puzzle is won when when all of the lights are turned off.
                  </p>
                  <p>Technologies Used: React, JavaScript, CSS, HTML</p>
                </span>
              </a>
            </div>
            <div className="project-container">
              <a
                href="https://dlmedeiro.github.io/Magic-Eight-Ball/"
                target="_blank"
              >
                <span className="project-name magicEight">
                  Magic Eight Ball
                </span>
                <span className="project-details">
                  <p>Simulation of the classNameic Magic Eight Ball.</p>
                  <p>Technologies Used: React, JavaScript, CSS, HTML</p>
                </span>
              </a>
            </div>
            <div className="project-container">
              <a href="https://check-the-pantry.herokuapp.com/" target="_blank">
                <span className="project-name pantry">Check the Pantry</span>
                <span className="project-details">
                  <p>Search and save recipes based on a chosen ingredient.</p>
                  <p>
                    Technologies Used: Python, Flask, Jinja, SLQAlchemy,
                    WTForms, API integration, CSS, HTML
                  </p>
                </span>
              </a>
            </div>

            <div className="project-container">
              <a
                href="https://dlmedeiro.github.io/Springboard-ToDoApp/"
                target="_blank"
              >
                <span className="project-name toDo">To-Do Checklist</span>
                <span className="project-details">
                  <p>
                    This application focuses on DOM manipulation and the
                    utilization of local storage to track and save user "todos"
                  </p>
                  <p>Technologies Used: JavaScript, CSS, HTML</p>
                </span>
              </a>
            </div>
            <div className="project-container">
              <a
                href="https://dlmedeiro.github.io/Connect4-OO/"
                target="_blank"
              >
                <span className="project-name connectFour">Connect Four</span>
                <span className="project-details">
                  <p>
                    Two players alternate turns dropping a tile down a column
                    until a player gets four-in-a-row (horiz, vert, or diag) or
                    until board fills resulting in a tie.
                  </p>
                  <p>Technologies Used: JavaScript, CSS, HTML.</p>
                  <p>Focus: Object Oriented Programming</p>
                </span>
              </a>
            </div>
            <div className="project-container">
              <a
                href="https://dlmedeiro.github.io/Springboard-MemoryGame/"
                target="_blank"
              >
                <span className="project-name memory">Memory Game</span>
                <span className="project-details">
                  <p>
                    Players are shown a collection of cards, face down, and can
                    click on two cards at a time to reveal what’s underneath.
                  </p>
                  <p>The goal of the game is to match up all the pairs.</p>
                  <p>Technologies Used: JavaScript, CSS, HTML.</p>
                </span>
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Projects;
