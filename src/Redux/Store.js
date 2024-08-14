// import { configureStore } from "@reduxjs/toolkit";
// import cartReducer from "./Cartslice";

// const loadCartState = () => {
//   try {
//     const serializedState = localStorage.getItem("cart");
//     if (serializedState === null) {
//       return undefined;
//     }
//     return JSON.parse(serializedState);
//   } catch (err) {
//     return undefined;
//   }
// };

// const saveCartState = (state) => {
//   try {
//     const uniqueItems = state.filter(
//       (item, index, self) => index === self.findIndex((i) => i.id === item.id)
//     );

//     const serializedState = JSON.stringify(uniqueItems);
//     localStorage.setItem("cart", serializedState);
//   } catch {
//     // Ignore write errors
//   }
// };

// const store = configureStore({
//   reducer: {
//     cart: cartReducer,
//   },
//   preloadedState: loadCartState(),
// });

// store.subscribe(() => {
//   saveCartState(store.getState().cart);
// });

// export default store;

import { configureStore } from "@reduxjs/toolkit";
import cartReducer from "./Cartslice";

const loadCartState = () => {
  try {
    const serializedState = localStorage.getItem("cart");
    if (serializedState === null) {
      return { cart: [] };
    }
    return { cart: JSON.parse(serializedState) };
  } catch (err) {
    return { cart: [] };
  }
};

const saveCartState = (state) => {
  try {
    const uniqueItems = state.cart.filter(
      (item, index, self) => index === self.findIndex((i) => i.id === item.id)
    );

    const serializedState = JSON.stringify(uniqueItems);
    localStorage.setItem("cart", serializedState);
  } catch {
    // Ignore write errors
  }
};

const store = configureStore({
  reducer: {
    cart: cartReducer,
  },
  preloadedState: loadCartState(),
});

store.subscribe(() => {
  saveCartState(store.getState());
});

export default store;
