import React, {useState,useRef} from 'react'
import { Typography, TextField, InputAdornment,Button } from '@material-ui/core'
import logo from '../../assets/mpesa-logo.png'
import useStyles from './styles'

function PaymentForm(props) {
    const classes = useStyles()

    const [phoneError, setPhoneError] = useState(true)

    const phone = useRef('')

    const phoneErrorCheck = () => {
        if (phone.current.value.length !== 9) {
            setPhoneError(true)
        }
        else {
            setPhoneError(false)
        }
    }
    
    const paymentHandler = (e)=>{
        e.preventDefault()
        phoneErrorCheck()
        props.proceed()
    }

    return (
        <form onSubmit={paymentHandler}>
            <Typography align="center" variant="h6">Payment Form</Typography>
            <div style={{ display: 'flex', justifyContent: 'flex-end', marginRight:'20px' }}>
               <img src={logo} alt="" style={{width:'70px',height:'50px'}}/>
            </div>

            <div className={classes.solo}>
                <TextField
                    label="Phone"
                    id="standard-start-adornment"
                    type="number"
                    className={classes.numberInput}
                    InputProps={{
                        startAdornment: <InputAdornment position="start">+254</InputAdornment>,
                        maxLength: '9',
                        className:classes.phoneInput
                    }}
                    width=""
                    error={phoneError}
                    inputRef={phone}
                    onChange={phoneErrorCheck}
                    required
                />
            </div>

            <div className={classes.paymentButtons}>
                <Button color="secondary" variant="contained" onClick={props.back}>Back</Button>
                <Button color="primary" variant="contained" type="submit">Continue</Button>
            </div>

        </form>
    )
}

export default PaymentForm
