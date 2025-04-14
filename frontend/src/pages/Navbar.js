// import React, { useEffect, useState } from 'react';

// const Navbar = () => {
//   const [darkMode, setDarkMode] = useState(() => {
//     // Load initial state from localStorage or default to light
//     return localStorage.getItem('theme') === 'dark';
//   });

//   useEffect(() => {
//     const root = document.documentElement;
//     if (darkMode) {
//       root.setAttribute('data-theme', 'dark');
//       localStorage.setItem('theme', 'dark');
//     } else {
//       root.setAttribute('data-theme', 'light');
//       localStorage.setItem('theme', 'light');
//     }
//   }, [darkMode]);

//   const toggleDarkMode = () => {
//     setDarkMode(!darkMode);
//   };

//   return (
//     <nav className="bg-gray-800 text-white px-6 py-4 flex justify-center items-center space-x-6">
//       <ul className="flex space-x-6">
//         <li><a href="#hero" className="hover:text-indigo-300">Home</a></li>
//         <li><a href="#about" className="hover:text-indigo-300">About</a></li>
//         <li><a href="#projects" className="hover:text-indigo-300">Projects</a></li>
//         <li><a href="#contact" className="hover:text-indigo-300">Contact</a></li>
//         <li><a href="#resume" className="hover:text-indigo-300">Resume</a></li>
//       </ul>
      
//       {/* 🌙 Dark Mode Toggle Button */}
//       <button
//         onClick={toggleDarkMode}
//         className="ml-4 text-xl hover:text-indigo-400 transition duration-200"
//         title="Toggle Dark Mode"
//       >
//         {darkMode ? '🌞' : '🌙'}
//       </button>
//     </nav>
//   );
// };

// export default Navbar;
