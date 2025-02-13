import bgImage from '../../assets/images/bg.png';
import { TextSlider } from '../../components';
import useStyles from './stylesheet';
import React from 'react';

const Home = () => {
  const classes = useStyles();

  return <div className={classes.container} id="home">
    <img src={bgImage} alt="" className={classes.img}/>
    <TextSlider className={classes.slider}/>
    <div className={classes.homeFooter}>
      <div className={classes.row}>  
        Hello, I’m
        <div className={classes.green}>
          Mehmet Ali Selek
        </div>
        <div>
          ,  Front-end Developer and
        </div>
      </div> 
      <div className={classes.row}>
        3D Artist Based in Konya.
      </div>
    </div>
  </div>
}

export default Home;
