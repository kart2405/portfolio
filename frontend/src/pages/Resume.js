import React from 'react';

const Resume = () => {
  return (
    <section id="resume" data-aos="fade-up" className="py-20 px-4 bg-white dark:bg-gray-900">
      <div className="max-w-4xl mx-auto text-center">
        <h2 className="text-3xl font-bold mb-6 text-gray-800 dark:text-white">Resume</h2>

        <a
          href="/resume.pdf"
          target="_blank"
          rel="noopener noreferrer"
          className="inline-block bg-indigo-600 text-white font-semibold py-3 px-6 rounded hover:bg-indigo-500 transition"
        >
          Download Resume
        </a>

        <div className="mt-10 grid gap-8 md:grid-cols-2 text-left text-gray-700 dark:text-gray-200">
          <div>
            <h3 className="text-xl font-bold mb-2">Education</h3>
            <ul>
              <li><strong>Texas Tech University</strong> — MS in CS (2025)</li>
              <li><strong>IIIT Sri City</strong> — BTech in CS (2023)</li>
            </ul>
          </div>

          <div>
            <h3 className="text-xl font-bold mb-2">Skills</h3>
            <ul className="grid grid-cols-2 gap-2">
              <li>React</li>
              <li>Golang</li>
              <li>FastAPI</li>
              <li>PostgreSQL</li>
              <li>Docker</li>
              <li>PyTorch</li>
            </ul>
          </div>

          <div>
            <h3 className="text-xl font-bold mb-2">Tools & Platforms</h3>
            <ul>
              <li>GitHub, VS Code, Postman</li>
              <li>Heroku, Vercel, Railway</li>
              <li>Figma (basic), Trello</li>
            </ul>
          </div>

          <div>
            <h3 className="text-xl font-bold mb-2">Certifications</h3>
            <ul>
              <li>FastAPI Advanced (Udemy)</li>
              <li>DSA Mastery (Leetcode)</li>
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Resume;
