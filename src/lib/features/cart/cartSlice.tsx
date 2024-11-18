import { createSlice } from "@reduxjs/toolkit";
import type { PayloadAction } from "@reduxjs/toolkit";

// Define the type for individual cart items
export interface CartItem {
  id: number;
  title: string;
  price: number;
  quantity: number;
  imgSrcDefault: string; // Added property for product image
  selectedColor?: string;
  selectedSize?: string;
}

// Define the cart state
export interface CartState {
  items: CartItem[]; // Array of CartItem
}

const initialState: CartState = {
  items: [],
};

export const cartSlice = createSlice({
  name: "cart",
  initialState,
  reducers: {
    // Add an item to the cart
    addToCart: (state, action: PayloadAction<CartItem>) => {
      const existingItem = state.items.find(
        (item) => item.id === action.payload.id
      );

      if (existingItem) {
        existingItem.quantity += action.payload.quantity;
      } else {
        state.items.push({
          ...action.payload,
          imgSrcDefault:
            action.payload.imgSrcDefault || "/imgs/default-product.jpg", // Ensure a default image
        });
      }
    },
    // Remove an item from the cart
    removeFromCart: (state, action: PayloadAction<number>) => {
      state.items = state.items.filter((item) => item.id !== action.payload);
    },
    // Update the quantity of a specific item
    updateQuantity: (
      state,
      action: PayloadAction<{ id: number; quantity: number }>
    ) => {
      const item = state.items.find((item) => item.id === action.payload.id);
      if (item) {
        item.quantity = action.payload.quantity;
      }
    },
    // Clear all items in the cart
    clearCart: (state) => {
      state.items = [];
    },
  },
});

// Export actions
export const { addToCart, removeFromCart, updateQuantity, clearCart } =
  cartSlice.actions;

// Export reducer
export default cartSlice.reducer;
