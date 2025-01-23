import React from 'react';
import useStyles from './stylesheet';

const Section = ({title, children}) => {
  const classes = useStyles();

  return <div className={classes.container}>
      <div className={classes.header}>
          <h2 className={classes.headerInfo}>{title}</h2>
      </div>
      <div style={{border:'solid 1px rgba(255, 255, 255, 0.1)'}}>
      {children}
      </div>
  </div>
};

export default Section;
