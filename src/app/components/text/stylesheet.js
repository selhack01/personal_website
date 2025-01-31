import { createUseStyles } from 'react-jss';

const useStyles = createUseStyles({
  container: {
    display: 'flex',
    width:'100%',
    justifyContent: 'center',
    alignItems:'center',
    gap:15,
    paddingRight:25,
    paddingLeft:25,
    textAlign:'start',
    marginBottom:10,
    marginTop:10
  },
  text:{
    color:'#eeeeee',
    fontFamily:'roboto , sans-serif',
    fontSize:'16px',
    fontWeight:500,
    width:'100%'
  },
});


export default useStyles;
