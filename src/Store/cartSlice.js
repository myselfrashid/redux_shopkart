const { createSlice } = require("@reduxjs/toolkit");

const initialState = {
  cartItems: localStorage.getItem("cartItems")
    ? JSON.parse(localStorage.getItem("cartItems"))
    : [],
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
        state.cartItems[existingItem].cartQuantity += 1;
      } else {
        state.cartItems.push({ ...action.payload, cartQuantity: 1 });
      }
      localStorage.setItem("cartItems", JSON.stringify(state.cartItems));
    },
    decrease(state, action) {
      const itemIndex = state.cartItems.findIndex(
        (product) => product.id === action.payload.id
      );
      if (state.cartItems[itemIndex].cartQuantity > 1) {
        state.cartItems[itemIndex].cartQuantity -= 1;
      } else if (state.cartItems[itemIndex].cartQuantity === 1) {
        const newCartItems = state.cartItems.filter(
          (product) => product.id !== action.payload.id
        );
        state.cartItems = newCartItems;
      }
      localStorage.setItem("cartItems", JSON.stringify(state.cartItems));
    },
    remove(state, action) {
      state.cartItems.map((cartItem) => {
        if (cartItem.id === action.payload.id) {
          const newCartItems = state.cartItems.filter(
            (product) => product.id !== cartItem.id
          );
          state.cartItems = newCartItems;
        }
        localStorage.setItem("cartItems", JSON.stringify(state.cartItems));
        return state;
      });
    },
    totalAmount(state, action) {
      let { total, quantity } = state.cartItems.reduce(
        (cartTotal, cartItem) => {
          const { price, cartQuantity } = cartItem;
          const itemTotal = price * cartQuantity;
          cartTotal.total += itemTotal;
          cartItem.quantity += cartQuantity;
          return cartTotal;
        },
        {
          total: 0,
          quantity: 0,
        }
      );
      total = parseFloat(Math.floor(total))
      state.cartTotalQuantity = quantity;
      state.cartTotalAmount = total;
    },
  },
});

export const { add, decrease, remove, totalAmount } = cartSlice.actions;
export default cartSlice.reducer;
