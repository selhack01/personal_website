import React, { useState, useEffect } from 'react';
import { Link as ScrollLink } from 'react-scroll';
import useStyles from './stylesheet';
import NavButton from '../navButton';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBars, faTimes } from '@fortawesome/free-solid-svg-icons';

function Navbar() {
  const [activeSection, setActiveSection] = useState('home');
  const [isTransparent, setIsTransparent] = useState(true);
  const [menuOpen, setMenuOpen] = useState(false);

  const classes = useStyles({ menuOpen, activeSection });

  useEffect(() => {
    const handleScroll = () => {
      const sections = ['home', 'resume', 'works', 'contact'];
      let currentSection = 'home';
      const scrollPosition = window.scrollY;
      const homeSection = document.getElementById('home');

      sections.forEach((section) => {
        const element = document.getElementById(section);
        if (element) {
          const { top } = element.getBoundingClientRect();
          if (top <= 100) {
            currentSection = section;
          }
        }
      });
      setActiveSection(currentSection);

      if (homeSection) {
        setIsTransparent(scrollPosition < homeSection.offsetHeight);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  const toggleMenu = () => {
    setMenuOpen(!menuOpen);
  };

  return (
    <div
      className={classes.container}
      style={{
        backgroundColor: isTransparent ? 'transparent' : '#0f0f0f',
        transition: 'background-color 0.5s ease',
      }}
    >
      <ul className={`${classes.navigationButtons} ${menuOpen ? 'open' : ''}`}>
        <li>
          <NavButton 
          title='Mehmet Ali ' 
          secondary='Download CV' 
          tertiary='Selek' 
          onClick={() => {
            const link = document.createElement("a");
            link.href = "/assets/CV.pdf";
            link.download = "MehmetAliSelek_CV.pdf";
            document.body.appendChild(link);
            link.click();
            document.body.removeChild(link);
          }}/>
        </li>
      </ul>
      <ul className={`${classes.navMenu} ${menuOpen ? 'open' : ''}`}>
        {['home', 'resume', 'works', 'contact'].map((section) => (
          <li className={classes.text} key={section}>
            <ScrollLink to={section} smooth={true} duration={500} spy={true} exact={true} offset={-70} onClick={() => setMenuOpen(false)}>
              <NavButton title={section.charAt(0).toUpperCase() + section.slice(1)} isActive={activeSection === section} />
            </ScrollLink>
          </li>
        ))}
      </ul>
      <div className={classes.menuIcon} onClick={toggleMenu}>
        <FontAwesomeIcon icon={menuOpen ? faTimes : faBars} />
      </div>
    </div>
  );
}

export default Navbar;