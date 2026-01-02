import React, { useState, useEffect } from 'react';
import { useLocation, Link } from 'react-router-dom';

const Navbar = () => {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);
  const location = useLocation();
  const isHome = location.pathname === '/';

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { name: 'About', href: '#about' },
    { name: 'Skills', href: '#skills' },
    { name: 'Experience', href: '#experience' },
    { name: 'Projects', href: '#projects' },
    { name: 'Contact', href: '#contact' },
  ];

  const handleNavClick = () => {
    setMenuOpen(false);
  };

  return (
    <nav className={`navbar ${scrolled ? 'scrolled' : ''}`}>
      <div className="container nav-container">
        {isHome ? (
          <a href="#hero" className="logo">
            MSA<span className="text-accent">.</span>
          </a>
        ) : (
          <Link to="/" className="logo">
            MSA<span className="text-accent">.</span>
          </Link>
        )}

        <div className={`nav-links ${menuOpen ? 'active' : ''}`}>
          {navLinks.map((link) => {
            const href = isHome ? link.href : `/${link.href}`;
            // If on non-home page, use 'Link' component if it's hash link to promote SPA feel (though native hash link needs standard 'a' or careful handling). 
            // Actually, 'Link' to "/#hash" doesn't always scroll. Safe bet is standard <a href="/#hash"> if not home.
            return (
              <a
                key={link.name}
                href={href}
                className="nav-link"
                onClick={handleNavClick}
              >
                <span className="text-accent">#</span>{link.name}
              </a>
            );
          })}
          <a href="/resume.pdf" className="btn btn-sm" target="_blank" rel="noopener noreferrer">Resume</a>
        </div>

        <div className="hamburger" onClick={() => setMenuOpen(!menuOpen)}>
          <div className="line"></div>
          <div className="line"></div>
          <div className="line"></div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
