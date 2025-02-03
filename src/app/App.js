import React from 'react';
import useStyles from './stylesheet';
import { Navbar } from './components';
import {Home , Resume, Contact, Works} from './pages/index';


function App() {
  const classes = useStyles();

  return <div className={classes.container}>
    <Navbar/>
    <Home/>
    <Resume/>
    <Works/>
    <Contact/>
    </div>
}

export default App;
