import React, { Component } from 'react';
import { Router, Scene } from 'react-native-router-flux';
import Principal from './src/components/Principal';
import Sobre from './src/components/Sobre';
import OutrosJogos from './src/components/OutrosJogos';
import Resultado from './src/components/Resultado';


export default class App extends Component {
  render() {
    return (
        <Router navigationBarStyle={{ backgroundColor: '#61BD8C', }} titleStyle={{ color: 'white' }} >
          <Scene key="root" >
            <Scene key='Principal' component={Principal} initial title='Cara ou coroa' />
            <Scene key='Sobre' component={Sobre} title='Sobre o jogo!' />
            <Scene key='OutrosJogos'component={OutrosJogos} title='Outros jogos' />
            <Scene key='Resultado' component={Resultado} title='Resultado!' />
          </Scene>
        </Router>
    );
  }

}