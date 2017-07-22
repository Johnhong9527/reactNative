/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */
import React, { Component } from 'react';
import {AppRegistry} from 'react-native';
import { StackNavigator } from 'react-navigation';
import Home from './src/components/Home'
import Mine from './src/components/Mine'
const SimpleApp = StackNavigator({
  Home: { screen: Home },
  Mine: { screen: Mine },
});
AppRegistry.registerComponent('YCool', () => SimpleApp);
