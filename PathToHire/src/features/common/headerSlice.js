import { createSlice } from '@reduxjs/toolkit';
//redux helps manage the state of the application in a predictable way. It is a state management library.
//It helps you store all the app’s state in one central place, instead of having state scattered across components.
// A slice is a collection of Redux reducer logic and actions for a single feature of the app.
// Here, we are creating a slice for managing the header state, specifically the page title.
//React-Redux is a library that provides bindings to use Redux with React applications.

export const headerSlice = createSlice({
  name: 'header',
  initialState: {
    pageTitle: "Home",
  },
  reducers: {    
    setPageTitle: (state, action) => {
      state.pageTitle = action.payload.title;
    },    
  },
});
export const { setPageTitle } = headerSlice.actions;
export default headerSlice.reducer;

