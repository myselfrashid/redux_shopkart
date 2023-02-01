const { createSlice } = require("@reduxjs/toolkit");

const initialState = [];

const cartSlice = createSlice({
  name: "cart",
  initialState,
  quantity:0, 
  reducers: {
    add(state, action) {
      let itemInCart = state.find(
        (product) => product.id === action.payload.id
      );
      if (itemInCart) {
        itemInCart.quantity++;
      } else {
        state.push({ ...action.payload, quantity: 1 });
      }
    },
    remove(state, action) {
      return state.filter((item) => item.id !== action.payload);
    },
  },
});

export const { add, remove } = cartSlice.actions;
export default cartSlice.reducer;
