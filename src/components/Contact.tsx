import { useState } from 'react';

const Contact = () => {
  const [submitted, setSubmitted] = useState(false);

  return (
    <section id="contact" className="section">
      <div className="container max-w-xl mx-auto">
        <h2 className="heading text-center mb-8">Get in Touch</h2>
        <div className="bg-white dark:bg-gray-900 rounded-xl shadow-lg p-8 border border-gray-100 dark:border-gray-800 flex flex-col items-center text-center">
          <p className="text-lg text-gray-700 dark:text-gray-300 mb-6">
            Want to connect? Just click below to send me an email!
          </p>
          <a
            href="mailto:konyalakarthik24@gmail.com"
            className="btn text-lg font-semibold px-8 py-4 mb-4"
          >
            Email Me
          </a>
          <div className="text-gray-500 dark:text-gray-400 text-sm">
            Or email me directly at <span className="font-mono select-all">konyalakarthik24@gmail.com</span>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact; 