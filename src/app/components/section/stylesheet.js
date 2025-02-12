import { createUseStyles } from 'react-jss';

const useStyles = createUseStyles({
  container: {
    justifyContent: 'center',
    flexDirection:'column',
    margin:'70px 0px 0px',
    alignItems: 'start',
    display: 'flex',
    width:'100%',
    zIndex:2,
  },
  header:{
    padding:35
  },
  headerInfo:{
    fontFamily:'Roboto , sans-serif',
    fontSize:'24px',
    fontWeight:600,
    color:'white',
  },
  children:{
    width:'100%',
  }
});


export default useStyles;
