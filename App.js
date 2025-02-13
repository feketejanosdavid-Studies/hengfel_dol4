// Created by: Fekete János Dávid
// Created on: 2025.02.13
// Class: II/1/N
// File: App.js
// Description: Henger felszin szamitasa
// GitHub: https://github.com/feketejanosdavid

import { StatusBar } from 'expo-status-bar';
import { useState } from 'react';
import { StyleSheet, Text, TextInput, TouchableHighlight, View } from 'react-native';



export default function App() {
  const [radius, setRadius] = useState('');
  const [height, setHeight] = useState('');
  const [result, setResult] = useState('');

  function startCalc() {
    console.log("A számítás elindult \nBeírt értékek:", radius, height);
    let result = 2 * Math.PI * radius * (radius + height);
    setResult(result.toFixed(2));
    console.log("Számítás eredménye:", result);
  }

  return (
    <View style={styles.container}>
      <Text style={styles.title}>kör alapú henger felszín számítás</Text>

      <Text style={styles.text}>Add meg a sugarat:</Text>
      <TextInput style={styles.input}
      onChangeText={radius => setRadius(radius)}/>

      <Text style={styles.text}>Add meg a magasságot:</Text>
      <TextInput style={styles.input}
      onChangeText={height => setHeight(height)}/>

      <TouchableHighlight
        style={styles.button}
        onPress={startCalc}
      >
        <Text style={styles.buttonText}>Számítás</Text>
      </TouchableHighlight>

      <Text style={styles.text}>Felszín</Text>
      <TextInput style={styles.input}
      onChangeText={result => setResult(result)}
      value={result}/>

      <StatusBar style="auto" />
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
  title: {
    fontSize: 20,
    fontWeight: 'bold',
    marginBottom: 40,
  },
  text: {
    marginTop: 20,
  },
  input: {
    height: 40,
    width:200,
    margin: 12,
    borderWidth: 1,
    padding: 10,
  },
  button: {
    marginTop: 20,
    marginBottom: 20,
    alignItems: "center",
    backgroundColor: "#DDDDDD",
    padding: 10,
  },
  buttonText: {
    fontSize: 20,
  }
});
