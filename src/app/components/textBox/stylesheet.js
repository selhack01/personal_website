import { createUseStyles } from 'react-jss';

const useStyles = createUseStyles({
  container: {
    display: 'flex',
    width:'100%',
    justifyContent: 'center',
    alignItems:'center',
    gap:15,
    textAlign:'start',
    padding:35
  },
  input:{
    color:'#eeeeee',
    fontFamily:'roboto , sans-serif',
    fontSize:'16px',
    fontWeight:500,
    width:'100%',
    backgroundColor:'transparent',
    outline: 0,
  },
});


export default useStyles;
