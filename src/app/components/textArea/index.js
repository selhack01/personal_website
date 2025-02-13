import useStyles from './stylesheet';
import React from 'react';

const TextArea = ({ placeholder ,type,id,name}) => {
  const classes = useStyles();

  return (
    <div className={classes.container}>
        <textarea 
        className={classes.input}
        placeholder={placeholder}
        type={type}
        name={name}
        id={id}
        />
    </div>
  );
};

export default TextArea;
