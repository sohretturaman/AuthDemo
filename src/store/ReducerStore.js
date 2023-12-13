/** @format */

import { configureStore } from "@reduxjs/toolkit";
import AuthReducer from "./AuthReducer";
import AuthSlice from "./AuthSlice";

const Store = configureStore({
  reducer: {
    AuthToken: AuthSlice,
  },
});

export default Store;

{
  /**for reducers without slice 
const ReduxStore = configureStore({
  reducer: {
    AuthToken: AuthReducer,
  },
});

export default ReduxStore;

*/
}
