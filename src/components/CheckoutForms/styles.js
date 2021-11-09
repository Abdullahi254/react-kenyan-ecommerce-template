import { makeStyles } from '@material-ui/core/styles';
export default makeStyles(theme => ({
    row: {
        display: 'flex',
        justifyContent: 'space-between',
        margin: '0 50px',
        marginBottom: '50px',
        [theme.breakpoints.down("xs")]: {
            margin: '0',
            marginBottom: '50px',
        }
    },
    solo: {
        display: 'flex',
        justifyContent: 'center',
        marginBottom: '50px'
    },
    textArea: {
        height: '70px'
    },
    numberInput: {
        "& input::-webkit-outer-spin-button, & input::-webkit-inner-spin-button": {
            "-webkit-appearance": "none",
            margin: 0
        }
    },
    formControl: {
        margin: theme.spacing(1),
        minWidth: 180,
        [theme.breakpoints.down("xs")]: {
            minWidth: 90,
        }
    },
    label: {
        [theme.breakpoints.down("xs")]: {
            fontSize: '14px',
        }
    },
    phoneInput:{
        minWidth:'500px',
        [theme.breakpoints.down("sm")]:{
            minWidth:'300px'
        },
        [theme.breakpoints.down("xs")]:{
            minWidth:'200px'
        }
    },
    paymentButtons:{
        display:'flex',
        justifyContent:'space-between',
        padding:'0 60px',
        [theme.breakpoints.down("sm")]:{
            padding:'0 30px'
        },
        [theme.breakpoints.down("xs")]:{
            padding:'0 0'
        }
        
    },
    hContainer:{
        margin:'15px 0',
        backgroundColor:'#ADD8E6',
        padding:'0 10px'
    },

    heading2:{
        color:'#696969',
        fontSize:'14px',
    },
    itemDetail:{
        fontSize:'19px',
        [theme.breakpoints.down("xs")]:{
            fontSize:'15px',
        }
    },

    itemPrice:{
        fontWeight:'bold',
        [theme.breakpoints.down("xs")]:{
            fontSize:'12px',
            marginLeft:'-30px'
        }
    }
}))