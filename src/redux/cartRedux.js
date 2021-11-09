import { createSlice } from '@reduxjs/toolkit'

const cartSlice = createSlice({
    name: "cart",
    initialState: {
        products: [],
        totalQuantity: 0,
        totalPrice: 0
    },
    reducers: {
        addProduct: (state, action) => {
            state.products.push(action.payload.product)
            state.totalQuantity += 1
            state.totalPrice += action.payload.product.price
        },

        updateProduct: (state, action) => {
            if (state.products.length === 1) {
                state.products = [{ ...action.payload.product }]
                state.totalQuantity += 1
                state.totalPrice += action.payload.product.price
            } else {
                state.products.splice(action.payload.index, 1, action.payload.product)
                state.totalQuantity += 1
                state.totalPrice += action.payload.product.price
            }

        },
        removeItem: (state, action) => {
            let item = state.products[action.payload.outerIndex]
            if (item.size.length === 1) {
                state.totalQuantity -= 1
                state.totalPrice -= item.prices[0]
                if (state.products.length === 1) {
                    state.products = []
                } else {
                    state.products.splice(action.payload.outerIndex, 1)
                }
            } else {
                item.size.splice(action.payload.index, 1)
                item.color.splice(action.payload.index, 1)
                item.img.splice(action.payload.index, 1)
                item.prices.splice(action.payload.index, 1)
                item.quantity -= 1
                state.totalQuantity -= 1
                state.totalPrice -= item.prices[0]
                state.products.splice(action.payload.outerIndex, 1, item)
            }

        },
        removeCartItem: (state, action) => {
            let item = state.products[action.payload.index]
            state.totalQuantity -= 1
            state.totalPrice -= item.prices[0]
            if (state.products.length === 1) {
                state.products = []
            } else {
                state.products.splice(action.payload.index, 1)
            }
        },
        deleteCart :(state,action)=>{
            state.products = []
            state.totalQuantity = 0
            state.totalPrice = 0
        }
    }
})

export const { addProduct, updateProduct, removeItem, removeCartItem, deleteCart } = cartSlice.actions

export default cartSlice.reducer