import { createUseStyles } from 'react-jss';

const useStyles = createUseStyles({
  downloadButton: {
    fontFamily: 'Roboto, sans-serif',
    backgroundColor: 'transparent',
    border: 'solid 2px #4affa4',
    transition: 'all 0.3s ease',
    justifyContent: 'center',
    alignItems: 'center',
    fontSize: '16px',
    color: '#4affa4',
    fontWeight: 550,
    display: 'flex',
    width: '155px',
    marginTop: 20,
    padding: 10,
  },
  downloadButtonHover: {
    backgroundColor: '#4affa4',
    borderColor: '#4affa4',
    color: '#0f0f0f',
  },
});

export default useStyles;
