/**
 *    ch 2-4 mod this file from original default to import app\AppContainer.js
 */

import React, { Component } from 'react';
import {
  AppRegistry,
} from 'react-native';

import AppContainer from './app/AppContainer'


export default class dinder extends Component {
  render() {
    return (
      <AppContainer/>
    );
  }
}


AppRegistry.registerComponent('dinder', () => dinder);
