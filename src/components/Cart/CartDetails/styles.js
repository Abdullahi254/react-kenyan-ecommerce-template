import { makeStyles } from '@material-ui/core/styles'

export default makeStyles((theme) => ({
    root: {
        position: 'fixed',
        zIndex: 120,
        left: '50%',
        top:'7%',
        bottom:'40%',
        transform: 'translateX(-50%)',
        background: '#F5F5F5',
        display:"flex",
        flexDirection:"column",
        alignItems:"center",
        [theme.breakpoints.down("xl")]:{
            width:"800px"
        },
        [theme.breakpoints.down("md")]:{
            width:"700px"
        },
        [theme.breakpoints.down("sm")]:{
            width:"400px"
        },
        [theme.breakpoints.down("xs")]:{
            width:"300px"
        },
        overflowY:'scroll',
    },
    card: {
        marginBottom: '5px',
        [theme.breakpoints.down("xl")]:{
            width:"600px"
        },
        [theme.breakpoints.down("md")]:{
            width:"500px"
        },
        [theme.breakpoints.down("sm")]:{
            width:"300px"
        },
        [theme.breakpoints.down("xs")]:{
            width:"200px"
        }
    },
    media: {
        margin: 'auto',
        width: '80px',
        height: '100px',
    },
    remove: {
        [theme.breakpoints.only('xs')]: {
            fontSize: '12px'
        },
        [theme.breakpoints.only('sm')]: {
            fontSize: '14px'
        }
    },
    itemNameRoot: {
        [theme.breakpoints.only('xs')]: {
            fontSize: '12px'
        },
        [theme.breakpoints.only('sm')]: {
            fontSize: '14px'
        }
    },
    close:{
        position:'absolute',
        top:0,
        right:0,
        cursor:'pointer',
        color:'red'
    },
    text:{
        fontSize:'18px',
        [theme.breakpoints.up("md")]:{
            fontSize:'24px'
        },
        fontStyle:'italic'
    },
}))