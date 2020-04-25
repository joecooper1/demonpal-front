import { StyleSheet, Dimensions } from "react-native";

const { width: winWidth, height: winHeight } = Dimensions.get("window");

export default StyleSheet.create({
  form: {
    width: "100%",
    height: "100%",
    display: "flex",
    flexDirection: "column",
    justifyContent: "space-evenly",
    alignItems: "center",
  },
  textInputBox: {
    width: "80%",
    backgroundColor: "white",
    color: "black",
    textAlign: "center",
  },
  submitButton: {
    width: "60%",
    height: 40,
    backgroundColor: "green",
  },
});
