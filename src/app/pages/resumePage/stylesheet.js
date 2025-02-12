import { createUseStyles } from 'react-jss';

const useStyles = createUseStyles({
  container: {
    justifyContent: 'center',
    flexDirection:'column',
    alignItems: 'center',
    position: 'relative',
    padding: '0 20%',
    display: 'flex',
    zIndex:2,
    '@media (max-width: 1400px)': {
      padding: '0 50px',
    },
    },
    img:{
      height:180,
      width:160,
    },
    datas:{
      display:'flex',
      padding:35,
      gap:40,
      '@media (max-width: 1200px)':{
        flexDirection:'column',
        alignItems:'center'
      }
    },
    textArea:{
      flexDirection:'column',
      display:'flex',
      fontWeight:400,
      padding:0,
      margin:0,
      '@media (max-width: 768px)':{
        alignItems:'center',
      }
    },
    infos:{
      color:'rgba(255, 255, 255, 0.7)',
      fontFamily:'Roboto , sans-serif',
      fontSize:'16px',
      marginBottom:40,
      fontWeight:400,
      width:'100%',
    },
    items:{
      color:'rgba(255, 255, 255, 0.7)',
      fontFamily:'Roboto , sans-serif',
      alignItems:'center',
      fontWeight:400,
      display:'flex',
      fontSize:16,
      height:30,
      '@media (max-width: 768px)':{
        flexDirection:'column',
        height:'auto',
      }
    },
    title:{
      color:'#4affa4'
    },
    item:{
      display:'flex',
      width:'50%',
      gap:10,
      '@media (max-width: 768px)':{
        width:'auto',
      }
    },
    servicesCards:{
      justifyContent:'space-between',
      display:'flex',
      gap:70,
      '@media (max-width: 991px)':{
        flexDirection:'column',
        gap:0
      }
    },
    experience:{
      justifyContent:'space-between',
      display:'flex',
      width:'100%',
      gap:70,
      '@media (max-width: 991px)':{
        flexDirection:'column',
        gap:0
      }
    },
    list: {
      flexDirection: 'column',
      alignItems: 'center',
      display: 'flex',
      width: '50%',
    },
    li: {
      justifyContent: 'center',
      alignItems: 'center',
      display: 'flex',
      padding: 25,
      '@media (max-width: 767px)': {
        flexDirection: 'column',
      },
    },
});

export default useStyles;
