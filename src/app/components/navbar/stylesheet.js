import { createUseStyles } from 'react-jss';

const useStyles = createUseStyles({
  container: {
    display: 'flex',
    padding: '30px 50px',
    justifyContent: 'space-between',
    alignItems: 'center',
    position: 'fixed',
    top: 0,
    right: 0,
    left: 0,
    zIndex: 3,
  },
  navigationButtons: {
    display: 'flex',
    listStyle: 'none',
    margin: 0,
    padding: 0,
  },
  navMenu: {
    display: 'flex',
    listStyle: 'none',
    margin: 0,
    padding: 0,
    alignItems: 'center',
    '@media (max-width: 1400px)': {
      display: 'none',
      flexDirection: 'column',
      position: 'absolute',
      top: '100%',
      right: 0,
      backgroundColor: '#0f0f0f',
      width: '100%',
      padding: '10px 0',
      '&.open': {
        display: 'block',
      },
    },
  },
  menuIcon: {
    display: 'none',
    cursor: 'pointer',
    fontSize: '24px',
    color: '#8a8a8a',
    '@media (max-width: 1400px)': {
      display: 'flex',
    },
  },
  text: {
    position: 'relative',
    fontSize: '16px',
    fontWeight: 600,
    fontFamily: 'Roboto, sans-serif',
    color: '#8a8a8a',
    transition: 'color 0.7s cubic-bezier(.165,.85,.45,1), transform 0.7s cubic-bezier(.165,.85,.45,1)',
    transform: 'translateY(0)',
    margin: '0 10px',
  },
});

export default useStyles;