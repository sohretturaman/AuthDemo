/** @format */

import { useNavigation } from "@react-navigation/native";
import axios from "axios";
import { useEffect, useState } from "react";
import { Button, StyleSheet, Text, View } from "react-native";

function WelcomeScreen() {
  const navigation = useNavigation();
  const [users, setUsers] = useState([]);

  useEffect(() => {
    const getDataFromFb = async () => {
      axios.get(
        "https://expensetricker-default-rtdb.firebaseio.com/message.json"
      );
    };
    getDataFromFb();
  }, []);

  return (
    <View style={styles.rootContainer}>
      <Text style={styles.title}>Welcome!</Text>
      <Text>You authenticated successfully!</Text>
      <Button title="switch home" onPress={navigation.navigate("Home")} />
    </View>
  );
}

export default WelcomeScreen;

const styles = StyleSheet.create({
  rootContainer: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    padding: 32,
  },
  title: {
    fontSize: 20,
    fontWeight: "bold",
    marginBottom: 8,
  },
});
