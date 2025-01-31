import React from 'react';
import useStyles from './stylesheet';

const TextBox = ({placeholder ,type}) => {
  const classes = useStyles();

  return (
    <div className={classes.container}>
        <input type={type} className={classes.input} placeholder={placeholder}/>
    </div>
  );
};

export default TextBox;
