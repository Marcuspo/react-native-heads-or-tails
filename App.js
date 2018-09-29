import React, { Component } from 'react';
import { Router, Scene } from 'react-native-router-flux';
import Principal from './src/components/Principal';
import Sobre from './src/components/Sobre';
import OutrosJogos from './src/components/OutrosJogos';

export default class App extends Component {
  render() {
    return (
      <Router>
        <Scene key='principal' component={Principal} />
        <Scene key='sobre' component={Sobre} />
        <Scene key='outros' component={OutrosJogos} />
      </Router>
    );
  }

}