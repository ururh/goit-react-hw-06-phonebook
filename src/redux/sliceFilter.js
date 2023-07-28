import { createSlice } from '@reduxjs/toolkit';

export const sliceFilter = createSlice({
  name: 'filter',
  initialState: '',
  reducers: {
    qwery(state, action) {
      return (state = action.payload);
    },
  },
});

export const { qwery } = sliceFilter.actions;
