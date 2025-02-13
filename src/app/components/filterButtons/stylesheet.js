import { createUseStyles } from 'react-jss';

const useStyles = createUseStyles({
    container: {
        display: 'flex',
        padding:35,
        '@media (max-width: 991px)': {
          flexDirection:'column',
        },
      },
      button: {
        fontFamily:'Roboto, sans-serif',
        transition: 'color 0.3s ease',
        padding: '0px 25px',
        background: 'none',
        cursor: 'pointer',
        color: "#e8e8e8",
        border: 'none',
        fontSize: 16,
        '@media (max-width: 991px)': {
          padding:5,
        },
      },
      
      activeButton: {
        color: "#4affa4",
      },
});

export default useStyles;
