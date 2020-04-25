import React, { useState, useEffect } from "react";
import {
  View,
  Text,
  TextInput,
  TouchableHighlight,
  TouchableOpacity,
  ScrollView,
} from "react-native";

import Button from "react-native-button";
import { NativeRouter } from "@react-navigation/native";

import styles from "./Signup.styles";

import SignupForm from "./SignupForm";

const Login = () => {};

export default function Signup() {
  const [logInOption, setLogInOption] = useState("signup");

  const chooseOption = (option) => {
    setLogInOption(option);
  };

  return (
    <View style={styles.page}>
      <View style={styles.container}>
        <View style={styles.smallContainer}>
          <View style={styles.signUpOptions}>
            <TouchableOpacity
              style={styles.button}
              onPress={() => {
                chooseOption("login");
              }}
            >
              <Text>Login</Text>
            </TouchableOpacity>
            <Text> or </Text>
            <TouchableOpacity
              style={styles.button}
              onPress={() => {
                chooseOption("signup");
              }}
            >
              <Text>Sign up</Text>
            </TouchableOpacity>
          </View>
          <View style={styles.usernameForm}>
            <SignupForm logInOption={logInOption} />
          </View>
        </View>
      </View>
    </View>
  );
}
