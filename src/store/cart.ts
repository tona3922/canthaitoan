import { createSlice } from "@reduxjs/toolkit";
export type TProduct = {
  productListId: string[];
};
const initialState: TProduct = { productListId: [] };
export const cart = createSlice({
  name: "cart",
  initialState,
  reducers: {
    pushname(state, action) {
      state.productListId.push(action.payload.id);
    },
  },
});
