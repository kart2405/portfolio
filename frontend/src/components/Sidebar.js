import React, { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import './Sidebar.css';

const Sidebar = () => {
  const location = useLocation();
  const [darkMode, setDarkMode] = useState(() =>
    localStorage.getItem('theme') === 'dark'
  );
  const [isOpen, setIsOpen] = useState(false);
  const [isCollapsed, setIsCollapsed] = useState(false);

  useEffect(() => {
    const root = document.documentElement;
    root.setAttribute('data-theme', darkMode ? 'dark' : 'light');
    localStorage.setItem('theme', darkMode ? 'dark' : 'light');
  }, [darkMode]);

  const toggleSidebar = () => setIsOpen(!isOpen);
  const toggleDarkMode = () => setDarkMode(!darkMode);
  const toggleCollapse = () => setIsCollapsed(!isCollapsed);

  return (
    <>
      <button className="menu-toggle" onClick={toggleSidebar}>☰</button>

      <aside className={`sidebar ${isOpen ? 'open' : ''} ${isCollapsed ? 'collapsed' : ''}`}>
        <div className="top-section">
          <h2 className="logo">{!isCollapsed && 'Karthik'}</h2>
          <button className="collapse-btn" onClick={toggleCollapse}>
            {isCollapsed ? '▶' : '◀'}
          </button>
        </div>

        <nav className="nav-links">
          <CustomLink to="/" label="Home" icon="🏠" currentPath={location.pathname} collapsed={isCollapsed} />
          <CustomLink to="/about" label="About" icon="🙋‍♂️" currentPath={location.pathname} collapsed={isCollapsed} />
          <CustomLink to="/projects" label="Projects" icon="📁" currentPath={location.pathname} collapsed={isCollapsed} />
          <CustomLink to="/resume" label="Resume" icon="📄" currentPath={location.pathname} collapsed={isCollapsed} />
          <CustomLink to="/contact" label="Contact" icon="✉️" currentPath={location.pathname} collapsed={isCollapsed} />
        </nav>

        <button className="dark-toggle" onClick={toggleDarkMode}>
          {darkMode ? '🌞' : '🌙'}
        </button>
      </aside>

      {isOpen && <div className="backdrop" onClick={toggleSidebar}></div>}
    </>
  );
};

const CustomLink = ({ to, label, icon, currentPath, collapsed }) => {
  const isActive = currentPath === to;
  return (
    <Link
      to={to}
      className={`nav-link ${isActive ? 'active' : ''}`}
      title={collapsed ? label : ''}
    >
      <span className="icon">{icon}</span>
      {!collapsed && <span className="text">{label}</span>}
    </Link>
  );
};

export default Sidebar;
