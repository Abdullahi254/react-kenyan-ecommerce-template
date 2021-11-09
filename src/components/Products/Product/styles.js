import { makeStyles } from '@material-ui/core/styles'

export default makeStyles((theme) => ({
    root: {
        maxWidth: '100%',
        cursor:'pointer'
    },
    media: {
        margin: 'auto',
        width: '200px',
        height: '250px'
    },
    cardActions: {
        display: 'flex',
        justifyContent: 'flex-end',
    },
    cardContent: {
        display: 'flex',
        justifyContent: 'space-between',
    },
    titleRoot: {
        fontSize: '17px',
        fontWeight: 'bold'
    }

}))