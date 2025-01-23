import React from 'react';
import useStyles from './stylesheet';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

const Card = ({ title, description, icon }) => {
  const classes = useStyles();

  return (
    <div className={classes.container}>
      <FontAwesomeIcon icon={icon} size='2x' color='#4affa4'/>
      <div className={classes.title}>{title}</div>
      <div className={classes.description}>{description}</div>
    </div>
  );
};

export default Card;
