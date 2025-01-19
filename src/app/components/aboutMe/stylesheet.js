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
  img:{
    width:160,
    height:180
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
  datas:{
    // border:'solid 1px rgba(255, 255, 255, 0.1)',
    padding:35,
    display:'flex',
    gap:40,
  },
  textArea:{
    display:'flex',
    flexDirection:'column',
    padding:0,
    margin:0
  },
  infos:{
    fontSize:'16px',
    fontWeight:400,
    width:'100%',
    fontFamily:'Roboto , sans-serif',
    color:'rgba(255, 255, 255, 0.7)',
    marginBottom:40
  },
  items:{
    color:'rgba(255, 255, 255, 0.7)',
    display:'flex',
    flexDirection:'row',
    height:30,
    alignItems:'center',
    fontFamily:'Roboto , sans-serif',
    fontSize:16,
    fontWeight:400
  },
  title:{
    color:'#4affa4'
  },
  item:{
    display:'flex',
    flexDirection:'row',
    gap:10,
    width:'50%',
  },
  downloadButton:{
    display:'flex',
    width:'155px',
    alignItems:'center',
    justifyContent:'center',
    padding:10,
    fontSize:'16px',
    fontFamily:'Roboto , sans-serif',
    fontWeight:550,
    color:'#4affa4',
    backgroundColor:'transparent',
    border:'solid 2px #4affa4',
    marginTop:20
  },

});


export default useStyles;
