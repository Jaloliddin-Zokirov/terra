import { configureStore } from "@reduxjs/toolkit";
import Error from "./Error/Error";
import Lang from './Lang/Lang';

const Store = configureStore({
  reducer: {
    error: Error,
    lang: Lang,
  },
});

export default Store;

