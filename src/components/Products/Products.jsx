import React from 'react'
import {Grid} from '@material-ui/core'
import Product from './Product/Product'

import useStyles from './styles'

const Products = ({products}) => {
    const classes = useStyles()
    return (
       <main className={classes.root}>
           <Grid container justify="center" >
                {
                    products.map(product=><Grid item key={product._id} xs={12} sm={4} md={3} lg={2} className={classes.product}>
                        <Product name={product.title} price={`KSH ${product.price}`} description={product.desc} image={`http://localhost:5000/api/uploads/${product.img[0].image}`} id={product._id}/>
                    </Grid>)
                }
           </Grid>
       </main>
    )
}

export default Products
