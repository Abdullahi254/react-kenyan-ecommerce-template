import React from 'react'
import { Grid, Typography, Card, CardActionArea, CardMedia, CardContent, Container, Button } from '@material-ui/core'
import useStyles from './styles'
function CartItem(props) {
    const classes = useStyles()
    return (
        <Container className={classes.root} maxWidth="sm">

            <Grid container>
                <Grid xs={5}  md={6} item>
                    <Typography className={classes.price} >Item</Typography>
                </Grid>
                <Grid xs={5} md={3} item>
                    <Typography className={classes.price}>Quantity</Typography>
                </Grid>
                <Grid xs={2} md={3} item>
                    <Typography className={classes.price}>Price</Typography>
                </Grid>
            </Grid>

            <Grid container>
                <Grid xs={5} md={6} item>
                    <Card onClick={props.showItemDetails}>
                        <CardActionArea>
                            <CardMedia
                                className={classes.media}
                                image={props.img}
                                title="image"
                            />
                            <CardContent>
                                <Typography gutterBottom variant="h6" classes={{ root: classes.itemNameRoot }}>
                                    {props.name}
                                </Typography>
                            </CardContent>
                        </CardActionArea>
                    </Card>
                </Grid>
                <Grid xs={5} md={3} item className={classes.quantityContainer}>
                    <Button size="small"  color="secondary" onClick={props.handleDecreaseCartItem}>-</Button>
                    <b className={classes.quantity}>{props.quantity}</b>
                    <Button size="small" style={{color:'green'}} onClick={props.increaseCartItem}>+</Button>
                </Grid>
                <Grid xs={2} md={3} item>
                    <Typography className={classes.price}>{props.price}</Typography>
                </Grid>
            </Grid>

            <Grid container>
                <Grid item xs={9}>

                </Grid>
                <Grid item xs={3} className={classes.removeButton}>
                    <Button  color="secondary" onClick={props.handleRemoveCartItem}>Remove</Button>
                </Grid>
            </Grid>

        </Container>
    )
}

export default CartItem
