import React from 'react'
import { Card, CardMedia, CardContent, CardActions, Typography, IconButton } from '@material-ui/core'
import { AddShoppingCart } from '@material-ui/icons'
import { useHistory } from 'react-router-dom'
import useStyles from './styles'


const Product = (props) => {

    const classes = useStyles();

    const history = useHistory()

    const handleProductClick = () => {
        history.push(`/product/${props.id}`)
    }

    return (
        <Card className={classes.root} onClick={handleProductClick}>
            <CardMedia className={classes.media} image={props.image} title={props.name} />
            <CardContent>
                <div className={classes.cardContent}>
                    <Typography gutterBottom classes={{ root: classes.titleRoot }}>
                        {props.name}
                    </Typography>
                    <Typography classes={{ root: classes.titleRoot }}>
                        {props.price}
                    </Typography>
                </div>
                <Typography variant="body2" color="textSecondary" dangerouslySetInnerHTML={{ __html: props.description }} />
                <CardActions disableSpacing className={classes.cardActions}>
                    <IconButton aria-label="Add to Cart" onClick={handleProductClick}>
                        <AddShoppingCart />
                    </IconButton>
                </CardActions>
            </CardContent>
        </Card>
    )
}

export default Product
