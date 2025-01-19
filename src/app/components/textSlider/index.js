import React from 'react';
import { TypeAnimation } from 'react-type-animation';
import useStyles from './stylesheet';

const TextSlider = () => {
  const classes = useStyles();

  return (
    <div className={classes.container}>
      <div className={classes.typer}>
        <TypeAnimation
          sequence={[
            500, 
            `I am a `,
            3400,
            '',
            500,

            500,
            `I develop intuitive `,
            3200,
            '',
            500,

            500,
            `I create immersive `,
            3500,
            '',
            500,

            500,
            `I turn ideas into `,
            2500,
            '',
            500,

            500,
            `I create designs `,
            3300,
            '',
            500,
          ]}
          wrapper="span"
          cursor={false}
          repeat={Infinity}
          speed={50}
          className={classes.animationText}
        />
        <TypeAnimation
          sequence={[
            850,
            `web developer.`,
            2000,
            '',
            850,

            1500,
            `mobile apps.`,
            2000,
            '',
            1500,

            1450,
            `3D experiences.`,
            2000,
            '',
            1450,

            1400,
            `code.`,
            2000,
            '',
            1400,

            1350,
            `that inspire.`,
            2000,
            '',
            1350,
          ]}
          wrapper="span"
          cursor={false}
          repeat={Infinity}
          speed={50}
          className={classes.animationText2}
        />
      </div>
    </div>
  );
};

export default TextSlider;
