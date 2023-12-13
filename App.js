/** @format */

import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { StatusBar } from "expo-status-bar";

import LoginScreen from "./src/screens/LoginScreen";
import SignupScreen from "./src/screens/SignupScreen";
import WelcomeScreen from "./src/screens/WelcomeScreen";
import { Colors } from "./src/components/constants/styles";
import HomeScreen from "./src/screens/HomeScreen";
import ReducerStore from "./src/store/ReducerStore";

import { Provider, useDispatch, useSelector } from "react-redux";
import { useEffect, useState } from "react";
import Async from "@react-native-async-storage/async-storage";
import AppLoading from "expo-app-loading";
const Stack = createNativeStackNavigator();

function AuthStack() {
  return (
    <Stack.Navigator
      screenOptions={{
        headerStyle: { backgroundColor: Colors.primary500 },
        headerTintColor: "white",
        contentStyle: { backgroundColor: Colors.primary100 },
      }}
    >
      <Stack.Screen name="Login" component={LoginScreen} />
      <Stack.Screen name="Signup" component={SignupScreen} />
    </Stack.Navigator>
  );
}

function AuthenticatedStack() {
  return (
    <Stack.Navigator
      screenOptions={{
        headerStyle: { backgroundColor: Colors.primary500 },
        headerTintColor: "white",
        contentStyle: { backgroundColor: Colors.primary100 },
      }}
    >
      <Stack.Screen name="Home" component={HomeScreen} />
      <Stack.Screen name="Welcome" component={WelcomeScreen} />
    </Stack.Navigator>
  );
}

function Navigation() {
  const token = useSelector((state) => state.AuthToken);
  console.log("token in appjs", token ? "data exist" : "NOOO data");

  return (
    <NavigationContainer>
      {token && <AuthenticatedStack />}
      {!token && <AuthStack />}
    </NavigationContainer>
  );
}

function Root() {
  const dispatch = useDispatch(); //uselogin func to save user
  const [islogginIn, setIsLogginIn] = useState(true);
  useEffect(() => {
    const getTokenFromAsync = async () => {
      const token = await Async.getItem("token");
      if (token) {
        dispatch({ type: "LOGIN", payload: token });
      }
      setIsLogginIn(false);
    };
    getTokenFromAsync();
  }, []);

  if (islogginIn) {
    return <AppLoading />;
  }

  return <Navigation />;
}

export default function App() {
  return (
    <Provider store={ReducerStore}>
      <Root />
    </Provider>
  );
}
