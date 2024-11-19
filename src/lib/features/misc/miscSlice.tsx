import type { PayloadAction } from "@reduxjs/toolkit";
import { createSlice } from "@reduxjs/toolkit";

// Define the type for the state
export interface MiscState {
  isShopModalOpen: boolean;
}

// Define the initial state
const initialState: MiscState = {
  isShopModalOpen: false,
};

export const miscSlice = createSlice({
  name: "misc",
  initialState,
  reducers: {
    // Set the shop modal state explicitly
    setShopModalState: (state, action: PayloadAction<boolean>) => {
      state.isShopModalOpen = action.payload;
    },
  },
});

// Export actions
export const { setShopModalState } = miscSlice.actions;

// Export reducer
export default miscSlice.reducer;
