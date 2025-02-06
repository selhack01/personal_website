import React, { useState, useEffect } from 'react';
import useStyles from './stylesheet';
import { Link } from 'react-scroll';
import NavButton from '../navButton';

function Navbar() {
  const classes = useStyles();
  const [isTransparent, setIsTransparent] = useState(true);

  useEffect(() => {
    const handleScroll = () => {
      const homeSection = document.getElementById('home');
      if (homeSection) {
        const homeSectionHeight = homeSection.offsetHeight;
        if (window.scrollY > homeSectionHeight) {
          setIsTransparent(false); // Home bölümünden çıkınca arka planı siyah yap
        } else {
          setIsTransparent(true); // Home bölümündeyken arka planı şeffaf yap
        }
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
        transition: 'background-color 0.3s ease',
      }}
    >
      <ul className={classes.navigationButtons}>
        <li>
          <NavButton title='Mehmet Ali ' secondary='Download CV' tertiary='Selek' />
        </li>
      </ul>
      <ul className={classes.navigationButtons}>
        <li className={classes.text}>
          <Link to="home" smooth={true} duration={500}>
            <NavButton title='Home' />
          </Link>
        </li>
        <li className={classes.text}>
          <Link to="resume" smooth={true} duration={500}>
            <NavButton title='Resume' />
          </Link>
        </li>
        <li className={classes.text}>
          <Link to="works" smooth={true} duration={500}>
            <NavButton title='Works' />
          </Link>
        </li>
        <li className={classes.text}>
          <Link to="contact" smooth={true} duration={500}>
            <NavButton title='Contact' />
          </Link>
        </li>
      </ul>
    </div>
  );
}

export default Navbar;