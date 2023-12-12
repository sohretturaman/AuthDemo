/** @format */

import Axios from "axios";

const API_WEB_KEY = "AIzaSyBPmyr7k4gEVzav3s95lXmbh0Btxl0LVLY";
async function AuthFunction(mode, email, password) {
  // console.log("main auth is worked",'mode', mode, 'email', email,'password', password);

  const response = await Axios.post(
    `https://identitytoolkit.googleapis.com/v1/accounts:${mode}?key=${API_WEB_KEY}`,
    {
      email: email,
      password: password,
      returnSecureToken: true,
    }
  );

  console.log("response.data", response.data);
  // response.data; // we need he token actually
}

export async function SignUp(email, password) {
  //console.log("function signup is worker data is ", email, password);

  await AuthFunction("signUp", email, password);
}

export async function Login(email, password) {
  await AuthFunction("signInWithPassword", email, password);
}
