/** @format */

import { useState } from "react";
import AuthContent from "../components/Auth/AuthContent";
import { SignUp } from "../util/AuthHttp";
import { View } from "react-native";
import { useNavigation } from "@react-navigation/native";

function SignupScreen() {
  const navigation = useNavigation();
  const [error, setError] = useState("");
  const [isLoading, setIsLoading] = useState(false);

  async function handleSignup({ email, password }) {
    // !! you should use object destructuring here
    setIsLoading(true);
    try {
      await SignUp(email, password);
      navigation.navigate("Login");
    } catch (error) {
      setError("could not sign up a new user", error.message);
    }
    setIsLoading(false);
  }
  return (
    <View style={{ flex: 1 }}>
      <AuthContent onAuthenticate={handleSignup} />
    </View>
  );
}

export default SignupScreen;
