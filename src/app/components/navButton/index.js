import React from 'react';
import useStyles from './stylesheet';

function NavButton({title,secondary,tertiary,onClick}) {
  const classes = useStyles();

  return <button className={`${classes.container} ${classes.containerHover}`}
    onClick={onClick}>
    <span className={classes.text}>
      {title}
      {tertiary ? <span style={{ color: 'white' }}>{tertiary}</span> : null}
    </span>
    <span className={classes.textHover}>
      {secondary ? secondary : title}
    </span>
  </button>
}

export default NavButton;
