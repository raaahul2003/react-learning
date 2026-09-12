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
        decrement: (state,action) => {
            state.count--
        },
        reset: (state,action) => {
            state.count = 0
        }

    }
})
export const {increment} =counterSlice.actions
export const {decrement} =counterSlice.actions
export const {reset} =counterSlice.actions
export default counterSlice.reducer