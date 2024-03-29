import { createSlice } from '@reduxjs/toolkit';

export const filterSlice = createSlice({
  name: 'filter',
  initialState: '',
  reducers: {
    changeFilter(state, action) {
      console.log('action.payload',action.payload)
        return action.payload;
    },
  },
});
export const { changeFilter } = filterSlice.actions;
export default  filterSlice.reducer;