import React, { Component } from "react";
import { StyleSheet, Text, View } from "react-native";
import { AppModelProvider } from "@skeleton-xn/app-model-context";
import { FormStateExpo } from "./src/form-state-expo";

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
});

export default function App() {
  return (
    <View style={styles.container}>
      <AppModelProvider>
        <FormStateExpo />
      </AppModelProvider>
    </View>
  );
}
