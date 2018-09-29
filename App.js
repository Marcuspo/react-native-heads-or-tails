import React, { Component } from 'react';
import { Router, Scene } from 'react-native-router-flux';
import Principal from './src/components/Principal';
import Sobre from './src/components/Sobre';
import OutrosJogos from './src/components/OutrosJogos';

export default class App extends Component {
  render() {
    return (
      <Router>
        <Scene key="root" >
        <Scene key='Principal' component={Principal} initial title='Cara ou coroa' />
        <Scene key='Sobre' component={Sobre} />
        <Scene key='OutrosJogos'component={OutrosJogos} />
        </Scene>
      </Router>
    );
  }

}