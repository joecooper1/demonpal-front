import React from "react";
import { View, Text } from "react-native";

import styles from "./Signup.styles";

export default function Signup() {
  return (
    <View style={styles.container}>
      <View style={styles.newUserBar}>
        <Text>Signup</Text>
      </View>
    </View>
  );
}
