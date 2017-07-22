import React, { Component } from 'react';
import {
  AppRegistry,
  StyleSheet,
  Text,
  View,
  Image,
  Button
} from 'react-native';
import { StackNavigator } from 'react-navigation';
// components
import Greeting from './Greeting'
import Blink from './Blink'

export default class Home extends Component {
  static navigationOptions = {
    title: '首页',
  };
  render() {
    let pic = {
      uri: 'https://upload.wikimedia.org/wikipedia/commons/d/de/Bananavarieties.jpg'
    };
    const { navigate } = this.props.navigation;
    return (
      <View style={styles.container}>
        <Text style={styles.welcome}>
          Welcome to React Native!,{'\n'}
          世界！
        </Text>
        <Image source={pic} style={{width: '100%', height: 110}} />
        <Text>Hello {this.props.name}!</Text>
        <View style={{alignItems: 'center'}}>
          <Greeting name='Rexxar' />
          <Greeting name='Jaina' />
        </View>
        <View>
          <Blink text='I love to blink' />
          <Blink text='Yes blinking is so great' />
          <Blink text='Why did they ever take this out of HTML' />
          <Blink text='Look at me look at me look at me' />
      </View>
      <View>
        <Button
          onPress={() => navigate('Mine', {name: 'seam', url:pic})}
          title="Chat with Lucy"
        />
      </View>
      </View>
    );
  }
}


const styles = StyleSheet.create({
  container: {
    flex: 1,
    // justifyContent: 'center',
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