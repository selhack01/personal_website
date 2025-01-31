import React from 'react';
import useStyles from './stylesheet';
import { Button, Card, Section, TextArea, TextBox } from '../../components';
import { faCode , faCoffee } from '@fortawesome/free-solid-svg-icons';


const Contact = () => {
  const classes = useStyles();

  return <div className={classes.container}>
        <Section
        title={'Contact'}
        >
            <div className={classes.Cards}>
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
            <div className={classes.Cards}>
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
        <Section
        title={'Here Me'}
        border={true}
        >
            <TextBox 
            placeholder={'Name'}
            type={'text'}
            />
            <TextBox 
            placeholder={'Email'}
            type={'text'}
            />
            <TextArea
            placeholder={'Message'}
            type={'text'}
            />
            <Button
            title={'Send Message'}
            style={{margin:45}}
            />
        </Section>
    </div>
}

export default Contact;
