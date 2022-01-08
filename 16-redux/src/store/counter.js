import { createSlice } from '@reduxjs/toolkit';

const initialCounterState = { counter: 0, showCounter: true };

export const counterSlice = createSlice({
  name: 'counter',
  initialState: initialCounterState,
  reducers: {
    increment(state,action) {
      state.counter +=action.payload;
    },
    decrement(state) {
      state.counter--;
    },
    toggle(state) {
      state.showCounter = !state.showCounter;
    }
  }
})

export const counterActions = counterSlice.actions;
