
import { createSlice } from "@reduxjs/toolkit"

const productSlice = createSlice({
    name: 'product',
    initialState: {
        allProducts : [],
        isLoading : false,
       selectCategory: '',
       searchProducts: ''
    },
    reducers: {
        saveAllProductsAction : (state, action) => {
            state.allProducts = action.payload
            state.isLoading = true
        },
        saveSelectCategoryAction : (state, action) => {
            state.selectCategory = action.payload
        },
        saveSearchProductAction : (state, action) => {
            console.log(action.payload)
            state.searchProducts = action.payload
        }
    
    }
})

export const {saveAllProductsAction, saveSelectCategoryAction, saveSearchProductAction} = productSlice.actions
export default productSlice.reducer