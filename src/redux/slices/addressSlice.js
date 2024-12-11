import { createSlice } from '@reduxjs/toolkit';

const addressSlice = createSlice({
  name: 'addresses',
  initialState: [],
  reducers: {
    setAddresses: (state, action) => action.payload,
    addAddress: (state, action) => [...state, action.payload],
    updateAddress: (state, action) =>
      state.map((addr) => (addr.id === action.payload.id ? action.payload : addr)),
    deleteAddress: (state, action) => state.filter((addr) => addr.id !== action.payload),
  },
});

export const { setAddresses, addAddress, updateAddress, deleteAddress } = addressSlice.actions;
export default addressSlice.reducer;
