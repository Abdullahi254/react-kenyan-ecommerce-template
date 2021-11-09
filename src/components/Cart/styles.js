import { makeStyles } from '@material-ui/core/styles'

export default makeStyles((theme)=>({
    total:{
        display:'flex',
        justifyContent:'flex-end'
    },
    buttons:{
        display:'flex',
        justifyContent:'space-between',
        padding:'12px'
    },
    proceedButton:{
        color:'green',
        [theme.breakpoints.down("sm")]:{
            fontSize:'12px'
        }
    },
    text:{
        fontSize:'18px',
        [theme.breakpoints.up("md")]:{
            fontSize:'24px'
        }
    },
    checkoutButton:{
        [theme.breakpoints.down("sm")]:{
            fontSize:'12px'
        }
    },
    link:{
        textDecoration:'none'
    }
}))