import { createSlice } from "@reduxjs/toolkit"


const bagSlice = createSlice({
    name: "bag",
    initialState: [],

    reducers: {
        addToBag: (state, action) => {
           state.push(action.payload);
        //    state change 
        },
    removeFromBag: (state, action) => {
       return  state.filter(itemId=> itemId !== action.payload)
        },
// new state thats why return 
    }
})

export const bagActions = bagSlice.actions;

export default bagSlice;





