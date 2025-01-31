import React, { useState } from 'react';
import useStyles from './stylesheet';

const Button = ({title , onClick,style}) => {
  const classes = useStyles();
  const [isHovered, setIsHovered] = useState(false);

  return <button
  style={{ ...style }}
      className={`${classes.downloadButton} ${
        isHovered ? classes.downloadButtonHover : ''
      }`}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
      onClick={onClick}
    >
      {title}
    </button>
};

export default Button;
