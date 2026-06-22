import React from 'react';
import useScrollReveal from '../hooks/useScrollReveal';
import './Skills.css';

const SKILL_GROUPS = [
  {
    label: 'Web Technologies',
    items: ['HTML', 'CSS', 'JavaScript', 'Python'],
  },
  {
    label: 'Libraries & Frameworks',
    items: ['React.js', 'Bootstrap'],
  },
  {
    label: 'Databases & Tools',
    items: ['MySQL', 'Git', 'GitHub', 'VS Code'],
  },
  {
    label: 'Applied ML',
    items: ['PyTorch', 'TensorFlow', 'OpenCV'],
  },
];

export default function Skills() {
  const ref = useScrollReveal();

  return (
    <section id="skills">
      <div className="container">
        <div ref={ref} className="reveal">
          <span className="eyebrow">02 / Skills</span>
          <h2 className="section-title">What I work with</h2>
          <div className="skills__grid">
            {SKILL_GROUPS.map((group) => (
              <div key={group.label} className="skill-card">
                <h3 className="skill-card__label">{group.label}</h3>
                <div className="skill-card__tags">
                  {group.items.map((item) => (
                    <span key={item} className="tag">{item}</span>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
