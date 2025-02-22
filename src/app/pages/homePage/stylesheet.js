import { createUseStyles } from 'react-jss';


const useStyles = createUseStyles({
  container: {
    backgroundColor:'#141414',
    justifyContent: 'center',
    flexDirection:'column',
    position: 'relative',
    alignItems: 'start',
    display: 'flex',
    height: '100vh',
    zIndex:1,
    },
    img: {
      position: 'absolute',
      objectFit: 'cover',
      padding: '0 20%',
      height: '100%',
      zIndex: 1,
      left: 0,
      top: 0,
      '@media (max-width: 1400px)': {
        objectFit: 'contain',
        height: '100vh',
        width: '100vw',
        padding: 0,
      },
    },
  homeFooter:{
    fontFamily:'Roboto, sans-serif',
    flexDirection:'column',
    padding:'0 10% 40px',
    fontWeight:'3 00',
    display:'flex',
    color:'white',
    fontSize:20,
    zIndex:2,
    '@media (max-width: 1400px)': {
      padding: '0 50px  40px',
      fontSize:16
    },
    '@media (max-width: 991px)': {
      padding: '0 50px  40px',
      fontSize:14
    },
  },
  row:{
    display:'flex',
    padding:5,
    '@media (max-width: 991px)': {
      flexDirection:'column',
    },
  },
  green:{
    color:'#4affa4',
    paddingLeft:7
  }
});

export default useStyles;
