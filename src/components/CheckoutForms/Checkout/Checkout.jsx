import React, { useState, useEffect } from 'react'
import { Paper, Stepper, Step, StepLabel, Typography, CircularProgress, Divider, Button } from '@material-ui/core'
import { createMuiTheme, ThemeProvider } from '@material-ui/core/styles';
import useStyles from './styles'
import AddressForm from '../AddressForm'
import PaymentForm from '../PaymentForm'
import Confirmation from '../Confirmation'
import { commerce } from '../../../lib/commerce'

const outerTheme = createMuiTheme({
    palette: {
        primary: {
            main: '#303030'
        },
    },
})


function Checkout({ cart }) {
    const steps = ["Shipping address", "payment details"]

    const [activeStep, setActiveStep] = useState(0)
    const [checkoutToken, setCheckoutToken] = useState('')
    const [addressData, setAddressData] = useState({})
    const classes = useStyles()

    useEffect(() => {
        const genereateToken = async () => {
            try {
                const token = await commerce.checkout.generateToken(cart.id, { type: 'cart' })
                console.log(token)
                setCheckoutToken(token)
            } catch (er) {
                console.log(er)
            }
        }
        genereateToken()
    }, [cart])


    const Form = () => activeStep === 0
        ? <AddressForm proceed={() => setActiveStep(prev => prev + 1)} checkoutToken={checkoutToken} getAddress={(data) => setAddressData(data)} />
        : <PaymentForm back={() => setActiveStep(prev => prev - 1)} proceed={() => setActiveStep(prev => prev + 1)} />

    return (
        <>
            <ThemeProvider theme={outerTheme}>
                <main className={classes.layout}>
                    <Paper className={classes.paper}>
                        <Typography className={classes.text} align="center">Checkout</Typography>
                        <Stepper activeStep={activeStep} className={classes.stepper}>
                            {steps.map(step => (
                                <Step key={step}>
                                    <StepLabel>{step}</StepLabel>
                                </Step>
                            ))}
                        </Stepper>
                        {activeStep === steps.length ? <Confirmation cart={cart} /> : checkoutToken && <Form />}
                    </Paper>
                </main>
            </ThemeProvider>

        </>
    )
}

export default Checkout
