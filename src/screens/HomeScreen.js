/** @format */

import { Button, Pressable, StyleSheet, Text, View } from "react-native";
import React, { useEffect } from "react";
import { useNavigation, useRoute } from "@react-navigation/native";
import { useDispatch, useSelector } from "react-redux";
import { LoginUser, LogoutUser } from "../store/AuthSlice";

const HomeScreen = () => {
  const navigation = useNavigation();

  const selector = useSelector((state) => state.AuthToken);
  console.log("selctor value **** new ", selector);

  return (
    <View>
      <Text>Home</Text>
      <Pressable onPress={() => dispatch(LogoutUser())}>
        <Text>Logout </Text>
      </Pressable>
      <Button title="switch welcome" onPress={navigation.navigate("Welcome")} />
    </View>
  );
};

export default HomeScreen;

const styles = StyleSheet.create({});

{
  /**
 doğru kod örneği asyn için,

   const dispatch = useDispatch();

  useEffect(() => {
    const handleSavedUser = () => {
      dispatch(LoginUser(tokenId)); //you can take data from here too
    };
    // call the function
    handleSavedUser();
  }, []);

*/
}
