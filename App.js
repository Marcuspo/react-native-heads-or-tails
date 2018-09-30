import React, { Component } from 'react';
import { Router, Scene } from 'react-native-router-flux';

import Principal from './src/components/Principal';
import OutrosJogos from './src/components/OutrosJogos';
import Resultado from './src/components/Resultado';
import Sobre from './src/components/Sobre';

export default class app extends Component {
  render() {
    return (
      <Router navigationBarStyle={{ backgroundColor: "#61BD8C" }}
      titleStyle={{ color: "white" }}>
        <Scene key='root'>
          <Scene key='principal' component={Principal} initil title="Cara ou coroa" initial />
          <Scene key='Sobre' component={Sobre} title="Sobre o Jogo" />
          <Scene key='OutrosJogos' component={OutrosJogos} title="Outros Jogos" />
          <Scene key='Resultado' component={Resultado} title="Resultado" />
          </Scene>
      </Router>
    );
  }
}
