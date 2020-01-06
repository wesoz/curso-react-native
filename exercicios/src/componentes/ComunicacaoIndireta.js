import React, { Component } from 'react'
import Padrao from '../estilo/Padrao'
import { View, Text, TextInput } from 'react-native'

export const Entrada = props => 
    <TextInput style={Padrao.input} value={props.texto} onChangeText={props.chamarQuandoMudar} />

export default class TextoSincronizado extends Component {

    state= { texto: "" }

    alterarTexto = texto => this.setState({ texto })

    render() {
        return (
            <View>
                <Text style={ Padrao.fonte40 }>{this.state.texto}</Text>
                <Entrada value={this.state.texto} chamarQuandoMudar={this.alterarTexto} />
            </View>
        )
    }
}