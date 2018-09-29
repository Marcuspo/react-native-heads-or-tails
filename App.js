import React, { Component } from 'react';
import { StyleSheet, Text, View, Image } from 'react-native';

const logo = require('./src/imgs/logo.png');
const btnJogar = require('./src/imgs/botao_jogar.png');
const btnSobreJogo = require('./src/imgs/sobre_jogo.png');
const btnOutrosJogos = require('./src/imgs/outros_jogos.png');

export default class App extends Component {
  render() {
    return (
      <View style={styles.cenaprincipal}>
        <View style={styles.apresetacaoJogo}>
          <Image source={logo} />
          <Image source={btnJogar} />
        </View>

          <View style={styles.rodape}>
            <Image source={btnSobreJogo} />
            <Image source={btnOutrosJogos} />
          </View>
      </View>
    );
  }

}

const styles = StyleSheet.create({
  cenaprincipal: {
    flex: 1,
    backgroundColor: '#61BD8C'
  },
  apresetacaoJogo: {
    flex: 10,
    justifyContent: 'center',
    alignItems: 'center'
  },
  rodape: {
    flex: 1,
    flexDirection: 'row',
    justifyContent: 'space-between'
  }
});
