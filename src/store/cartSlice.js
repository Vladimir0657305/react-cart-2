import { createSlice } from '@reduxjs/toolkit';


export const cartSlise = createSlice({
    name: 'cart',
    initialState: {
        value: {}
    },
    reducers: {
        increment: (state, data) => {
            let articul = data.payload;
            if (state.value[articul] === undefined) state.value[articul] = 0;
            state.value[articul]++
        },

        decrement: (state, data) => {
            let articul = data.payload;

            if (state.value[articul] === undefined) {
                state.value[articul] = 0;
            }
            else if (state.value[articul] < 0) {
                state.value[articul] = 0;
            }
            else {
                state.value[articul]--;
                if (state.value[articul] < 0) {
                    state.value[articul] = 0;
                }
            }
        },

        deleteCart: (state, data) => {
            let articul = data.payload;
            if (state.value[articul])
                state.value[articul] = '';
        }
    }
})

export const { increment, decrement, deleteCart } = cartSlise.actions;
export const selectCart = state => state.cart.value;
export default cartSlise.reducer;