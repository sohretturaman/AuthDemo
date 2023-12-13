/** @format */

import Axios from "axios";

const API_WEB_KEY = "AIzaSyBPmyr7k4gEVzav3s95lXmbh0Btxl0LVLY";
async function AuthFunction(mode, email, password) {
  const response = await Axios.post(
    `https://identitytoolkit.googleapis.com/v1/accounts:${mode}?key=${API_WEB_KEY}`,
    {
      email: email,
      password: password,
      returnSecureToken: true,
    }
  );

  console.log("main auth func is worked", response.data ? "true" : "no data");

  return response.data.idToken;
}

export function SignUp(email, password) {
  return AuthFunction("signUp", email, password);
}

export function Login(email, password) {
  return AuthFunction("signInWithPassword", email, password);
}
