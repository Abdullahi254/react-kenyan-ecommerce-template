import {makeStyles} from '@material-ui/core/styles'

export default makeStyles((theme)=>({
    root:{
        marginTop:[theme.spacing(3)],
        backgroundColor:theme.palette.background.default
    },
    product:{
        margin:[theme.spacing(1)],
    }
}))