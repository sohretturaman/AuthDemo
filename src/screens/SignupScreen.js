/** @format */

import { useDebugValue, useState } from "react";
import AuthContent from "../components/Auth/AuthContent";
import { SignUp } from "../util/AuthHttp";
import { View } from "react-native";
import { useNavigation } from "@react-navigation/native";
import LoadingOverlay from "../components/ui/LoadingOverlay";

function SignupScreen() {
  console.log("signup scren");

  const navigation = useNavigation();
  const [errMessage, setErrMessage] = useState("");
  const [isLoading, setIsLoading] = useState(false);

  async function handleSignup({ email, password }) {
    setIsLoading(true);
    try {
      await SignUp(email, password);
      navigation.navigate("Login"); // will take token from login screen
    } catch (error) {
      setErrMessage("could not sign up a new user", error.message);
      console.log("could not save new user", error);

      setIsLoading(false);
    }
  }

  if (isLoading) {
    return <LoadingOverlay message={"user is logging in"} />;
  }
  if (errMessage) {
    <LoadingOverlay message={errMessage} />;
  }

  return (
    <View style={{ flex: 1 }}>
      <AuthContent onAuthenticate={handleSignup} />
    </View>
  );
}

export default SignupScreen;
