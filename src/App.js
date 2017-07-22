import React, { Component } from 'react';
import {
  AppRegistry,
  StyleSheet,
  Text,
  View,
  Image
} from 'react-native';

import Greeting from './ui/Greeting'

export default class YCool extends Component {
  render() {
    let pic = {
      uri: 'https://upload.wikimedia.org/wikipedia/commons/d/de/Bananavarieties.jpg'
    };
    return (
      <View style={styles.container}>
        <Text style={styles.welcome}>
          Welcome to React Native!,{'\n'}
          你好！,{'\n'}
          世界！
          <Image source={pic} style={{width: 193, height: 110}} />
        </Text>
        <Image source={pic} style={{width: '100%', height: 110}} />
        <Text>Hello {this.props.name}!</Text>
        <View style={{alignItems: 'center'}}>
          <Greeting name='Rexxar' />
          <Greeting name='Jaina' />
          <Greeting name='Valeera' />
        </View>
      </View>
    );
  }
}


const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#F5FCFF',
  },
  welcome: {
    fontSize: 20,
    textAlign: 'center',
    margin: 10,
  },
  instructions: {
    textAlign: 'center',
    color: '#333333',
    marginBottom: 5,
  },
});