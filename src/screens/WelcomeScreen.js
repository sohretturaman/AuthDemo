/** @format */

import { useNavigation } from "@react-navigation/native";
import axios from "axios";
import { useEffect, useState } from "react";
import { Button, StyleSheet, Text, View } from "react-native";
import { useSelector } from "react-redux";

function WelcomeScreen() {
  const navigation = useNavigation();
  const [messages, setMessages] = useState("");

  const tokenVal = useSelector((state) => state.AuthToken);

  useEffect(() => {
    const getDataFromFb = async () => {
      await axios
        .get(
          "https://expensetricker-default-rtdb.firebaseio.com/message.json?auth=" +
            tokenVal
        )
        .then((res) => {
          setMessages(res.data);
          console.log("data from firebase", res.data);
        });
    };

    getDataFromFb();
  }, [tokenVal]);

  return (
    <View style={styles.rootContainer}>
      <Text style={styles.title}>Welcome!</Text>
      <Text>You authenticated successfully!</Text>
      <Text>{messages}</Text>
      <Button title="switch home" onPress={() => navigation.navigate("Home")} />
    </View>
  );
}
//must use arrow functions

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

// Rest api 's genrally don't know the user is authiticated or not , you generally send the information
//that you are authiticated with token

//firebase rule is
/**
  {
  "rules": {
    ".read": "auth.uid != null",  // 2024-1-6
    ".write": "auth.uid != null",  // 2024-1-6
  }
}
 */
