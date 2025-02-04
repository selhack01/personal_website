import React from 'react';
import useStyles from './stylesheet';
import { Button, Section, Card,CheckText } from '../../components';
import { faCode, faCube, faMobileAlt, faPalette } from '@fortawesome/free-solid-svg-icons';

const Resume = () => {
  const classes = useStyles();

  return <div className={classes.container}>
    <Section 
    title={'About'}
    border={'true'}
    >
      <div className={classes.datas}>
        <img src="https://picsum.photos/160/180" alt="" className={classes.img}/>
        <div className={classes.textArea}>
          <div className={classes.infos}>
            Hello! I’m Mehmet Ali, a web developer and junior 3D artist from Turkey. 
            I have rich experience in web development, specializing in React, React Native,
            and Node.js. I’ve also worked with technologies like RethinkDB and WordPress.
            In addition to coding, I’m passionate about UI/UX design and have hands-on experience with tools 
            like Figma and Blender. I enjoy working on innovative projects, including AR development and interactive 
            applications. Let’s connect and create something amazing together!
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
    style={{border:'none'}}
    >
      <div className={classes.servicesCards}>
        <Card
        title={'Web Development'}
        description={'Modern and mobile-ready website that will help you reach all of your marketing.'}
        icon={faCode}
        />
        <Card
        title={'Mobile Application'}
        description={'Modern and user-friendly mobile apps for seamless experiences on any device.'}
        icon={faMobileAlt}
        />
      </div>
      <div className={classes.servicesCards}>
        <Card
        title={'Graphic Design'}
        description={'Creative and eye-catching designs that make your brand stand out.'}
        icon={faPalette}
        />
        <Card
        title={'3D Design'}
        description={'High-quality and detailed 3D designs for stunning visual experiences.'}
        icon={faCube}
        />
      </div>
    </Section>
    <div className={classes.experience}>
      <Section title={'Experience'}>
        <Card
        title={'Intern'}
        description={'I interned at KOS institution for two months in 2022-2023.'}
        />
        <Card
        title={'Head of Design & 3D Artist'}
        description={'I have been the Head of Design at Nibgat Community since 2024, where I also worked as a 3D artist in the game team..'}
        />
      </Section>
      <Section title={'Education'}>
        <Card
        title={'Konya Technical University 2022-2024'}
        description={'I graduated from the Computer Programming department at Konya Technical University.'}
        />
        <Card
        title={'Çaycore-Sıfırdan Geliştirici Olmak'}
        description={"I successfully completed the 'Sıfırdan Geliştirici Olmak' training series and earned a certificate."}
        />
      </Section>
    </div>
    <Section
    title={'Knowledge'}
    border={true}
    >
      <div className={classes.li}>
        <div className={classes.list}>
          <CheckText>
            Web Development
          </CheckText>
          <CheckText>
            3D Design
          </CheckText>
          <CheckText>
          RethinkDB
          </CheckText>
          <CheckText>
            Node.js
          </CheckText>  
        </div>
        <div className={classes.list}>
          <CheckText>
            React Native
          </CheckText>
          <CheckText>
            UI/UX Design
          </CheckText>
          <CheckText>
            Blender
          </CheckText>
          <CheckText>
            Figma
          </CheckText>  
        </div>
      </div>
    </Section>
  </div>
}

export default Resume;
