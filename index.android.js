/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */

import React, { Component } from 'react'
import {
  AppRegistry,
  StyleSheet,
  Text,
  View,
  TouchableHighlight
} from 'react-native'

import Crypto from './crypto'

class WebviewSample extends Component {
  handleClick () {
    console.warn("handling click")
    console.warn("DOING THINGS" +  this.c.doStuff())
    console.warn("done handling click")
  }

  render () {
    console.warn("normal", window.crypto)

    return (
      <TouchableHighlight onPress={this.handleClick.bind(this)}>
        <View style={styles.container}>
          <Crypto ref={(comp) => { this.c = comp; null }}/>
          <Text style={styles.welcome}>
            Welcome to React Native!
          </Text>
          <Text style={styles.instructions}>
            To get started, edit index.android.js
          </Text>
          <Text style={styles.instructions}>
            Shake or press menu button for dev menu
          </Text>
        </View>
      </TouchableHighlight>
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

AppRegistry.registerComponent('AwesomeProject', () => WebviewSample);
