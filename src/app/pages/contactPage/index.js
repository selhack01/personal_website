import { faCode , faEnvelope, faPhone, faUserTie } from '@fortawesome/free-solid-svg-icons';
import { Button, Card, Section, TextArea, TextBox } from '../../components';
import { useForm } from '@formspree/react';
import useStyles from './stylesheet';
import React from 'react';

const Contact = () => {
  const classes = useStyles();
  const [state, handleSubmit] = useForm("xzzdaydp");
  if (state.succeeded) {
    alert('Mesajınız başarı ile alınmıştır.')
  }

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
      <form onSubmit={handleSubmit}>
        <TextBox 
        placeholder={'Name'}
        type={'text'}
        id='name'
        name='name'
        />
        <TextBox 
        placeholder={'Email'}
        id='email'
        type={'email'}
        name='email'
        />
        <TextArea
        placeholder={'Message'}
        type={'text'}
        id="message"
        name="message"
        />
        <Button
        type={'submit'}
        title={'Send Message'}
        style={{margin:45}}
        />
      </form>
    </Section>
  </div>
}

export default Contact;
