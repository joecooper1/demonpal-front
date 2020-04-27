import { StyleSheet, Dimensions } from "react-native";

const { width: winWidth, height: winHeight } = Dimensions.get("window");

export default StyleSheet.create({
  page: { width: winWidth, height: winHeight * 2 },
  container: {
    width: winWidth,
    height: winHeight,
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    backgroundColor: "white",
  },
  smallContainer: {
    width: winWidth * 0.8,
    display: "flex",
    flexDirection: "column",
    justifyContent: "space-evenly",
    alignItems: "center",
    backgroundColor: "lightblue",
    marginTop: winHeight * 0.1,
  },
  signUpOptions: {
    width: "80%",
    height: "20%",
    display: "flex",
    flexDirection: "row",
    justifyContent: "space-evenly",
    alignItems: "center",
    backgroundColor: "pink",
  },
  usernameForm: {
    height: "60%",
    width: "80%",
    backgroundColor: "pink",
  },
  button: {
    width: 80,
    height: 60,
    backgroundColor: "red",
    display: "flex",
    flexDirection: "row",
    justifyContent: "space-evenly",
    alignItems: "center",
  },
});
