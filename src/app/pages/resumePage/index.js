import React from 'react';
import useStyles from './stylesheet';
import { AboutMe } from '../../components';


const Resume = () => {
  const classes = useStyles();

  return <div className={classes.container}>
    <AboutMe/>
    </div>
}

export default Resume;
