import { createSlice } from "@reduxjs/toolkit"


const productsSlice = createSlice({
    name: "products",
    initialState: [],
    
    reducers: {
        addInitialItems: (state, action) => {
           return action.payload;
        },

    }
})

export const productsActions = productsSlice.actions;

export default productsSlice;





