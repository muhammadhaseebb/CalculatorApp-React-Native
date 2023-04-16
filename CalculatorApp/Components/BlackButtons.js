/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 */

import React from 'react';
import {
  Button,
  Image,
  StyleSheet,
  Text,
  TextInput,
  TouchableOpacity,
  View,
} from 'react-native';

export function BlackButtons({text, onHandlePress}) {
  return (
    <View style={styles.button1}>
      <TouchableOpacity onPress={() => onHandlePress(text)}>
        <Text style={styles.btnTxt}>{text}</Text>
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  button1: {
    alignItems: 'center',
    backgroundColor: 'green',
    height: 75,
    width: 65,
    backgroundColor: 'black',
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: 50,
  },
  btnTxt: {
    fontSize: 32,
  },
});
