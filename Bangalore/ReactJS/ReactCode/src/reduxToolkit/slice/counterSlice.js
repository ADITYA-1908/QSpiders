import { createSlice } from "@reduxjs/toolkit";

let counterSlice = createSlice({
    name: 'counter',
    initialState: { value: 0 },
    reducers: {
        increment: (state) => { (state.value += 1) },
        decrement: (state) => { (state.value -= 1) },
        incrementByNumber: (state, action) => { state.value += action.payload },
        reset: (state) => { (state.value = 0) }
    }
})

export const { increment, decrement, reset, incrementByNumber } = counterSlice.actions
export default counterSlice.reducer