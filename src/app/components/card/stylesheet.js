import { createUseStyles } from 'react-jss';

const useStyles = createUseStyles({
  container: {
    border:'solid 1px rgba(255, 255, 255, 0.1)',
    backgroundColor:'#0f0f0f',
    justifyContent: 'center',
    boxSizing: 'border-box',
    flexDirection:'column',
    alignItems:'center',
    overflow: 'hidden',
    textAlign:'center',
    marginBottom:40,
    display: 'flex',
    minHeight:180,
    width:'100%',
    padding:25,
    zIndex:2,
    gap:15,
  },
  title:{
    fontFamily:'roboto , sans-serif',
    margin:'15px 0px',
    color:'#eeeeee',
    fontSize:'16px',
    fontWeight:500,
    width: '100%',
  },
  description:{
    fontFamily:'roboto , sans-serif',
    color:'#bbbbbb',
    fontSize:'16px',
    fontWeight:400,
  }
});


export default useStyles;
