import { createUseStyles } from 'react-jss';

const useStyles = createUseStyles({
  container: {
    display: 'flex',
    paddingBottom:0,
    padding: 45,
  },
  input: {
    transition: 'border-color 0.3s, color 0.3s',
    borderBottom: '2px solid #262626',
    fontFamily: 'roboto, sans-serif',
    backgroundColor: 'transparent',
    color: '#eeeeee',
    fontSize: '16px',
    fontWeight: 500,
    outline: 'none',
    border: 'none',
    resize:'none',
    width: '100%',
    height:100,
    '&::placeholder': {
      transition: 'color 0.3s',
      color: '#aaa',
    },
    '&:focus': {
      borderBottom: '2px solid white',
      '&::placeholder': {
        color: 'white',
      },
    },
  },
});

export default useStyles;
