import { Home, Resume, Contact, Works } from './pages/index';
import { Navbar ,Footer } from './components';
import useStyles from './stylesheet';
import React from 'react';

const App = () => {
  const classes = useStyles();

  return <div className={classes.container}>
    <div className={classes.verticalLine}></div>
    <div className={classes.verticalLine2}></div>
      <Navbar />
      <Home />
      <Resume />
      <Works />
      <Contact />
      <Footer />
  </div>
}

export default App;