import { configureStore } from "@reduxjs/toolkit";
import Error from "./Error/Error";

const Store = configureStore({
  reducer: {
    error: Error,
  },
});

export default Store;
