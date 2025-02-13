import { createUseStyles } from 'react-jss';

const useStyles = createUseStyles({
  container: {
    backgroundColor: 'transparent',
    justifyContent: 'center',
    alignItems: 'center',
    position: 'relative',
    overflow: 'hidden',
    cursor: 'pointer',
    display: 'flex',
    border: 'none',
    height: 20,
    width:150,
  },
  text: {
    transition: 'color 0.7s cubic-bezier(.165,.85,.45,1), transform 0.7s cubic-bezier(.165,.85,.45,1)', 
    fontFamily: 'Roboto, sans-serif',
    transform: 'translateY(0)', 
    position: 'absolute',
    color: '#8a8a8a', 
    fontSize: '16px',
    fontWeight:600,
  },
  textHover: {
    transition: 'color 0.7s cubic-bezier(.165,.85,.45,1), transform 0.7s cubic-bezier(.165,.85,.45,1)', // Yumuşak geçiş
    fontFamily: 'Roboto, sans-serif',
    transform: 'translateY(100%)', 
    position: 'absolute',
    fontSize: '16px',
    fontWeight:600,
    color: 'white', 
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
