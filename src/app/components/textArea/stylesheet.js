import { createUseStyles } from 'react-jss';

const useStyles = createUseStyles({
  container: {
    display: 'flex',
    padding: 45,
    paddingBottom:0,
  },
  input: {
    color: '#eeeeee',
    fontFamily: 'roboto, sans-serif',
    fontSize: '16px',
    fontWeight: 500,
    width: '100%',
    height:100,
    resize:'none',
    backgroundColor: 'transparent',
    border: 'none',
    borderBottom: '2px solid #262626',
    outline: 'none',
    transition: 'border-color 0.3s, color 0.3s',
    '&::placeholder': {
      color: '#aaa',
      transition: 'color 0.3s',
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
