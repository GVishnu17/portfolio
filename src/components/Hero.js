import React, { useEffect, useState } from 'react';
import './Hero.css';

const COMMAND = 'whoami';
const OUTPUT = 'Gongadi Vishnu Vardhan';

export default function Hero() {
  const [typedCommand, setTypedCommand] = useState('');
  const [showOutput, setShowOutput] = useState(false);
  const [showSubline, setShowSubline] = useState(false);

  useEffect(() => {
    let i = 0;
    const typing = setInterval(() => {
      i += 1;
      setTypedCommand(COMMAND.slice(0, i));
      if (i === COMMAND.length) {
        clearInterval(typing);
        setTimeout(() => setShowOutput(true), 350);
        setTimeout(() => setShowSubline(true), 900);
      }
    }, 110);
    return () => clearInterval(typing);
  }, []);

  return (
    <section id="hero" className="hero">
      <div className="container hero__inner">
        <div className="hero__top">
          <div className="terminal">
            <div className="terminal__bar">
              <span className="terminal__dot terminal__dot--red" />
              <span className="terminal__dot terminal__dot--amber" />
              <span className="terminal__dot terminal__dot--green" />
              <span className="terminal__title">vishnu@portfolio:~</span>
            </div>
            <div className="terminal__body">
              <p className="terminal__line">
                <span className="terminal__prompt">$</span> {typedCommand}
                {!showOutput && <span className="terminal__cursor" />}
              </p>
              {showOutput && (
                <p className="terminal__output">
                  {OUTPUT}
                  {!showSubline && <span className="terminal__cursor" />}
                </p>
              )}
              {showSubline && (
                <p className="terminal__subline">
                  Front-End Developer — building clean, accessible interfaces
                  <span className="terminal__cursor" />
                </p>
              )}
            </div>
          </div>

          <div className="hero__photo">
            <img src="/profile.jpg" alt="Gongadi Vishnu Vardhan" />
          </div>
        </div>

        <div className="hero__cta">
          <a href="#projects" className="btn btn--primary">View Projects</a>
          <a href="#contact" className="btn btn--ghost">Get in Touch</a>
        </div>

        <a href="#about" className="hero__scroll" aria-label="Scroll to About section">
          <span className="hero__scroll-line" />
          <span className="hero__scroll-text">scroll</span>
        </a>
      </div>
    </section>
  );
}
