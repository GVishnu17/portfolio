import React from 'react';
import './Footer.css';

export default function Footer() {
  return (
    <footer className="footer">
      <div className="container footer__inner">
        <span>© {new Date().getFullYear()} Gongadi Vishnu Vardhan</span>
        <span className="footer__mono">built with React</span>
      </div>
    </footer>
  );
}
