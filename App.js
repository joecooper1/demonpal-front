import React, { useState } from "react";
import { View, Text } from "react-native";
import { NavigationContainer } from "@react-navigation/native";
import { AsyncStorage } from "react-native";

import HomePage from "./src/homepage/HomePage";
import Signup from "./src/signup/Signup";

export default function App() {
  const { user, changeUser } = useState(null);

  if (user) return <HomePage />;
  else return <Signup />;
}
