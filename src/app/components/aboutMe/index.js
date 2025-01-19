import React from 'react';
import useStyles from './stylesheet';
import Button from '../button';

const AboutMe = () => {
  const classes = useStyles();

  return <div className={classes.container}>
      <div className={classes.header}>
          <h2 className={classes.headerInfo}>About</h2>
      </div>
      <div style={{    border:'solid 1px rgba(255, 255, 255, 0.1)'}}>
        <div className={classes.datas}>
          <img src="https://picsum.photos/160/180" alt="" className={classes.img}/>
          <div className={classes.textArea}>
            <div className={classes.infos}>
              Hello! I’m Daniel Curry. Web designer from USA, California, San Francisco. I have rich experience in web site design and building, also I am good at wordpress. I love to talk with you about our unique.
            </div>
            <div className={classes.items}>
              <div className={classes.item} >
                <p className={classes.title}>Age:</p>
                <p>22</p>
              </div>
              <div className={classes.item} >
                <p className={classes.title}> Residence:</p>
                <p>Turkey</p>
              </div>
            </div>
            <div className={classes.items}>
              <div className={classes.item} >
                <p className={classes.title}>Freelance:</p>
                <p>Available</p>
              </div>
              <div className={classes.item} >
                <p className={classes.title}>Address:</p>
                <p>Konya</p>
              </div>
            </div>
            <div className={classes.items}>
              <div className={classes.item} >
                <p className={classes.title}>Phone:</p>
                <p>+90 551 137 81 55</p>
              </div>
              <div className={classes.item} >
                <p className={classes.title}>E-mail:</p>
                <p>Selhack.businnes@gmail.com</p>
              </div>
          
            </div>
            <Button title='Download CV'/>
          </div>
        </div>
      </div>
  </div>
};

export default AboutMe;
