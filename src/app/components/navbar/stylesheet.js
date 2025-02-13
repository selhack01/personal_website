import { createUseStyles } from 'react-jss';

const useStyles = createUseStyles({
  container: {
    justifyContent: 'space-between',
    alignItems: 'center',
    padding: '30px 50px',
    position: 'fixed',
    display: 'flex',
    zIndex: 3,
    right: 0,
    left: 0,
    top: 0,
    '@media (max-width: 991px)': {
      padding:'30px 25px',
    },
  },
  navigationButtons: {
    listStyle: 'none',
    display: 'flex',
    padding: 0,
    margin: 0,
  },
  navMenu: {
    alignItems: 'center',
    listStyle: 'none',
    display: 'flex',
    padding: 0,
    margin: 0,
    '@media (max-width: 1400px)': {
      flexDirection: 'column',
      position: 'absolute',
      padding: '10px 0',
      display: 'none',
      width: '100%',
      top: '100%',
      right: 0,
      left:0,
      backgroundColor: (props) => 
        props.menuOpen && props.activeSection === 'home' ? 'transparent' : '#0f0f0f',
        textAlign: 'right',
      '&.open': {
        flexDirection: 'column',
        alignItems: 'flex-end',
        display: 'flex',
      },
    },
  },
  menuIcon: {
    cursor: 'pointer',
    color: '#8a8a8a',
    fontSize: '24px',
    display: 'none',
    '@media (max-width: 1400px)': {
      display: 'flex',
    },
  },
  text: {
    transition: 'color 0.7s cubic-bezier(.165,.85,.45,1), transform 0.7s cubic-bezier(.165,.85,.45,1)',
    fontFamily: 'Roboto, sans-serif',
    transform: 'translateY(0)',
    position: 'relative',
    fontSize: '16px',
    color: '#8a8a8a',
    margin: '0 10px',
    fontWeight: 600,
  },
});

export default useStyles;