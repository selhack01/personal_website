import { createUseStyles } from 'react-jss';

const useStyles = createUseStyles({
  container: {
    display:'flex',
    padding:'50px',
    justifyContent:'space-between',
    position:'fixed',
    top:0,
    right:0,
    left:0,
    zIndex:3
  },
  navigationButtons:{
    display: 'flex',
    listStyle: 'none',
  },
});

export default useStyles;
