import React from 'react'
import { Typography, Button, Grid } from '@material-ui/core'
import useStyles from './styles'

function Confirmation({ cart}) {
    const classes = useStyles()
    console.log(cart)

    const paymentHandler = (e)=>{
        e.preventDefault()
        fetch('http://localhost:5000/api/payment/create-checkout-session',{
            method:'post',
            headers:{
                'content-Type':'application/json',
            },
            body:JSON.stringify({
                items:[
                    {
                        price:'2000',
                        quantity:2
                    },
                    {
                        price:'3000',
                        quantity:1
                    }
                ]
            })
        }).then(res=>{
            if(res.ok) return res.json()
            return res.json().then(json=>Promise.reject(json))
        }).then(({url})=>{
            window.location = url
        }).catch(er=>{
            console.log(er.message)
        })
    }

    return (
        <form onSubmit={paymentHandler}>
            <Typography variant="h5" align="center">Cart Detail.</Typography>
            <div className={classes.hContainer}><Typography className={classes.heading2}>CART ITEMS</Typography></div>
            <Grid container>
                {cart.line_items.map(item => <Grid container key={item.id} style={{ marginBottom: '20px' }}>
                    <Grid item xs={4}>
                        <div style={{ marginLeft: '10px' }}>
                            <Typography className={classes.itemDetail}>{item.product_name}</Typography>
                            <Typography style={{ color: '#696969', fontSize: '13px' }}>quantity:{item.quantity}</Typography>
                        </div>
                    </Grid>
                    <Grid item xs={6} />
                    <Grid item xs={2}>
                        <Typography className={classes.itemPrice}>{item.line_total.formatted_with_symbol}</Typography>
                    </Grid>
                    <Grid item xs={12} style={{ marginTop: '12px' }}> <hr style={{ color: 'gray' }} /> </Grid>
                </Grid>)}

                <Grid item xs={4}><Typography className={classes.itemDetail} style={{ marginLeft: '10px' }}>Shipping fee</Typography></Grid>
                <Grid item xs={6} />
                <Grid item xs={2}>
                    <Typography className={classes.itemPrice}>ksh200.00</Typography>
                </Grid>
            </Grid>
            <div className={classes.hContainer} style={{ marginBottom: '20px' }}><Typography className={classes.heading2}>PAYMENT SUMMARY</Typography></div>

            <Grid container style={{ marginBottom: '20px' }}>
                <Grid item xs={4}><Typography className={classes.itemDetail} style={{ marginLeft: '10px' }}>Total Amount</Typography></Grid>
                <Grid item xs={6} />
                <Grid item xs={2}>
                    <Typography className={classes.itemPrice}>{cart.subtotal.formatted_with_symbol}</Typography>
                </Grid>
            </Grid>
            <div style={{textAlign:'center'}}>
                <Button color="primary" variant="contained" type="submit">pay {cart.subtotal.formatted_with_symbol}</Button>
            </div>

        </form>
    )
}
export default Confirmation
