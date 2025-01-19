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
    fontSize:'70px',
    paddingInlineEnd:20,
    fontFamily:'Roboto , sans-serif',
    fontWeight:600,
    display: 'inline-block',
    whiteSpace: 'nowrap',
    color:'white',
  },
   animationText2: {
    fontSize:'70px',
    fontFamily:'Roboto , sans-serif',
    fontWeight:600,
    display: 'inline-block',
    whiteSpace: 'nowrap',
    color:'#4affa4'
  },
  typer:{
    paddingRight:'10%',
    paddingLeft:'10%',
  }
});


export default useStyles;
