/** @format */

import { Button, Pressable, StyleSheet, Text, View } from "react-native";
import React, { useEffect } from "react";
import { useNavigation, useRoute } from "@react-navigation/native";
import { useDispatch, useSelector } from "react-redux";
import { LogoutUser } from "../store/AuthSlice"; // Import LogoutUser action

const HomeScreen = () => {
  const navigation = useNavigation();
  const dispatch = useDispatch(); // Import useDispatch from react-redux

  const selector = useSelector((state) => state.AuthToken);
  console.log("selector value **** new ", selector);

  return (
    <View>
      <Text>Home</Text>
      <Pressable onPress={() => dispatch(LogoutUser())}>
        <Text>Logout </Text>
      </Pressable>
      <Button
        title="switch welcome"
        onPress={() => navigation.navigate("Welcome")}
      />
    </View>
  );
};

export default HomeScreen;

const styles = StyleSheet.create({});
