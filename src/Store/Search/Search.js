import { createSlice } from "@reduxjs/toolkit";

const Search = createSlice({
  name: "search",
  initialState: {
    search: '',
  },
  reducers: {
    editSearch: (state, action) => {
      state.search = action.payload;
    },
  },
});

export const { editSearch } = Search.actions;

export default Search.reducer;