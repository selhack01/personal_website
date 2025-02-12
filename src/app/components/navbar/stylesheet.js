import { createUseStyles } from 'react-jss';

const useStyles = createUseStyles({
  container: {
    display:'flex',
    padding:'30px 50px',
    justifyContent:'space-between',
    position:'fixed',
    zIndex:3,
    top:0,
    left:0,
    right:0
  },
  navigationButtons:{
    display: 'flex',
    listStyle: 'none',
  },
});

export default useStyles;
