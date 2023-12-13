/** @format */

{
  /**
created context api but didn't use it in this project

import React, { createContext, useReducer, useState } from "react";

export const AuthContext = createContext({
  token: "",
  isVerified: false,
  Login: (token) => {},
  Logout: () => {},
});

function authReducer(state, action) {
  switch (action.type) {
    case "LOGIN":
      return { token: action.payload };

    case "LOGOUT":
      return { token: null };

    default:
      return state;
  }
}

function AuthContextProvider({ children }) {
  const [state, dispatch] = useReducer(authReducer, {
    token: "",
  });
  function Login(token) {
    dispatch({ type: "LOGIN", payload: token });
  }

  function Logout(token) {
    dispatch({ type: "LOGOUT", payload: token });
  }
  console.log("state values in authcontextprovider", state);

  const value = {
    token: state,
    isVerified: !!state, //converts to boolean value !'
    Login: Login,
    Logout: Logout,
  };

  return <AuthContext.Provider value={value}> {children}</AuthContext.Provider>;
}

export default AuthContextProvider;

*/
}
