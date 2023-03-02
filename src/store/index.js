import { configureStore } from "@reduxjs/toolkit";
import productsSlice from './reducers/products.reducer'


export const store = configureStore({
    reducer: {
        products: productsSlice
    }
})