import { createUseStyles } from 'react-jss';

const useStyles = createUseStyles({
    container:{
        fontFamily:'Roboto , sans-serif',
        backgroundColor:'#0f0f0f',
        justifyContent:'end',
        fontWeight:500,
        display:'flex',
        fontSize:20,
        padding:35,
        alignItems:'end'
    },
    createdby:{
        marginRight:10,
        color:'white',
    },
    name:{
        color:'#4affa4',
        fontSize:34
    }
});

export default useStyles;
