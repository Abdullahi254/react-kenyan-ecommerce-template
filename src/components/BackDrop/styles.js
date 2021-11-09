import { makeStyles } from '@material-ui/core/styles'

export default makeStyles(() => ({
    backdrop: {
        height: '100%',
        width: '100%',
        position: 'fixed',
        zIndex: 100,
        left: 0,
        top: 0,
        backgroundColor: 'rgba(0, 0, 0, 0.5)',
    }
}))