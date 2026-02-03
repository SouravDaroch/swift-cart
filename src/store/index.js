import {configureStore, createSlice} from "@reduxjs/toolkit"
import productsSlice from "./productsSlice";
import fetchStatusSlice from "./fetchStatusSlice";
import bagSlice from "./bagSlice";
import searchSlice from "./searchSlice";


const swiftcartStore = configureStore({
    reducer:{ products: productsSlice.reducer,
        fetchStatus : fetchStatusSlice.reducer,
        bag: bagSlice.reducer,
        search : searchSlice.reducer
    }
})

export default swiftcartStore;