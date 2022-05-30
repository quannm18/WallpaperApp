import { Text, StyleSheet, View,ImageBackground, SafeAreaView, StatusBar } from 'react-native';
import React, { Component } from 'react';
import BackgroundImg from '../Image/splash.jpg';

console.disableYellowBox = true;

export default class SplashScreen extends Component {
  render() {
    return (
      <View style={styles.container}>
        <View>
            <Text style={styles.text}>MyApp</Text>
        </View>
      </View>
    )
  }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor:'gray',
    justifyContent: 'center',
    alignItems: 'center',
    },
    imgBg: {
        flex: 1,
        justifyContent: "center"
    },
    text: {
      color: "white",
      fontSize: 42,
      lineHeight: 84,
      fontWeight: "bold",
      textAlign: "center",
      backgroundColor: "#000000c0"
    }
})