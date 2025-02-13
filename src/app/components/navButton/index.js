import useStyles from './stylesheet';
import React from 'react';

const NavButton = ({ title, secondary, tertiary, onClick, isActive }) => {
  const classes = useStyles();

  return <button className={`
  ${classes.container} 
  ${classes.containerHover}
  `}
  onClick={onClick}>
    <span className={classes.text} style={{ color: isActive ? 'white' : '#8a8a8a' }}>
      {title}
      {tertiary ? <span style={{ color: 'white' }}>{tertiary}</span> : null}
    </span>
    <span className={classes.textHover}>
      {secondary ? secondary : title}
    </span>
  </button>
}

export default NavButton;
