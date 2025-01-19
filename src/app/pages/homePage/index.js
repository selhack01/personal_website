import React from 'react';
import useStyles from './stylesheet';
import bgImage from '../../assets/images/bg.png';
import TextSlider from '../../components/textSlider';

const Home = () => {
  const classes = useStyles();

  return <div className={classes.container}>
      <img src={bgImage} alt="" className={classes.img}/>
      <TextSlider className={classes.slider}/>
      <div className={classes.homeFooter}>
        <div className={classes.row}>  
          Hello, I’m
           <div className={classes.green}>
            Mehmet Ali Selek
            </div>
            ,  Front-end Developer and
        </div> 
        <div className={classes.row}>
         UX/UI Designer Based in Konya. {/*burayı düzenle */}
        </div>
      </div>
    </div>
}

export default Home;
