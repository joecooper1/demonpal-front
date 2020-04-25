import React, { useState, useEffect } from "react";
import {
  View,
  Text,
  TextInput,
  TouchableHighlight,
  TouchableOpacity,
  KeyboardAvoidingView,
  Keyboard,
} from "react-native";

import styles from "./SignupForm.styles";

export default function SignupForm({ logInOption }) {
  const [usernameText, setUsernameText] = useState("");
  const [passwordText, setPasswordText] = useState("");
  const [confirmText, setConfirmText] = useState("");

  const regex = new RegExp(/./g);

  if (logInOption === "login") {
    return (
      <View style={styles.form}>
        <TextInput
          placeholder="username"
          style={styles.textInputBox}
          onChangeText={(text) => setUsernameText(text)}
          value={usernameText}
        ></TextInput>
        <TextInput
          placeholder="password"
          style={styles.textInputBox}
          onChangeText={(text) => setPasswordText(text)}
          value={passwordText}
          secureTextEntry={true}
        ></TextInput>
        <TouchableOpacity style={styles.submitButton}>
          <Text>Submit</Text>
        </TouchableOpacity>
      </View>
    );
  } else if (logInOption === "signup") {
    return (
      <View style={styles.form}>
        <TextInput
          placeholder="username"
          style={styles.textInputBox}
          onChangeText={(text) => setUsernameText(text)}
          value={usernameText}
        ></TextInput>
        <TextInput
          placeholder="password"
          style={styles.textInputBox}
          onChangeText={(text) => setPasswordText(text)}
          value={passwordText}
          secureTextEntry={true}
        ></TextInput>
        <TextInput
          placeholder="confirm password"
          style={styles.textInputBox}
          onChangeText={(text) => setConfirmText(text)}
          value={confirmText}
          secureTextEntry={true}
        ></TextInput>
      </View>
    );
  }
}
