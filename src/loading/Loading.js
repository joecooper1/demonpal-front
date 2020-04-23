import React from "react";
import { View, Text } from "react-native";

import styles from "./Loading.styles";

export default function Loading() {
  return (
    <View style={styles.container}>
      <View>
        <Text>Loading</Text>
      </View>
    </View>
  );
}
