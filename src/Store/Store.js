import { configureStore } from "@reduxjs/toolkit";
import Error from "./Error/Error";
import Lang from './Lang/Lang';
import Search from './Search/Search';

const Store = configureStore({
  reducer: {
    error: Error,
    lang: Lang,
    search: Search,
  },
});

export default Store;

