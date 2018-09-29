import React, { Component } from 'react';
import { StyleSheet, View, Image } from 'react-native';

const logo = require('../imgs/logo.png');
const btnJogar = require('../imgs/botao_jogar.png');
const btnSobreJogo = require('../imgs/sobre_jogo.png');
const btnOutrosJogos = require('../imgs/outros_jogos.png');

export default class Principal extends Component {
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
