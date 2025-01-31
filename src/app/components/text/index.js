import React from 'react';
import useStyles from './stylesheet';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCheck } from '@fortawesome/free-solid-svg-icons';


const CheckText = ({children}) => {
  const classes = useStyles();

  return (
    <div className={classes.container}>
     <FontAwesomeIcon icon={faCheck} size='xl' color='#4affa4'/>
     <div className={classes.text}>
        {children}
     </div>
    </div>
  );
};

export default CheckText;
