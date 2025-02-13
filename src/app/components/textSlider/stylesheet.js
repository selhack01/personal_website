import { createUseStyles } from 'react-jss';

const useStyles = createUseStyles({
  container: {
    justifyContent: 'center',
    position: 'relative',
    alignItems: 'center',
    height: '100vh',
    display: 'flex',
    width:'100%',
    zIndex:2,
  },
  animationText: {
    fontFamily:'Roboto , sans-serif',
    display: 'inline-block',
    whiteSpace: 'nowrap',
    paddingInlineEnd:20,
    fontWeight:600,
    color:'white',
    fontSize:70,
    '@media (max-width: 1400px)': {
      fontSize:48
    },
    '@media (max-width: 1200px)': {
      fontSize:35
    },
    '@media (max-width: 991px)': {
      fontSize:28
    },
  },
   green: {
    color:'#4affa4'
  },
  typer:{
    padding:'0 10%'
  }
});


export default useStyles;
