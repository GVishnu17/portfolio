import React from 'react';
import useScrollReveal from '../hooks/useScrollReveal';
import './Education.css';

const TIMELINE = [
  {
    year: '2024',
    title: 'B.E. in Computer Science and Engineering',
    org: 'SVCE, Tirupati',
    detail: 'CGPA: 7.23',
  },
  {
    year: '2022',
    title: 'Industrial Program on Data Science',
    org: 'Personifwy',
    detail: 'Projects: Hierarchical Clustering, Linear Discriminant Analysis',
  },
  {
    year: '2019',
    title: 'Board of Intermediate Education',
    org: 'Andhra Pradesh',
    detail: 'Percentage: 9.0',
  },
];

export default function Education() {
  const ref = useScrollReveal();

  return (
    <section id="education">
      <div className="container">
        <div ref={ref} className="reveal">
          <span className="eyebrow">04 / Education</span>
          <h2 className="section-title">Background</h2>
          <div className="timeline">
            {TIMELINE.map((item) => (
              <div key={item.title} className="timeline__item">
                <div className="timeline__year">{item.year}</div>
                <div className="timeline__content">
                  <h3 className="timeline__title">{item.title}</h3>
                  <p className="timeline__org">{item.org}</p>
                  <p className="timeline__detail">{item.detail}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
