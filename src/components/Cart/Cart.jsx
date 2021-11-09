import React,{useState} from 'react'
import { Container, Typography, Button } from '@material-ui/core'
import CartItem from './CartItem/CartItem';
import CartDetails  from './CartDetails/CartDetails';
import { useHistory, Link,} from "react-router-dom";
import useStyles from './styles'
import {useSelector, useDispatch} from 'react-redux'
import {removeCartItem, deleteCart} from '../../redux/cartRedux'


function Cart() {
    const classes = useStyles();
    const cart = useSelector(state=>state.cart)
    const [open, setOpen] = useState(false)
    const history = useHistory()
    const dispatch = useDispatch()

    const showItemDetailsHandler = (id)=>{
        setOpen(true)
        history.push(`/cart?id=${id}`)
    }

    const handleRemoveCartItem = (index)=>{
        dispatch(removeCartItem({
            index
        }))
    }

    const directToProductInfoHandler = (id)=>{
        history.push(`/product/${id}`)
    }

    const emptyCartHandler = ()=>{
        dispatch(deleteCart())
    }

    const EmptyCart = () => (
        <Typography variant="subtitle1" align="center">You have no items in your cart,
            <Link className={classes.link} to="/">start adding some</Link>!
        </Typography>)
    const FilledCart = () => (
        <>
            <CartDetails showCartDetails={open} closeCartDetails={()=>setOpen(false)}/>
            <Typography align="center" gutterBottom className={classes.text}>Shopping Cart</Typography>
            {cart.products.map((item,index) =>
                <CartItem
                    key={item._id}
                    name={item.title}
                    img={`http://localhost:5000/api/uploads/${item.img[0].image}`}
                    price={item.price}
                    quantity={item.quantity}
                    increaseCartItem={() => directToProductInfoHandler(item._id)}
                    handleDecreaseCartItem={()=>showItemDetailsHandler(item._id)}
                    handleRemoveCartItem = {()=>handleRemoveCartItem(index)}
                    showItemDetails = {()=>showItemDetailsHandler(item._id)}
                />)}
            <div className={classes.total}>
                <Typography className={classes.text}>Subtotal({cart.totalQuantity}):<b>KSH {cart.totalPrice}</b></Typography>
            </div>
            <div className={classes.buttons}>
                <Button color="secondary" className={classes.checkoutButton} onClick={emptyCartHandler}>Empty cart</Button>
                <Button component={Link} to="/checkout" classes={{ root: classes.proceedButton }}>Proceed to checkout</Button>
            </div>
        </>
    )
    return (
        <Container maxWidth="xl">
            {
                cart.products && cart.products.length>0 ? <FilledCart /> : <EmptyCart />
            }

        </Container>
    )
}

export default Cart
