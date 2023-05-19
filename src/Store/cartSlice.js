const { createSlice } = require("@reduxjs/toolkit");

const initialState = {
  cartItems: [],
  cartTotalQuantity: 0,
  cartTotalAmount: 0,
};

const cartSlice = createSlice({
  name: "cart",
  initialState,
  quantity: 0,
  reducers: {
    add(state, action) {
      let existingItem = state.cartItems.findIndex(
        (item) => item.id === action.payload.id
      );
      if (existingItem >= 0) {
        state.cartItems[existingItem].quantity += 1;
      } else {
        state.cartItems.push({ ...action.payload, quantity: 1 });
      }
    },
    remove(state, action) {
      state.cartItems.map((cartItem) => {
        if (cartItem.id === action.payload.id) {
          const nextCartItems = state.cartItems.filter(
            (product) => product.id !== cartItem.id
          );
          state.cartItems = nextCartItems;
        }
        return state;
      });
    },
  },
});

export const { add, remove } = cartSlice.actions;
export default cartSlice.reducer;
