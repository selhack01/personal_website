import useStyles from './stylesheet';
import React from 'react';

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
