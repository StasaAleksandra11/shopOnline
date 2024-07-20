import { createSlice } from "@reduxjs/toolkit";


const cartSlice = createSlice({
    name: 'cart',
    initialState: {
        cart: [],
        totalProduct: 0
    },
    reducers: {
        saveInCartAction: (state, action) => {
            console.log(action.payload)

            let copyCart = [...state.cart]

            let findIndex = null

            copyCart.find((item, index) => {
                if (item.id === action.payload.id) {
                    findIndex = index
                    return;
                }
            })

            if (findIndex === null) {
                copyCart.push({ ...action.payload, count: 1, cartTotal: action.payload.price })
                state.totalProduct++;
            } else {
                copyCart[findIndex].count++;
            }

            state.cart = copyCart;

            localStorage.setItem('cart_item', JSON.stringify(copyCart))
            localStorage.setItem('cart_total', JSON.stringify(state.totalProduct))

        },

        deleteCartAction : (state, action)=>{
            console.log(action.payload)
        }

      
}
 

})

export const { saveInCartAction } = cartSlice.actions
export default cartSlice.reducer     