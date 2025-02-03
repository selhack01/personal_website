import { createUseStyles } from 'react-jss';

const useStyles = createUseStyles({
    container: {
        display: 'flex',
        padding:35
      },
      button: {
        color: "#e8e8e8",
        padding: '0px 25px',
        border: 'none',
        background: 'none',
        cursor: 'pointer',
        fontSize: 16,
        fontFamily:'Roboto, sans-serif',
        transition: 'color 0.3s ease',
      },
      activeButton: {
        color: "#4affa4",
      },
});

export default useStyles;
