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
  Cards:{
    display:'flex',
    justifyContent:'space-between',
    gap:70,  
    }
});

export default useStyles;
