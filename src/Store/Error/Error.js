import { createSlice } from "@reduxjs/toolkit";

const Error = createSlice({
  name: "error",
  initialState: {
    errorList: [],
  },
  reducers: {
    editError: (state, action) => {
      state.errorList = action.payload;
    },
  },
});

export const { editError } = Error.actions;

export default Error.reducer;