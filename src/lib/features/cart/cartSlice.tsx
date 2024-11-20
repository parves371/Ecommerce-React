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

// Function to load cart state from localStorage
const loadCartFromLocalStorage = (): CartState => {
  const savedCart = localStorage.getItem("cart");
  return savedCart ? JSON.parse(savedCart) : { items: [] };
};

// Function to save cart state to localStorage
const saveCartToLocalStorage = (state: CartState) => {
  localStorage.setItem("cart", JSON.stringify(state));
};

const initialState: CartState = loadCartFromLocalStorage();

export const cartSlice = createSlice({
  name: "cart",
  initialState,
  reducers: {
    addToCart: (state, action: PayloadAction<CartItem>) => {
      const existingItem = state.items.find(
        (item) => item.id === action.payload.id
      );

      if (existingItem) {
        // Update quantity
        existingItem.quantity += action.payload.quantity;

        // Update color and size only if provided
        if (action.payload.selectedColor) {
          existingItem.selectedColor = action.payload.selectedColor;
        }
        if (action.payload.selectedSize) {
          existingItem.selectedSize = action.payload.selectedSize;
        }
      } else {
        // Add new item to cart
        state.items.push({
          ...action.payload,
          imgSrcDefault:
            action.payload.imgSrcDefault || "/imgs/default-product.jpg", // Default image
        });
      }

      // Save updated state to localStorage
      saveCartToLocalStorage(state);
    },

    removeFromCart: (state, action: PayloadAction<number>) => {
      state.items = state.items.filter((item) => item.id !== action.payload);
      saveCartToLocalStorage(state); // Save updated state to localStorage
    },

    updateQuantity: (
      state,
      action: PayloadAction<{ id: number; quantity: number }>
    ) => {
      const item = state.items.find((item) => item.id === action.payload.id);
      if (item) {
        item.quantity = action.payload.quantity;
      }
      saveCartToLocalStorage(state); // Save updated state to localStorage
    },

    clearCart: (state) => {
      state.items = [];
      saveCartToLocalStorage(state); // Save updated state to localStorage
    },
  },
});

// Export actions
export const { addToCart, removeFromCart, updateQuantity, clearCart } =
  cartSlice.actions;

// Export reducer
export default cartSlice.reducer;
