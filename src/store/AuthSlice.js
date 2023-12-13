/** @format */

import AsyncStorage from "@react-native-async-storage/async-storage";
import { createSlice } from "@reduxjs/toolkit";

const AuthSlice = createSlice({
  name: "token",
  initialState: "",
  reducers: {
    LoginUser(state, action) {
      console.log("login functionis worked dispatch", action.payload);

      AsyncStorage.setItem("tokenId", action.payload);

      return action.payload;
    },
    LogoutUser(state) {
      console.log("logout is worked,state value", state);
      AsyncStorage.removeItem("tokenId");
      state = "";
      return state;
    },
  },
});

export const { LoginUser, LogoutUser } = AuthSlice.actions;
export default AuthSlice.reducer;

{
  /* as reducer actions then modified it
export const saveLoggedUser = (token) => ({
  type: "LOGIN",
  payload: token,
});

export const LogoutUser = () => ({
  type: "LOGOUT",
  payload: null,
});
*/
  //in  logout user funciton , return;
  // returns undefined value
}
