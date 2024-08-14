// "use client";
// import { createSlice } from "@reduxjs/toolkit";

// const cartSlice = createSlice({
//   name: "Cart",
//   initialState: [],
//   reducers: {
//     add(state, action) {
//       const existingItem = state.find((item) => item.id === action.payload.id);
//       if (existingItem) {
//         existingItem.quantity += action.payload.quantity;
//       } else {
//         state.push(action.payload);
//       }
//     },
//     remove(state, action) {
//       return state.filter((item) => item.id !== action.payload);
//     },
//   },
// });

// export const { add, remove } = cartSlice.actions;
// export default cartSlice.reducer;

"use client";
import { createSlice } from "@reduxjs/toolkit";

const cartSlice = createSlice({
  name: "Cart",
  initialState: [],
  reducers: {
    add(state, action) {
      const existingItem = state.find((item) => item.id === action.payload.id);
      if (existingItem) {
        existingItem.quantity += action.payload.quantity;
      } else {
        state.push(action.payload);
      }
    },
    remove(state, action) {
      return state.filter((item) => item.id !== action.payload);
    },
    checkout(state) {
      return [];
    },
  },
});

export const { add, remove, checkout } = cartSlice.actions;
export default cartSlice.reducer;
