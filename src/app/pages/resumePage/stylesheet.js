import { createUseStyles } from 'react-jss';

const useStyles = createUseStyles({
  container: {
    display: 'flex',
    flexDirection:'column',
    justifyContent: 'center',
    alignItems: 'center',
    position: 'relative',
    zIndex:2,
    paddingRight:'20%',
    paddingLeft:'20%',
    },
    img:{
      width:160,
      height:180
    },
    datas:{
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
    servicesCards:{
      display:'flex',
      justifyContent:'space-between',
      gap:70,    
    },
    experience:{
      width:'100%',
      display:'flex',
      justifyContent:'space-between',
      gap:70,
    },
    list:{
      width:'100%',
    },
    li:{
      display:'flex',
      width:'100%',
      padding:25
    }
});

export default useStyles;
