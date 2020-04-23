import React from "react";
import { View, Text } from "react-native";

import { styleMaker } from "./HomePage.styles";

export default function HomePage({ user }) {
  //declare state here

  const styles = styleMaker();

  return (
    <View style={styles.container}>
      <View>
        <Text>Hi {user}</Text>
      </View>
    </View>
  );
}
