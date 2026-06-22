import React from 'react';
import useScrollReveal from '../hooks/useScrollReveal';
import './About.css';

export default function About() {
  const ref = useScrollReveal();

  return (
    <section id="about">
      <div className="container">
        <div ref={ref} className="reveal">
          <span className="eyebrow">01 / About</span>
          <h2 className="section-title">A bit about me</h2>
          <div className="about__grid">
            <div className="about__photo">
              <img src="/about.jpg" alt="Gongadi Vishnu Vardhan" />
            </div>
            <p className="about__text">
              I'm an aspiring front-end developer with a strong foundation in HTML, CSS,
              JavaScript, and responsive design. I care about writing clean, efficient code
              and building interfaces that feel intuitive to use. Alongside web development,
              I've also explored applied machine learning — including a deep learning project
              on sign language recognition — which keeps me curious about how interfaces can
              be made more accessible for everyone.
            </p>
            <div className="about__facts">
              <div className="fact">
                <span className="fact__label">Based in</span>
                <span className="fact__value">Kadapa, Andhra Pradesh</span>
              </div>
              <div className="fact">
                <span className="fact__label">Focus</span>
                <span className="fact__value">React, JavaScript, UI Engineering</span>
              </div>
              <div className="fact">
                <span className="fact__label">Currently</span>
                <span className="fact__value">Seeking entry-level front-end roles</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
