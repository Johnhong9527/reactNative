import React, { Component } from 'react';
import {
  AppRegistry,
  StyleSheet,
  Text,
  View,
  Image
} from 'react-native';
import { StackNavigator } from 'react-navigation';

export default class Mine extends Component {
  static navigationOptions = {
    title: '个人中心',
  };
  render() {
    // The screen's current route is passed in to `props.navigation.state`:
    const { params } = this.props.navigation.state;
    return (
      <View style={styles.container}>
      <Image source={params.url} style={{width:'100%',height:100,borderWidth:1,borderColor:'#00ff00'}}/>
        <Text style={styles.welcome}>
          'this is mine'
        </Text>
        <Text>Chat with {params.name}</Text>
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