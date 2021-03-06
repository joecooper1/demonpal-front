import { StyleSheet, Dimensions } from "react-native";

const { width: winWidth, height: winHeight } = Dimensions.get("window");

export const styleMaker = () => {
  return StyleSheet.create({
    container: {
      width: winWidth,
      height: winHeight,
      display: "flex",
      flexDirection: "column",
      justifyContent: "space-around",
      alignItems: "center",
      backgroundColor: "white",
    },
  });
};
