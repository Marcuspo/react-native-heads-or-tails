import React, { Component } from 'react';
import { Text } from 'react-native';

export default class Sobre extends Component {
    render() {
      return (
        <Text 
        style={{ 
          flex: 1, 
          backgroundColor: '#61BD8C', 
          fontWeight: 'bold', 
          fontSize: 25, }}
        > Criador: Marcus Pontes de Oliveira </Text>
      );
    }
  
  }
