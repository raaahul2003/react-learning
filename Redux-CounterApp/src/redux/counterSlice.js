import { createSlice } from "@reduxjs/toolkit";

const counterSlice = createSlice({
    name: "counter",
    initialState: {
        count: 0
    },
    reducers: {
        increment: (state, action) => {
            state.count++
        },
        decrement: (state) => {
            state.count--
        },
        reset: (state) => {
            // state.count = 0 //runs because immer library in reduxtoolkit
            return {...state,count: 0} //old style while using redux
        },
        incrementByAmount:(state,action) => {
            state.count+=action.payload
        }
        

    }
})
export const {increment} =counterSlice.actions
export const {decrement} =counterSlice.actions
export const {reset} =counterSlice.actions
export const {incrementByAmount} =counterSlice.actions

export default counterSlice.reducer