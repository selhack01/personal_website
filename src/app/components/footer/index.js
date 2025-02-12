import React from 'react';
import useStyles from './stylesheet';

const Footer = () => {
  const classes = useStyles();

  return <div className={classes.container}>
    <span className={classes.createdby}>
        Created By
    </span>
    <span className={classes.name}>
        Mehmet Ali Selek
    </span>
  </div>
};

export default Footer;
