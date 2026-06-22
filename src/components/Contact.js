import React from 'react';
import useScrollReveal from '../hooks/useScrollReveal';
import './Contact.css';

export default function Contact() {
  const ref = useScrollReveal();

  return (
    <section id="contact">
      <div className="container">
        <div ref={ref} className="reveal contact">
          <span className="eyebrow">05 / Contact</span>
          <h2 className="section-title">Let's work together</h2>
          <p className="contact__text">
            I'm currently looking for entry-level front-end developer opportunities.
            Feel free to reach out — I'd love to hear from you.
          </p>
          <div className="contact__links">
            <a href="mailto:vishnugongadi02@gmail.com" className="btn btn--primary">
              vishnugongadi02@gmail.com
            </a>
            <a href="https://github.com/GVishnu17" target="_blank" rel="noreferrer" className="btn btn--ghost">
              GitHub
            </a>
            <a href="https://www.linkedin.com/in/gongadi-vishnuvardhan-3aa8a7208" target="_blank" rel="noreferrer" className="btn btn--ghost">
              LinkedIn
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
