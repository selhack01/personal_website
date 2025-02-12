import { createUseStyles } from 'react-jss';

const useStyles = createUseStyles({
  container: {
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    height: '100vh',
    position: 'relative',
    zIndex:2,
    width:'100%'
  },
  animationText: {
    fontSize:70,
    paddingInlineEnd:20,
    fontFamily:'Roboto , sans-serif',
    fontWeight:600,
    display: 'inline-block',
    whiteSpace: 'nowrap',
    color:'white',
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
