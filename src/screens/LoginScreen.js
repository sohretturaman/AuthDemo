/** @format */

import { useContext, useEffect, useState } from "react";
import AuthContent from "../components/Auth/AuthContent";
import { Login } from "../util/AuthHttp";
import LoadingOverlay from "../components/ui/LoadingOverlay";
import { useNavigation } from "@react-navigation/native";
import { AuthContext } from "../store/AuthContext";
import { useDispatch } from "react-redux";
import { LoginUser } from "../store/AuthSlice";

function LoginScreen() {
  console.log("login screen");
  const navigation = useNavigation();
  const [errMessage, setErrMessage] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  const dispatch = useDispatch();

  async function handleLogin({ email, password }) {
    setIsLoading(true);
    try {
      const tokenId = await Login(email, password); // use await
      if (tokenId) {
        dispatch(LoginUser(tokenId)); // After that work, it autmatically navigates to welcome screen
      }
    } catch (error) {
      setErrMessage("could not logged in", error.message);
      console.log("could not logged in ", error, "values", email, password);
      setIsLoading(false);
    }
  }

  if (isLoading) {
    return <LoadingOverlay message={"user is logging in"} />;
  }
  if (errMessage) {
    <LoadingOverlay message={errMessage} />;
  }

  return <AuthContent isLogin onAuthenticate={handleLogin} />;
}

export default LoginScreen;
