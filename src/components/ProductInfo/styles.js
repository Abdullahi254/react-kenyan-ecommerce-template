import { makeStyles } from '@material-ui/core/styles'
export default makeStyles(theme => ({
    carousel: {
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
    },
    slide: {
        height: '500px',
        width: '550px',
        [theme.breakpoints.down('md')]: {
            width: '500px',
            height: '500px'
        },
        [theme.breakpoints.down('xs')]: {
            width: '300px',
            height: '300px'
        },
        cursor: 'zoom-in'
    },
    map: {
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
    },
    mini: {
        height: '50px',
        width: '50px',
        [theme.breakpoints.down('sm')]: {
            width: '40px',
            height: '40px'
        },
        margin: '5px 5px',
        cursor: 'pointer'
    },
    highlight:{
        border:'solid 2px #303030',
        borderRadius:'5px'
    },
    cartButton: {
        background: '#303030',
        color: 'white',
        [theme.breakpoints.down('xl')]: {
            padding: '10px 12em'
        },
        [theme.breakpoints.down('md')]: {
            padding: '10px 6em'
        },
        '&:hover': {
            color: "#000",
        },
    },
    cartButtonContainer: {
        textAlign: 'center',
    },
    description: {
        padding: '20px',
        [theme.breakpoints.down('sm')]: {
            marginTop: '12px'
        }
    },
    smallHeading: {
        margin: '20px 0',
        borderBottom: '1px solid black',
        fontSize: '17px'
    },
    size: {
        display: 'flex',
        alignItems: 'center'
    },
    box: {
        height: '20px',
        width: '50px',
        padding: '5px',
        border: '1px black solid',
        textAlign: 'center',
        margin: '0 3px',
        cursor: 'pointer',
        '&:hover': {
            color: "white",
            background: '#303030',
        },
    },
    darkBox: {
        height: '20px',
        width: '50px',
        padding: '5px',
        border: '1px black solid',
        textAlign: 'center',
        margin: '0 3px',
        cursor: 'pointer',
        '&:hover': {
            color: "white",
            background: '#303030',
        },
        color: "white",
        background: '#303030',
    }
}))