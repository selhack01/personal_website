import React, { useState, useEffect } from 'react';
import { Link as ScrollLink } from 'react-scroll';
import useStyles from './stylesheet';
import NavButton from '../navButton';

function Navbar() {
  const classes = useStyles();
  const [activeSection, setActiveSection] = useState('home');
  const [isTransparent, setIsTransparent] = useState(true);

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

  return (
    <div
      className={classes.container}
      style={{
        backgroundColor: isTransparent ? 'transparent' : '#0f0f0f',
        transition: 'background-color 0.5s ease',
      }}
    >
      <ul className={classes.navigationButtons}>
        <li>
          <NavButton title='Mehmet Ali ' secondary='Download CV' tertiary='Selek' />
        </li>
      </ul>
      <ul className={classes.navigationButtons}>
        {['home', 'resume', 'works', 'contact'].map((section) => (
          <li className={classes.text} key={section}>
            <ScrollLink to={section} smooth={true} duration={500} spy={true} exact={true} offset={-70}>
              <NavButton title={section.charAt(0).toUpperCase() + section.slice(1)} isActive={activeSection === section} />
            </ScrollLink>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default Navbar;