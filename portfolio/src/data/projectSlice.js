import { createSlice } from "@reduxjs/toolkit";


export const projectSlice = createSlice({
  name: 'project',
  initialState: {selected: ''},
  reducers: {
    changeProject: (state, action) => {
      state.selected = action.payload;
    }
  }
})


export const {changeProject} = projectSlice.actions;

export default projectSlice.reducer;