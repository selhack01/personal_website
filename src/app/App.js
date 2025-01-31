import React from 'react';
import useStyles from './stylesheet';
import { Navbar } from './components';
import Home from './pages/homePage';
import Resume from './pages/resumePage';
import Contact from './pages/contactPage';

function App() {
  const classes = useStyles();

  return <div className={classes.container}>
    <Navbar/>
    <Home/>
    <Resume/>
    <Contact/>
    </div>
}

export default App;
