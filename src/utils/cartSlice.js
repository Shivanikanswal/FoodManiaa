import { createSlice } from "@reduxjs/toolkit";

const cartSlice = createSlice({
  name: "cart",
  initialState: {
    items: [],
  },
  reducers: {
    addItems: (state, action) => {
      // console.log("add to cart action called");
      state.items.push(action.payload); //mutating the state here/directly modifying the state
    },
    removeItems: (state) => {
      state.items.pop();
    },
    clearCart: (state) => {
      // console.log("clear cart action called");
      state.items.length = 0;
    },
  },
});

export const { addItems, clearCart, removeItems } = cartSlice.actions;
export default cartSlice.reducer;
