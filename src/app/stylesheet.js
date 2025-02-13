import { createUseStyles } from 'react-jss';

const useStyles = createUseStyles({
  container: {
    backgroundColor:'#0f0f0f',
    position:'relative',
    width:'100%',
    padding:0,
    margin:0,
  },
  verticalLine:{
    borderRight: 'solid 2px rgba(255, 255, 255, 0.1)',
    borderLeft: 'solid 2px rgba(255, 255, 255, 0.1)',
    borderBottom: 'none',
    position:'absolute',
    borderTop: 'none',
    height:'100%',
    width:'60%',
    left:'20%',
    zIndex:2,
  },
  verticalLine2:{
    borderRight: 'solid 1px rgba(255, 255, 255, 0.1)',
    borderLeft: 'solid 1px rgba(255, 255, 255, 0.1)',
    borderBottom: 'none',
    position:'absolute',
    borderTop: 'none',
    height:'100%',
    width:'20%',
    left:'40%',
    zIndex:2,
    '@media (max-width: 1400px)': {
      display:'none'
    },
  }
});

export default useStyles;
