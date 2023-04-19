/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 */

import React from 'react';
import {StyleSheet, Text, View} from 'react-native';
import {BlackButtons, Buttons} from './Components/BlackButtons';
import {OrangeButtons} from './Components/OrangeButtons';
import {ZeroButton} from './Components/ZeroButton';
import {useState} from 'react';

export default function App() {
  const [value, setValue] = useState('0');
  console.log(value);
  const handlePress = text => {
    if (text == 'C') {
      setValue('0');
    } else if (text == 'R') {
      setValue(value.slice(0, -1));
    } else if (text == '=') {
      try {
        setValue(eval(value).toString());
        value.toString();
        console.log('type of part: ', typeof eval(value).toString());
      } catch (e) {
        console.log('error');
      }
    } else {
      if (value == '0') {
        if (
          text == '+' ||
          text == '-' ||
          text == '*' ||
          text == '/' ||
          text == '.' ||
          text == '%'
        ) {
          setValue(value + text);
        } else {
          setValue(text);
        }
      }
      // error present in this else if
      else if (isNaN(text)) {
        if (value !== undefined && typeof value === 'function') {
          handlePress();
        } else {
          try {
            if (
              value.slice(-1) == '+' ||
              value.slice(-1) == '-' ||
              value.slice(-1) == '*' ||
              value.slice(-1) == '/' ||
              value.slice(-1) == '%' ||
              value.slice(-1) == '.' ||
              value.slice(-1) == '='
            ) {
              setValue(value.slice(0, -1) + text);
            } else {
              setValue(value + text);
            }
          } catch (error) {
            console.log('error');
          }
        }
      } else if (!isNaN(text)) {
        setValue(value + text);
      }
    }
  };
  return (
    <View style={{flex: 1, backgroundColor: '#454545', alignItems: 'center'}}>
      <Text style={styles.heading}>Calculator</Text>
      {/* for printing */}
      <View style={styles.output}>
        <Text style={styles.btnTxt}>
          {value.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ',')}
        </Text>
      </View>

      {/* first row of buttons */}
      <View
        style={{
          flexDirection: 'row',
          justifyContent: 'space-between',
          width: '80%',
          marginBottom: 20,
        }}>
        <BlackButtons text={'C'} onHandlePress={handlePress} />
        <BlackButtons text={'%'} onHandlePress={handlePress} />
        <BlackButtons text={'R'} onHandlePress={handlePress} />
        <OrangeButtons text={'+'} onHandlePress={handlePress} />
      </View>

      {/* second row of buttons */}
      <View
        style={{
          flexDirection: 'row',
          justifyContent: 'space-between',
          width: '80%',
          marginBottom: 20,
        }}>
        <BlackButtons text={'7'} onHandlePress={handlePress} />
        <BlackButtons text={'8'} onHandlePress={handlePress} />
        <BlackButtons text={'9'} onHandlePress={handlePress} />
        <OrangeButtons text={'-'} onHandlePress={handlePress} />
      </View>

      {/* third row of buttons */}
      <View
        style={{
          flexDirection: 'row',
          justifyContent: 'space-between',
          width: '80%',
          marginBottom: 20,
        }}>
        <BlackButtons text={'4'} onHandlePress={handlePress} />
        <BlackButtons text={'5'} onHandlePress={handlePress} />
        <BlackButtons text={'6'} onHandlePress={handlePress} />
        <OrangeButtons text={'*'} onHandlePress={handlePress} />
      </View>

      {/* fourth row of buttons */}
      <View
        style={{
          flexDirection: 'row',
          justifyContent: 'space-between',
          width: '80%',
          marginBottom: 20,
        }}>
        <BlackButtons text={'1'} onHandlePress={handlePress} />
        <BlackButtons text={'2'} onHandlePress={handlePress} />
        <BlackButtons text={'3'} onHandlePress={handlePress} />
        <OrangeButtons text={'/'} onHandlePress={handlePress} />
      </View>

      {/* fifth row of buttons */}
      <View
        style={{
          flexDirection: 'row',
          justifyContent: 'space-between',
          width: '80%',
          marginBottom: 20,
        }}>
        <ZeroButton text={'0'} onHandlePress={handlePress} />
        <BlackButtons text={'.'} onHandlePress={handlePress} />
        <OrangeButtons text={'='} onHandlePress={handlePress} />
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  heading: {
    fontSize: 54,
    fontFamily: 'Billabong',
    marginTop: 40,
  },
  output: {
    borderWidth: 1,
    width: '80%',
    height: 70,
    marginBottom: 40,
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'flex-end',
    paddingRight: '5%',
    borderRadius: 10,
  },
  btnTxt: {
    fontSize: 32,
  },
});
