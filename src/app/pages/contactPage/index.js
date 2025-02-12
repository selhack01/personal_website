import React from 'react';
import useStyles from './stylesheet';
import { Button, Card, Section, TextArea, TextBox } from '../../components';
import { faCode , faEnvelope, faPhone, faUserTie } from '@fortawesome/free-solid-svg-icons';

const Contact = () => {
  const classes = useStyles();

  return <div className={classes.container} id="contact">
        <Section
        title={'Contact'}
        >
            <div className={classes.Cards}>
                <Card
                title={'Phone'}
                description={'+90 0551 137 8155'}
                icon={faPhone}
                />
                <Card
                title={'Email'}
                description={'Selhack.businnes@gmail.com    '}
                icon={faEnvelope}
                />
            </div>
            <div className={classes.Cards}>
                <Card
                title={'Address'}
                description={' 42010 Hadimi Neighborhood Meram/Konya Turkey'}
                icon={faCode}
                />
                <Card
                title={'Freelance Available'}
                description={'I am available for Freelance hire.'}
                icon={faUserTie}
                />
            </div>
        </Section>
        <Section
        title={'Here Me'}
        border={true}
        background={true}
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
