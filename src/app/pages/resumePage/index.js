import React from 'react';
import useStyles from './stylesheet';
import AbouteMe from '../../components/aboute me';


const Resume = () => {
  const classes = useStyles();

  return <div className={classes.container}>
    <AbouteMe/>
    </div>
}

export default Resume;
