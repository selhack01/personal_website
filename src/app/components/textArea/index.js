import React from 'react';
import useStyles from './stylesheet';

const TextArea = ({ placeholder ,type}) => {
  const classes = useStyles();

  return (
    <div className={classes.container}>
        <textarea type={type} className={classes.input} placeholder={placeholder}/>
    </div>
  );
};

export default TextArea;
