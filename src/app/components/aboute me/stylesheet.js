import { createUseStyles } from 'react-jss';

const useStyles = createUseStyles({
  container: {
    display: 'flex',
    width:'100%',
    flexDirection:'column',
    justifyContent: 'center',
    alignItems: 'start',
    height: '100vh',
    zIndex:2,
  },
  img:{
    width:200,
    height:225
  },
  header:{
    padding:35
  },
  headerInfo:{
    color:'white',
    fontFamily:'Roboto , sans-serif',
    fontSize:'24px'
  }
});


export default useStyles;
