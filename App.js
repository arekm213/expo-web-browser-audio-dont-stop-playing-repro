import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, Text, View, TouchableOpacity } from 'react-native';
import * as WebBrowser from 'expo-web-browser'; 

export default function App() {

  const openWebBrowser = async() =>{
    await WebBrowser.openBrowserAsync("https://twitter.com/jonnym1ller/status/1642276906749005824?s=20");
    // Uncomment below line to get issue fixed
    // WebBrowser.dismissBrowser();
  };

  return (
    <View style={styles.container}>
      <Text>Open up App.js to start working on your app!</Text>
      <StatusBar style="auto" />
      <TouchableOpacity style={styles.webBrowserButton} onPress={openWebBrowser}>
        <Text>Open link</Text>
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
  webBrowserButton: {
    marginTop: 10,
    paddingVertical: 10,
    paddingHorizontal: 20,
    backgroundColor: 'orange',
  },
});
