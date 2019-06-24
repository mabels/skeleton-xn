import React, { Component } from "react";
import { StyleSheet, Text, View } from "react-native";
import { AppModelProvider } from "@skeleton-xn/app-model-context";
import { FormStateExpo } from "./src/form-state-expo";
import { Font } from 'expo';

// import { COLOR, ThemeContext, getTheme } from "react-native-material-ui";

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
});

// const uiTheme = {
//   palette: {
//     primaryColor: COLOR.green500,
//   },
//   toolbar: {
//     container: {
//       height: 50,
//     },
//   },
// };

export default class App extends React.Component {

  componentDidMount() {
    // [
    //  'Roboto-Thin.ttf',
    //  'Roboto-ThinItalic.ttf',
    //  'Roboto-Light.ttf',
    //  'Roboto-LightItalic.ttf',
    //  'Roboto-Regular.ttf',
    //  'Roboto-Italic.ttf',
    //  'Roboto-Medium.ttf',
    //  'Roboto-MediumItalic.ttf',
    //  'Roboto-Bold.ttf',
    //  'Roboto-BoldItalic.ttf',
    //  'Roboto-Black.ttf',
    //  'Roboto-BlackItalic.ttf'].forEach(async f => {
    //   const myFont = require(`./assets/fonts/${f}`);
    //   await Font.loadAsync({
    //     [f.split('.')[0]]: myFont,
    //   });
    // });
  }

  render() {
    // <ThemeContext.Provider value={getTheme(uiTheme)}>
    // </ThemeContext.Provider>
    return (
      <View style={styles.container}>
        <AppModelProvider>
          <FormStateExpo />
        </AppModelProvider>
      </View>
  );
    }
}
