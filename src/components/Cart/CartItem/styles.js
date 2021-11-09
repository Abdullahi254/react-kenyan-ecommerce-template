import { makeStyles } from '@material-ui/core/styles'

export default makeStyles((theme) => ({
    root: {
        marginBottom: theme.spacing(3),
        padding: ' 15px 20px',
        border: 'solid black 2px'

    },
    price: {
        fontWeight: 'bold',
        display: 'flex',
        justifyContent: 'center',
        marginBottom: theme.spacing(4),
        [theme.breakpoints.only('xs')]: {
            fontSize: '12px'
        }
    },
    media: {
        margin: 'auto',
        width: '80px',
        height: '100px'
    },
    quantityContainer:{
        [theme.breakpoints.between('xs','md')]: {
            textAlign:'center'
        }
    },
    quantity: {
        [theme.breakpoints.only('xs')]: {
            fontSize: '12px',
            display: 'block',
            padding:'0 28px'

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
}))