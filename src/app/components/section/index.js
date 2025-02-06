import React from 'react';
import useStyles from './stylesheet';

const Section = ({title, children ,border,background}) => {
  const classes = useStyles();

  return <div className={classes.container} >
      <div className={classes.header}>
          <h2 className={classes.headerInfo}>{title}</h2>
      </div>
      <div
        style={{
          border: border ? 'solid 1px rgba(255, 255, 255, 0.1)' : 'none',
          backgroundColor: background ? '#0f0f0f' : 'transparent',
        }}
        className={classes.children}
>      {children}
      </div>
  </div>
};

export default Section;
