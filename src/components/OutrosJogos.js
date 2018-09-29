import React, { Component } from 'react';
import { Text } from 'react-native';

export default class OutrosJogos extends Component {
    render() {
      return (
        <Text 
            style={{ 
            flex: 1, 
            backgroundColor: '#61BD8C', 
            fontWeight: '900', 
            fontSize: 25, 
        }}> Aqui fica os outros jogos do desenvolvedor. 
        </Text>
      );
    }
  
  }