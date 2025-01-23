import React from 'react';
import useStyles from './stylesheet';
import { Button, Section, Card } from '../../components';
import { faCode, faCoffee,} from '@fortawesome/free-solid-svg-icons';


const Resume = () => {
  const classes = useStyles();

  return <div className={classes.container}>
    <Section title={'About'}>
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
    </Section>
    <Section
    title={'Services'}
    >
      <div className={classes.servicesCards}>
        <Card
        title={'Web Development'}
        description={'Modern and mobile-ready website that will help you reach all of your marketing.'}
        icon={faCode}
        />
        <Card
        title={'Android Application'}
        description={'Games, playing music, handle network transactions, interacting content etc.'}
        icon={faCoffee}
        />
      </div>
      <div className={classes.servicesCards}>
        <Card
        title={'Web Development'}
        description={'Modern and mobile-ready website that will help you reach all of your marketing.'}
        icon={faCode}
        />
        <Card
        title={'Android Application'}
        description={'Games, playing music, handle network transactions, interacting content etc.'}
        icon={faCoffee}
        />
      </div>
    </Section>
  </div>
}

export default Resume;
