import useStyles from './stylesheet';
import React from 'react';

const Section = ({title, children ,border,background}) => {
  const classes = useStyles();

  return <div className={classes.container}>
    <div className={classes.header}>
      <h2 className={classes.headerInfo}>{title}</h2>
    </div>
    <div
    className={classes.children}
    style={{
      border: border ? 'solid 1px rgba(255, 255, 255, 0.1)' : 'none',
      backgroundColor: background ? '#0f0f0f' : 'transparent',
    }}
    >
      {children}
    </div>
  </div>
};

export default Section;
