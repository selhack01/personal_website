import { createUseStyles } from 'react-jss';


const useStyles = createUseStyles({
  container: {
    width: '100%',
    height: '100vh',
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'start',
    position: 'relative',
    zIndex:2,
    backgroundColor:'#141414',
    flexDirection:'column'
    },
  img:{
    position: 'absolute',
    top: 0,
    left: 0,
    height: '100%',
    objectFit: 'cover',
    zIndex: 1,
    paddingRight:'20%',
    paddingLeft:'20%',
  },
  homeFooter:{
    paddingRight:'20%',
    paddingLeft:'25%',
    display:'flex',
    zIndex:2,
    fontSize:'20px',
    fontFamily:'Roboto, sans-serif',
    color:'white',
    flexDirection:'column',
    paddingBottom:40
  },
  row:{
    padding:5,
    display:'flex'
  },
  green:{
    color:'#4affa4',
    paddingLeft:7
  }
});

export default useStyles;
