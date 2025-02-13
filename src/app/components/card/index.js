import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import useStyles from './stylesheet';
import React from 'react';

const Card = ({ title, description, icon }) => {
  const classes = useStyles();

  return <div className={classes.container}>
    {{icon} ? <FontAwesomeIcon icon={icon} size='2x' color='#4affa4'/> : null}
    <div className={classes.title}>{title}</div>
    <div className={classes.description}>{description}</div>
  </div>
};

export default Card;
