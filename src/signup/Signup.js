import React, { useState, useEffect } from "react";
import { View, Text } from "react-native";
import Button from "react-native-button";

import styles from "./Signup.styles";

export default function Signup() {
  const [progression, setProgression] = useState(0);

  //Decide on which question to ask based on progression through dialogue
  const determineQuestion = () => {
    if (progression === 0) {
      return <Text>Hello</Text>;
    }
  };

  //Decide on answers
  const determineAnswer = () => {
    if (progression === 0) {
      return (
        <Button>
          <Text>Hello</Text>
        </Button>
      );
    }
  };

  return (
    <View style={styles.container}>
      <View style={styles.questionAndAnswer}>
        <View style={styles.question}>{determineQuestion()}</View>
        <View style={styles.answer}>{determineAnswer()}</View>
      </View>
    </View>
  );
}
