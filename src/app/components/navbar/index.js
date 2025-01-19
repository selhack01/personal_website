import React from 'react';
import useStyles from './stylesheet';
import NavButton from '../navButton';

function Navbar() {
  const classes = useStyles();

  return <div className={classes.container}>
    <ul className={classes.navigationButtons}>
        <li><NavButton title='Mehmet Ali ' secondary='Download CV' tertiary='Selek'/></li>
    </ul>
    <ul className={classes.navigationButtons}>
        <li className={classes.text}>                
            <NavButton title='Home'/>
        </li>
        <li className={classes.text}>                
        <NavButton title='Resume'/>
        </li>        
        <li className={classes.text}>                
        <NavButton title='Works'/>
        </li>
        <li className={classes.text}>                
        <NavButton title='Contact'/>
        </li>
    </ul>
    </div>
}

export default Navbar;
