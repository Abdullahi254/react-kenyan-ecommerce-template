import React, { useState, useEffect } from 'react'
import useStyles from './styles'
import { Grid, Card, Typography, Button, } from '@material-ui/core'
import { AddShoppingCart } from '@material-ui/icons'
import { useParams } from 'react-router-dom'
import axios from 'axios'
import { addProduct, updateProduct } from '../../redux/cartRedux'
import { useDispatch, useSelector } from 'react-redux'


function ProductInfo() {
    const classes = useStyles()
    const { id } = useParams()
    const [current, setCurrent] = useState(0)
    const [isboxSizeActive, setBoxSizeActive] = useState(null)
    const [isColorActive, setColorActive] = useState(null)
    const [productInfo, setProductInfo] = useState(null)
    const [color, setColor] = useState('')
    const [size, setSize] = useState('')
    const dispatch = useDispatch()
    const cartProducts = useSelector(state => state.cart.products)

    const selectColor = (index, color) => {
        setColorActive(index)
        setColor(color)
    }

    const viewSlide = (index) => {
        setCurrent(index)
    }

    const handleBox = (index, size) => {
        setBoxSizeActive(index)
        setSize(size)
    }

    const handleClick = () => {
        const cartProduct = cartProducts.filter(prd => prd._id === productInfo._id)
        const objIndex = cartProducts.findIndex(obj => obj._id === productInfo._id)
        const imgObj = productInfo.img.filter(obj=>obj.color === color)[0]
        if (cartProduct.length>0) {

            const colorList = [...cartProduct[0].color]
            colorList.push(color)
            const sizeList = [...cartProduct[0].size]
            sizeList.push(size)
            const priceList = [...cartProduct[0].prices]
            priceList.push(productInfo.price)
            const imgObjList = [...cartProduct[0].img]
            imgObjList.push(imgObj)
            const prevQuantity = cartProduct[0].quantity
            dispatch(
                updateProduct({
                    product: {
                        ...productInfo,
                        color: [...colorList],
                        size: [...sizeList],
                        prices: [...priceList],
                        img:[...imgObjList],
                        quantity: (prevQuantity + 1)
                    },
                    index:objIndex
                })
            )
        } else {
            dispatch(
                addProduct({
                    product: {
                        ...productInfo,
                        color: [color],
                        size: [size],
                        prices: [productInfo.price],
                        img:[imgObj],
                        quantity: 1,
                    },
                })
            )
        }

    }

    const fetchProductInfo = async () => {
        try {
            const { data } = await axios.get(`http://localhost:5000/api/products/find/${id}`)
            setProductInfo(data)
            console.log(data)
        } catch (er) {
            console.log(er)
        }
    }

    useEffect(() => {
        fetchProductInfo()
    }, [])
    return (
        <>
            {productInfo &&
                <Grid container spacing={0}>

                    <Grid item xs={12} md={6}>
                        {
                            productInfo.img.map((image, index) => {
                                return (
                                    <div className={index === current ? 'slide active' : 'slide'} key={index} className={classes.carousel}>
                                        {index === current && <img src={`http://localhost:5000/api/uploads/${image.image}`} className={classes.slide} />}
                                    </div>
                                )
                            })
                        }
                        <div className={classes.map}>
                            {productInfo.img.map((img, index) => <img src={`http://localhost:5000/api/uploads/${img.image}`} key={index} className={index === current ?`${classes.mini} ${classes.highlight}`:classes.mini} onClick={() => viewSlide(index)} />)}
                        </div>
                    </Grid>
                    <Grid item xs={12} md={5}>
                        <Card className={classes.description}>
                            <Typography variant="h6">{productInfo.title}</Typography>
                            <br></br>
                            <label>Category: {productInfo.categories.map(cat=>`${cat} `)}</label>
                            <br></br>
                            <hr></hr>
                            <br></br>
                            <b style={{ fontSize: '20px' }}> KSH {productInfo.price}</b>
                            <Typography className={classes.smallHeading}> Variations Available</Typography>
                            <div className={classes.size}>
                                <Typography style={{ fontStyle: 'italic', margin: '20px 0', fontSize: '16px' }}>Size:</Typography>
                                {
                                    productInfo.size.map((size, index) => <div className={isboxSizeActive === index ? classes.darkBox : classes.box} key={index} onClick={() => handleBox(index, size)}>{size}</div>)
                                }
                            </div>
                            <div className={classes.size}>
                                <Typography style={{ fontStyle: 'italic', margin: '20px 0', fontSize: '16px' }}>Color:</Typography>
                                {
                                    productInfo.color.map((color, index) => <div style=
                                        {
                                            {
                                                display: 'inline-block',
                                                width: '30px',
                                                height: '30px',
                                                borderRadius: '50%',
                                                background: color === 'white' ? '#F2F3F4' : color,
                                                margin: '0 6px',
                                                cursor: 'pointer',
                                                border: isColorActive === index && '#303030 10px solid'
                                            }
                                        }
                                        key={index} onClick={() => selectColor(index, color)}></div>)
                                }
                            </div>
                            <div className={classes.cartButtonContainer} style={{ margin: '20px 0' }}>
                                <Button variant="outlined" startIcon={<AddShoppingCart />} className={classes.cartButton} onClick={handleClick}>
                                    ADD TO CART
                                </Button>
                            </div>
                            <div>
                                <Typography className={classes.smallHeading}>Product Details</Typography>
                                <Typography>
                                    The casual men fashiom sneaker is an all day comfortable wear while walking or running and its a comfort wear. Relaxed fit last to help provide versatile comfort wear after wear. It provide the Light Wear, Fashionable and Comfortable based the new trend and generation needed. "Choose Fashion for your comfort wear and enjoy your long day!!!"
                                    Upper Material: Canvas.Out sole Material: Rubber.Style: Casual Shoes.Closure Type: Lace-Up.Feature: Non-Slip, Wear-Resisting, Comfortable.The applicable age is adult. Soft and comfortable: the feet are soft and light. Safe and secure: the concave and convex lines of the sole are non-slip and wear resistant. Dry and comfortable. The fabric is breathable and feet are free to breathe. Light as a swallow. Light and comfortable like cotton tread. Features: Light weight and breathable.High quality,soft background.
                                </Typography>
                            </div>
                        </Card>
                    </Grid>
                </Grid>}
        </>

    )
}

export default ProductInfo
