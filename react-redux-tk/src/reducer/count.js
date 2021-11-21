//分片
import { createSlice } from "@reduxjs/toolkit";

export const counterSlice = createSlice({
    name: 'counter',
    initialState: {
        value: 0,
    },
    reducers:{
        increment:(state) => {
            //这里的状态任然是immutable的，这里的状态是草稿draft
            state.value += 1;
        },
        decrement:(state) => {
            state.value -= 1
        },
        incrementByAmount(state, action){
            state.value += action.payload;
        }
    }
});

//暴露actions
export const { increment, decrement, incrementByAmount } = counterSlice.actions;
export default counterSlice.reducer;
