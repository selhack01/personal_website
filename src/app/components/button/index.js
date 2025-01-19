import React, { useState } from 'react';
import useStyles from './stylesheet';

const Button = ({title , onClick}) => {
  const classes = useStyles();
  const [isHovered, setIsHovered] = useState(false);

  return <button
      className={`${classes.downloadButton} ${
        isHovered ? classes.downloadButtonHover : ''
      }`}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
      onClick={{onClick}}
    >
      {title}
    </button>
};

export default Button;
