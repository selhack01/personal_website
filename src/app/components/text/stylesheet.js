import { createUseStyles } from 'react-jss';

const useStyles = createUseStyles({
  container: {
    justifyContent: 'center',
    alignItems:'center',
    textAlign:'start',
    display: 'flex',
    paddingRight:25,
    marginBottom:10,
    paddingLeft:25,
    minWidth:200,
    marginTop:10,
    gap:15,
  },
  text:{
    fontFamily:'roboto , sans-serif',
    color:'#eeeeee',
    fontSize:'16px',
    fontWeight:500,
    width:'100%',
  },
});


export default useStyles;
