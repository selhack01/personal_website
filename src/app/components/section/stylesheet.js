import { createUseStyles } from 'react-jss';

const useStyles = createUseStyles({
  container: {
    display: 'flex',
    width:'100%',
    flexDirection:'column',
    justifyContent: 'center',
    alignItems: 'start',
    margin:'70px 0px 0px',
    zIndex:2,
  },
  header:{
    padding:35
  },
  headerInfo:{
    color:'white',
    fontFamily:'Roboto , sans-serif',
    fontSize:'24px',
    fontWeight:600
  },
  children:{
    width:'100%',
  }
});


export default useStyles;
