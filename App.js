import React, { useState, useEffect } from "react";
import { View, Text } from "react-native";
import { AsyncStorage } from "react-native";

import HomePage from "./src/homepage/HomePage";
import Signup from "./src/signup/Signup";
import Loading from "./src/loading/Loading";

export default function App() {
  const [user, setUser] = useState("Joe");
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    if (user === null) getUserFromLocalStorage();
    else setLoading(false);
  });

  const getUserFromLocalStorage = async () => {
    const username = await AsyncStorage.getItem("username");
    if (username) setUser(username);
    setLoading(false);
  };

  if (loading) return <Loading />;
  else {
    if (user) return <HomePage user={user} />;
    else return <Signup />;
  }
}
