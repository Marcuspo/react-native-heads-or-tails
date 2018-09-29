import React, { Component } from 'react';
import { Image, View } from 'react-native';

const cara = require('../imgs/moeda_cara.png');
const coroa = require('../imgs/moeda_coroa.png');


export default class Resultado extends Component {

    constructor(props){
        super(props);

        this.stat = { resultado: '' };

    }

    componentWillMount(){
        const numAleatorio = Math.floor(Math.random() * 2); //mathfloor retira a parte inteira e math random faz a escolha do número de 0 a 1, * por 2 para ter número inteiro.
        let caraOuCoroa = '';

        if (numAleatorio === 0) {
            caraOuCoroa = 'cara';
        } else {
            caraOuCoroa = 'coroa';
        }
    
        this.setState({resultado: caraOuCoroa });
    }

    render() {
        if (this.state.resultado === 'cara') {
            return (
                <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center', backgroundColor: '#61BD8C', }}>
                  <Image source={cara} />
                </View>
            );
        } return (
                <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center', backgroundColor: '#61BD8C', }}>
                 <Image source={coroa} />
              </View>
            );
        }
        
    }