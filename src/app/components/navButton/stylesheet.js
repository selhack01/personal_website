import { createUseStyles } from 'react-jss';

const useStyles = createUseStyles({
  container: {
    display: 'flex',
    backgroundColor: 'transparent',
    border: 'none',
    height: 20,
    width:150,
    alignItems: 'center',
    justifyContent: 'center',
    position: 'relative',
    cursor: 'pointer',
    overflow: 'hidden',
  },
  text: {
    position: 'absolute',
    fontSize: '16px',
    fontWeight:600,
    fontFamily: 'Roboto, sans-serif',
    color: '#8a8a8a', 
    transition: 'color 0.7s cubic-bezier(.165,.85,.45,1), transform 0.7s cubic-bezier(.165,.85,.45,1)', 
    transform: 'translateY(0)', 
  },
  textHover: {
    position: 'absolute',
    fontSize: '16px',
    fontWeight:600,
    fontFamily: 'Roboto, sans-serif',
    color: 'white', 
    transform: 'translateY(100%)', 
    transition: 'color 0.7s cubic-bezier(.165,.85,.45,1), transform 0.7s cubic-bezier(.165,.85,.45,1)', // Yumuşak geçiş
  },
  containerHover: {
    '&:hover $text': {
      transform: 'translateY(-100%)', 
    },
    '&:hover $textHover': {
      transform: 'translateY(0)', 
    },
  },
});

export default useStyles;
