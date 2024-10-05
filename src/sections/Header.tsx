'use client'

import React, { useState, useEffect } from 'react';

export const Header = () => {
  const [activeSection, setActiveSection] = useState('home');

  const navItems = [
    { name: 'Home', href: '#home' },
    { name: 'Projects', href: '#projects' },
    { name: 'About', href: '#about' },
    { name: 'Contact', href: '#contact' }
  ];

  // Scroll to the home section on page load
  useEffect(() => {
    if (window.location.hash !== '#home') {
      window.location.hash = '#home';
    }
  }, []);

  return (
    <div className="flex justify-center items-center fixed top-3 w-full z-10">
      <nav className="flex gap-1 p-0.5 border border-white/15 rounded-full bg-white/10 backdrop-blur">
        {navItems.map((item) => (
          <a
            key={item.name}
            href={item.href}
            className={`nav-item ${
              activeSection === item.name.toLowerCase()
                ? 'bg-white text-gray-900'
                : ''
            }`}
            onClick={() => setActiveSection(item.name.toLowerCase())}
          >
            {item.name}
          </a>
        ))}
      </nav>
    </div>
  );
};
