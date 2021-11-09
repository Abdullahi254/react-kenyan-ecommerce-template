import { makeStyles } from '@material-ui/core/styles';
export default makeStyles(theme => ({
    root: {
        marginBottom: theme.spacing(2)
    },
    name: {
        display: 'flex',
        [theme.breakpoints.down('xs')]: {
            marginRight: '8px'
        }
    },
    title: {
        marginTop: '8px',
        textDecoration: 'none',
        color: 'white'
    },
    search: {
        position: 'relative',
        borderRadius: theme.shape.borderRadius,
        backgroundColor: 'rgba(255, 255, 255, 0.5)',
        '&:hover': {
            backgroundColor: '#fff',
        },
        marginRight: theme.spacing(2),
        marginLeft: 0,
        width: '100%',
        [theme.breakpoints.up('sm')]: {
            marginLeft: theme.spacing(3),
            width: 'auto',
        },
        [theme.breakpoints.only('xs')]: {
            display: 'none'
        },
    },
    searchMobile: {
        position: 'relative',
        borderRadius: theme.shape.borderRadius,
        backgroundColor: 'rgba(255, 255, 255, 0.5)',
        '&:hover': {
            backgroundColor: '#fff',
        },
        marginRight: theme.spacing(3),
        marginLeft: theme.spacing(3),
        width: '100%',
    },
    searchIcon: {
        padding: theme.spacing(0, 2),
        height: '100%',
        position: 'absolute',
        pointerEvents: 'none',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        color: '#000',
    },
    backIcon: {
        padding: theme.spacing(0, 2),
        height: '100%',
        position: 'absolute',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        color: '#000',
        cursor: 'pointer',
        zIndex: '100'
    },
    inputRoot: {
        color: '#000',
    },
    inputInput: {
        padding: theme.spacing(1, 1, 1, 0),
        // vertical padding + font size from searchIcon
        paddingLeft: `calc(1em + ${theme.spacing(4)}px)`,
        transition: theme.transitions.create('width'),
        [theme.breakpoints.up('sm')]: {
            width: '27ch',
        },
        [theme.breakpoints.up('md')]: {
            width: '60ch',
        },
        [theme.breakpoints.up('lg')]: {
            width: '80ch',
        },
        [theme.breakpoints.up('xl')]: {
            width: '120ch',
        },
    },
    endIcons: {
        display: 'flex'
    },
    mobileSearch: {
        display: 'none',
        [theme.breakpoints.only('xs')]: {
            display: 'block'
        },
    }

}))