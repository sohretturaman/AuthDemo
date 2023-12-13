/** @format */

import { Button, Pressable, StyleSheet, Text, View } from "react-native";
import { useEffect } from "react";
import { useNavigation, useRoute } from "@react-navigation/native";
import { useDispatch, useSelector } from "react-redux";
import { LogoutUser } from "../store/AuthSlice"; // Import LogoutUser action

const HomeScreen = () => {
  const navigation = useNavigation();
  const dispatch = useDispatch(); // Import useDispatch from react-redux

  const selector = useSelector((state) => state.AuthToken);
  console.log("selector value **** new ", selector);

  {
    /**
   useEffect(() => {
    //move dispath fuch to update component
    const selector = useSelector((state) => state.AuthToken);
    console.log("selector value **** new ", selector);
  }, []);  //cousing error 
 */
  }

  function handleLogout() {
    dispatch(LogoutUser());
  }
  return (
    <View>
      <Text>Home</Text>
      <Pressable onPress={handleLogout}>
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
