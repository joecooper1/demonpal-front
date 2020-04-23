import React from "react";
import { View, Text } from "react-native";

import styleMaker from "./HomePage.styles";

export default function HomePage() {
  //declare state here

  const styles = styleMaker();

  return (
    <View style={styles.container}>
      <View style={styles.newUserBar}>
        <Text>Signup</Text>
      </View>
    </View>
  );
}
