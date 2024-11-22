import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  name: '',
  email: '',
};

const formSlice = createSlice({
  name: 'form',
  initialState,
  reducers: {
    updateField: (state, action) => {
      const { field, value } = action.payload;
      state[field] = value; // Update the specific field
    },
    resetForm: () => initialState, // Reset form to initial state
  },
});

export const { updateField, resetForm } = formSlice.actions;
export default formSlice.reducer;
