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

/* Things to do - on submit signup, check if username is valid, display message if not
check if password is valid, display message if not
if both are valid send to api, check if username is unique, display message if not
if it goes through, save username to asyncstorage and remember them
go to home page, signed in as new user
- after login, check if username and password are correct, then go to home page */

export default function SignupForm({ logInOption }) {
  const [usernameText, setUsernameText] = useState("");
  const [passwordText, setPasswordText] = useState("");
  const [confirmText, setConfirmText] = useState("");

  // Error messages that appear if fields are invalid
  const [usernameError, setUsernameError] = useState(null);
  const [passwordError, setPasswordError] = useState(null);
  const [confirmError, setConfirmError] = useState(null);

  const handleSubmit = () => {
    // 1 - check if password and confirmpassword are the same
    if (passwordText !== confirmText) {
      setConfirmError("Your passwords don't match! Please try again.");
      setPasswordText("");
      setConfirmText("");
    } else {
      setConfirmError(null);
    }
    if (
      passwordText.length < 6 ||
      !/[a-z]/.test(passwordText) ||
      !/[0-9]/.test(passwordText)
    ) {
      setPasswordError(
        "Your password should be at least six letters long, and contain both letters and numbers."
      );
      setPasswordText("");
      setConfirmText("");
    }
  };

  if (logInOption === "login") {
    return (
      <View style={styles.form}>
        <TextInput
          placeholder="username"
          style={styles.textInputBox}
          onChangeText={(text) => setUsernameText(text)}
          value={usernameText}
          maxLength={20}
        ></TextInput>
        <TextInput
          placeholder="password"
          style={styles.textInputBox}
          onChangeText={(text) => setPasswordText(text)}
          value={passwordText}
          secureTextEntry={true}
          maxLength={20}
        ></TextInput>
        <TouchableOpacity style={styles.submitButton}>
          <Text>Submit</Text>
        </TouchableOpacity>
      </View>
    );
  } else if (logInOption === "signup") {
    return (
      <View style={styles.form}>
        <View>
          <TextInput
            placeholder="username"
            style={styles.textInputBox}
            onChangeText={(text) => setUsernameText(text)}
            value={usernameText}
            maxLength={20}
          ></TextInput>
          <Text style={{ color: "red" }}>{usernameError}</Text>
        </View>
        <View>
          <TextInput
            placeholder="password"
            style={styles.textInputBox}
            onChangeText={(text) => setPasswordText(text)}
            value={passwordText}
            secureTextEntry={true}
            maxLength={20}
          ></TextInput>
          <Text style={{ color: "red" }}>{passwordError}</Text>
        </View>
        <View>
          <TextInput
            placeholder="confirm password"
            style={styles.textInputBox}
            onChangeText={(text) => setConfirmText(text)}
            value={confirmText}
            secureTextEntry={true}
            maxLength={20}
          ></TextInput>
          <Text style={{ color: "red" }}>{confirmError}</Text>
        </View>
        <TouchableOpacity style={styles.submitButton} onPress={handleSubmit}>
          <Text>Submit</Text>
        </TouchableOpacity>
      </View>
    );
  }
}
