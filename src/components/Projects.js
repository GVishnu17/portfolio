import React from 'react';
import useScrollReveal from '../hooks/useScrollReveal';
import './Projects.css';

const PROJECTS = [
  {
    name: 'ShopEase',
    tag: 'React E-Commerce Platform',
    description:
      'A responsive e-commerce web app with product browsing, category filtering, and cart management using Context API and localStorage persistence. Deployed live with continuous deployment from GitHub.',
    stack: ['React', 'React Router', 'Context API', 'Vercel'],
    demo: 'https://shopease-blush.vercel.app',
    code: 'https://github.com/GVishnu17/shopease',
  },
  {
    name: 'Sign Language Recognition',
    tag: 'CNN vs Vision Transformer',
    description:
      'A deep learning project comparing a CNN baseline against a fine-tuned Vision Transformer (ViT) for classifying ASL hand gestures from images, including full data pipeline and model evaluation.',
    stack: ['PyTorch', 'timm', 'OpenCV', 'Pandas'],
    demo: null,
    code: 'https://github.com/GVishnu17/sign-language-recognition',
  },
];

export default function Projects() {
  const ref = useScrollReveal();

  return (
    <section id="projects">
      <div className="container">
        <div ref={ref} className="reveal">
          <span className="eyebrow">03 / Projects</span>
          <h2 className="section-title">Things I've built</h2>
          <div className="projects__grid">
            {PROJECTS.map((project) => (
              <article key={project.name} className="project-card">
                <div>
                  <span className="project-card__tag">{project.tag}</span>
                  <h3 className="project-card__name">{project.name}</h3>
                  <p className="project-card__desc">{project.description}</p>
                  <div className="project-card__stack">
                    {project.stack.map((s) => (
                      <span key={s} className="tag">{s}</span>
                    ))}
                  </div>
                </div>
                <div className="project-card__links">
                  {project.demo && (
                    <a href={project.demo} target="_blank" rel="noreferrer" className="btn btn--primary btn--sm">
                      Live Demo
                    </a>
                  )}
                  <a href={project.code} target="_blank" rel="noreferrer" className="btn btn--ghost btn--sm">
                    View Code
                  </a>
                </div>
              </article>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
