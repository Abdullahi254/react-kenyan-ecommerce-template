import { makeStyles } from '@material-ui/core/styles';
export default makeStyles(theme => ({
    layout:{
        marginTop:'6%',
    },
    paper: {
        maxWidth: '940px',
        margin: 'auto',
        paddingBottom:20
    },
    stepper: {
        padding: theme.spacing(3, 0, 5),
    },
    text: {
        fontSize: '20px',
        [theme.breakpoints.up("md")]: {
            fontSize: '26px'
        }
    },
}))