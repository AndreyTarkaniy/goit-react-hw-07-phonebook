import { createSlice } from '@reduxjs/toolkit';

const filterSlice = createSlice({
  name: 'filter',
  initialState: '',
  reducers: {
    changeFilterName: (state, { payload }) => {
      return (state = payload);
    },
  },
});

export const filterReducer = filterSlice.reducer;

export const { changeFilterName } = filterSlice.actions;
