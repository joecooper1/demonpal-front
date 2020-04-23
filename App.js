import React, { useState, useEffect } from "react";
import { View, Text } from "react-native";
import { NavigationContainer } from "@react-navigation/native";
import { AsyncStorage } from "react-native";

import HomePage from "./src/homepage/HomePage";
import Signup from "./src/signup/Signup";
import Loading from "./src/loading/Loading";

const getUserFromLocalStorage = async () => {
  const username = await AsyncStorage.getItem("username");
  if (username)
    this.setState({
      user: username,
    });
};

export default function App() {
  const [user, setUser] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    setLoading(true);
    getUserFromLocalStorage();
  });

  if (loading) return <Loading />;
  if (user) return <HomePage user={user} />;
  else return <Signup />;
}
