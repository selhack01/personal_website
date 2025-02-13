import { createUseStyles } from 'react-jss';

const useStyles = createUseStyles({
  container: {
    padding:0,
    margin:0,
    backgroundColor:'#0f0f0f',
    position:'relative',
    width:'100%'
  },
  verticalLine:{
    position:'absolute',
    width:'60%',
    left:'20%',
    zIndex:2,
    height:'100%',
    borderRight: 'solid 2px rgba(255, 255, 255, 0.1)',
    borderLeft: 'solid 2px rgba(255, 255, 255, 0.1)',
    borderTop: 'none',
    borderBottom: 'none',
  },
  verticalLine2:{
    position:'absolute',
    width:'20%',
    left:'40%',
    zIndex:2,
    height:'100%',
    borderRight: 'solid 1px rgba(255, 255, 255, 0.1)',
    borderLeft: 'solid 1px rgba(255, 255, 255, 0.1)',
    borderTop: 'none',
    borderBottom: 'none',
    '@media (max-width: 1400px)': {
      display:'none'
    },
  }
});

export default useStyles;
