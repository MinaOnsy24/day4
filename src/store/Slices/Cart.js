import { createSlice } from '@reduxjs/toolkit'

const initialState = []
const Cart = createSlice({
    name: "cart",
    initialState,
    reducers: {
        addProducts: (state, action) => {
            const product = state.find(item => item.id === action.payload.id)
            if (product) {
                product.count++
            } else {
                state.push({ ...action.payload, count: 1 })
            }
        },
        removProducts: (state, action) => {
            return state.filter(item => item.id !== action.payload.id)
        },
        removeSpecificProduct: (state, action) => {
            const existedProduct = state.findIndex(item => item.id === action.payload.id)
            if (existedProduct !== -1) {
                const product = state[existedProduct]
                if (product.count > 1) {
                    product.count--
                } else {
                    state.splice(existedProduct,1)
                }
            }
        }
    },
})

export const { addProducts, removProducts, removeSpecificProduct } = Cart.actions
export default Cart.reducer;

