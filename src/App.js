import React, { useState, useEffect } from 'react'
import { commerce } from './lib/commerce'
import { Navbar, Products, Cart, Checkout, ProductInfo } from './components'
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom'
import axios from 'axios'


const App = () => {
    const [products, setProducts] = useState([])
    const [products2, setProducts2] = useState([])
    const [cart, setCart] = useState({})

    const fetchProducts = async () => {
        const { data } = await commerce.products.list();
        setProducts(data)
    }

    const fetchProducts2 = async () => {
        try {
            const { data } = await axios.get('http://localhost:5000/api/products')
            setProducts2(data)
        } catch (er) {
            console.log(er)
        }
    }

    const fetchCart = async () => {
        const cart = await commerce.cart.retrieve()
        setCart(cart)
    }

    const handleAddToCart = async (productId, quantity) => {
        const item = await commerce.cart.add(productId, quantity)
        setCart(item.cart)
    }

    const handleIncreaseCartItem = async (productId, quantity) => {
        const item = await commerce.cart.update(productId, { quantity: (quantity + 1) })
        setCart(item.cart)
    }

    const handleDecreaseCartItem = async (productId, quantity) => {
        const item = await commerce.cart.update(productId, { quantity: (quantity - 1) })
        setCart(item.cart)
    }

    const handleRemoveCartItem = async (productId) => {
        const item = await commerce.cart.remove(productId)
        setCart(item.cart)
    }

    const handleDeleteCart = async () => {
        const item = await commerce.cart.delete()
        setCart({})
    }

    useEffect(() => {
        fetchProducts()
        fetchProducts2()
        fetchCart()
    }, [])


    return (
        <Router>
            <div>
                <Navbar />
                <Switch>
                    <Route path="/cart">
                        <Cart
                            cart={cart}
                            handleIncreaseCartItem={handleIncreaseCartItem}
                            handleDecreaseCartItem={handleDecreaseCartItem}
                            handleRemoveCartItem={handleRemoveCartItem}
                            handleDeleteCart={handleDeleteCart}
                        />
                    </Route>
                    <Route path="/checkout">
                        <Checkout cart={cart} />
                    </Route>
                    <Route path="/product/:id">
                        <ProductInfo />
                    </Route>
                    <Route path="/">
                        <Products products={products2}/>
                    </Route>
                </Switch>

            </div>
        </Router>

    )
}

export default App
