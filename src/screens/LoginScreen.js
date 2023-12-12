/** @format */

import { useState } from "react";
import AuthContent from "../components/Auth/AuthContent";
import { Login } from "../util/AuthHttp";
import LoadingOverlay from "../components/ui/LoadingOverlay";
import { useNavigation } from "@react-navigation/native";

function LoginScreen() {
  const navigation = useNavigation();
  const [error, setError] = useState("");
  const [isLoading, setIsLoading] = useState(false);

  async function handleLogin({ email, password }) {
    setIsLoading(true);
    try {
      await Login(email, password);
      navigation.navigate("Home");
    } catch (error) {
      setError("could not logged in", error.message);
    }
    setIsLoading(false);
  }

  if (isLoading) {
    return <LoadingOverlay message={"user is logging in"} />;
  }

  return <AuthContent isLogin onAuthenticate={handleLogin} />;
}

export default LoginScreen;
