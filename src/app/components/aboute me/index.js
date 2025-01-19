import React from 'react';
import useStyles from './stylesheet';

const AbouteMe = () => {
  const classes = useStyles();

  return (
    <div className={classes.container}>
        <div className={classes.header}>
            <h2 className={classes.headerInfo}>Aboute</h2>
        </div>
        <div className={classes.datas}>
          <div>
            <img src="https://picsum.photos/200/225" alt="" className={classes.img}/>
            <div className={classes.infos}>

            </div>
          </div>
          <div className={classes.footer}>
        
          </div>
        </div>
    </div>
  );
};

export default AbouteMe;
