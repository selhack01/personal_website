import { createUseStyles } from 'react-jss';


const useStyles = createUseStyles({
  container: {
    justifyContent: 'center',
    flexDirection:'column',
    alignItems: 'center',
    paddingBottom:60,
    display: 'flex',
    padding:'0 20%',
    zIndex:2,
    '@media (max-width: 1400px)': {
      padding: '0 50px',
    },
    },
  Cards:{
    justifyContent:'space-between',
    display:'flex',
    gap:70,
    '@media (max-width: 991px)': {
      flexDirection: 'column',
      gap:0
    },
    }
});

export default useStyles;
