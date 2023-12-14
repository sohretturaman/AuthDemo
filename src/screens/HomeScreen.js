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
      <Text>Home page</Text>
      <Pressable
        onPress={handleLogout}
        style={{
          margin: 10,
          padding: 10,
          maxWidth: 200,
          alignSelf: "center",
          borderRadius: 5,
          backgroundColor: "#A968B3",
        }}
      >
        <Text style={{ color: "white", fontWeight: "bold" }}>Logout </Text>
      </Pressable>
      <View
        style={{
          margin: 10,
          padding: 10,
          maxWidth: 200,
          alignSelf: "center",
          borderRadius: 20,
        }}
      >
        <Button
          title="switch welcome"
          color={"#A968B3"}
          onPress={() => navigation.navigate("Welcome")}
        />
      </View>
    </View>
  );
};

export default HomeScreen;

const styles = StyleSheet.create({});
