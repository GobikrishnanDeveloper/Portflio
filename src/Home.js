import React from "react";
import img from "./img.png";
import "./Home.css";

function Home() {
  return (
    <section id="home" className="home">
      <div className="home-text">
        <p className="intro">Hello, my name is</p>
        <h1 className="name">Gobikrishnan</h1>
        <h2 className="role">And I'm a <span>Full Stack Developer</span></h2>
        <p className="desc">
          I love creating modern and responsive web applications.
          Every project is an opportunity to learn, build, and grow.
        </p>

        <div className="buttons">
          <a href="#contact" className="btn btn-gradient">
            🚀 Hire Me
          </a>
          <a href="#projects" className="btn btn-outline">
            📄 Download CV
          </a>
        </div>
      </div>

      <div className="home-img">
        <img src={img} alt="profile" />
      </div>
    </section>
  );
}

export default Home;
