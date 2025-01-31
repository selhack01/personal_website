import React from 'react';
import useStyles from './stylesheet';

const TextBox = ({children , placeholder ,type}) => {
  const classes = useStyles();

  return (
    <div className={classes.container}>
        <input type={type} className={classes.input} placeholder={placeholder}/>
    </div>
  );
};

export default TextBox;
