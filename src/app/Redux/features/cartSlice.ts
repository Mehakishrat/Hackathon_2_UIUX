"use client";

import { createSlice, PayloadAction } from "@reduxjs/toolkit";

// Define types for the state and actions
interface CartItem {
  id: string;
  uuid: number;
  color?: string;
  size?: string;
  qty: number;
}

type CartState = CartItem[];

// Define the initial state using the type
const initialState: CartState = [];

export const store = createSlice({
  name: "product",
  initialState,
  reducers: {
    // add to cart functionality
    add(state, action: PayloadAction<Omit<CartItem, "uuid">>) {
      const uuid = Math.floor(1000 + Math.random() * 9000);
      const newobj = { ...action.payload, uuid };
      state.push(newobj);
    },
    // delete from cart
    remove(state, action: PayloadAction<number>) {
      return state.filter((val) => val.uuid !== action.payload);
    },
    // addition of item
    addition(state, action: PayloadAction<{ id: string; color?: string; size?: string }>) {
      const obj = state.find(
        (val) =>
          val.id === action.payload.id &&
          val.color === action.payload.color &&
          val.size === action.payload.size
      );
      if (obj) {
        obj.qty += 1;
      }
    },
    // subtraction of item
    subraction(state, action: PayloadAction<{ id: string; color?: string; size?: string }>) {
      const obj = state.find(
        (val) =>
          val.id === action.payload.id &&
          val.color === action.payload.color &&
          val.size === action.payload.size
      );
      if (obj && obj.qty > 1) {
        obj.qty -= 1;
      }
    },
    // Action to clear the cart and remove order from localStorage
    removeOrderFromLocalStorage(state) {
      state.length = 0;
      localStorage.removeItem("cart");
    },
  },
});

export const { add, remove, subraction, addition, removeOrderFromLocalStorage } =
  store.actions;

export default store.reducer;
