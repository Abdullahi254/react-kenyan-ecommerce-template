import BackDrop from '../../BackDrop/BackDrop'
import React from 'react'
import useStyles from './styles'
import { Card, Grid, CardActionArea, CardMedia, CardContent, Typography, Button } from '@material-ui/core'
import { Close, Delete } from '@material-ui/icons'
import { removeItem } from '../../../redux/cartRedux'
import { useSelector, useDispatch } from 'react-redux'
import { useLocation } from "react-router-dom";

function CartDetails({ showCartDetails, closeCartDetails }) {
  const classes = useStyles()
  const dispatch = useDispatch()
  const id = useLocation().search.slice(4)
  const cartItem = useSelector(state => state.cart.products).filter(item => item._id === id)[0]
  const outerIndex = useSelector(state => state.cart.products).indexOf(cartItem)
  console.log(cartItem)

  const deleteItem = (index) => {
    dispatch(removeItem({
      outerIndex: outerIndex,
      index
    }))
  }

  return (
    <>
      { cartItem && <BackDrop show={showCartDetails} clicked={closeCartDetails} />}
      {
        cartItem && <div className={classes.root} style={{ display: showCartDetails ? 'flex' : 'none' }}>
          <Typography align="center" gutterBottom className={classes.text}>{cartItem.title} variation choosen</Typography>
          <Close className={classes.close} onClick={closeCartDetails} />
          {
            cartItem.size.map((s, index) => <Grid key={index} xs={10} item>
              <Card className={classes.card}>
                <CardActionArea>
                  <CardMedia
                    className={classes.media}
                    image={`http://localhost:5000/api/uploads/${cartItem.img[index].image}`}
                    title="image"
                  />
                  <CardContent>
                    <Typography gutterBottom variant="h6" classes={{ root: classes.itemNameRoot }}>
                      size:{s}
                    </Typography>
                    <Typography gutterBottom variant="h6" classes={{ root: classes.itemNameRoot }}>
                      color:{cartItem.color[index]}
                    </Typography>
                  </CardContent>
                </CardActionArea>
                <div style={{ display: 'flex', justifyContent: 'flex-end' }}><Button color="secondary" startIcon={<Delete />} className={classes.remove} onClick={() => deleteItem(index)}>Remove</Button></div>
              </Card>
            </Grid>)
          }
        </div>
      }

    </>
  )
}

export default CartDetails
