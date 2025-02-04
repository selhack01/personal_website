import { createUseStyles } from 'react-jss';

const useStyles = createUseStyles({
  container: {
    border:'solid 1px rgba(255, 255, 255, 0.1)',
    display: 'flex',
    width:'100%',
    flexDirection:'column',
    justifyContent: 'center',
    zIndex:2,
    alignItems:'center',
    gap:15,
    padding:25,
    textAlign:'center',
    marginBottom:40
  },
  title:{
    color:'#eeeeee',
    fontFamily:'roboto , sans-serif',
    fontSize:'16px',
    fontWeight:500,
    margin:'15px 0px'
  },
  description:{
    color:'#bbbbbb',
    fontFamily:'roboto , sans-serif',
    fontSize:'16px',
    fontWeight:400
  }
});


export default useStyles;
