import "bootstrap/dist/css/bootstrap.min.css";
// import "./styles/styles.css";
import React from "react";
import Navbar from "./components/navbar";
import Home from "./components/home";
import About from "./components/aboutme";
import Projects from "./components/projects";
import Connect from "./components/connect";
import Footer from "./components/footer";
import "./styles/connect.css";
// import { useSelector } from "react-redux";
// import { Route, Routes } from "react-router-dom";

function App() {
  return (
    <div className="App">
      <Navbar />
      <Home />
      <About />
      <Projects />
      <Connect />
      <Footer />
    </div>
  );
}

export default App;
