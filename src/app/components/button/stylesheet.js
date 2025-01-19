import { createUseStyles } from 'react-jss';

const useStyles = createUseStyles({
        downloadButton: {
          display: 'flex',
          width: '155px',
          alignItems: 'center',
          justifyContent: 'center',
          padding: 10,
          fontSize: '16px',
          fontFamily: 'Roboto, sans-serif',
          fontWeight: 550,
          color: '#4affa4',
          backgroundColor: 'transparent',
          border: 'solid 2px #4affa4',
          marginTop: 20,
          transition: 'all 0.3s ease',
        },
        downloadButtonHover: {
            color: '#0f0f0f',
            backgroundColor: '#4affa4',
            borderColor: '#4affa4',
          },
});

export default useStyles;
