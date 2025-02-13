import React from 'react';
import useStyles from './stylesheet';

const TextBox = ({placeholder ,type, id, name }) => {
  const classes = useStyles();

  return (
    <div className={classes.container}>
        <input 
        className={classes.input}
        placeholder={placeholder}
        type={type}
        name={name}
        id={id}
        />
    </div>
  );
};

export default TextBox;
