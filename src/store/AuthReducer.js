/** @format */
import AsyncStorage from "@react-native-async-storage/async-storage";

const initialState = {
  userToken: "initail value of token ",
};
async function AuthReducer(state = initialState, action) {
  console.log(
    "actions .payload value",
    action.paylaod,
    "state value",
    state.userToken
  );

  switch (action.type) {
    case "LOGIN":
      return {
        userToken: action.payload,
      };

    case "LOGOUT":
      console.log("logout is worked", action.paylaod);

      return {
        userToken: null,
      };

    default:
      return state;
  }
}

export default AuthReducer;
