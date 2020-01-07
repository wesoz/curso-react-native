import React, { Component } from 'react'
import { View, Text, TouchableHighlight, StyleSheet } from 'react-native'

export default class NumberPicker extends Component {

    constructor(props) {
        super(props)
        this.timer = null
    }

    increaseNumber = (delta) => { 
        this.props.onChangeNumber(this.props.value + delta);
        if (this.timer == null) {
            this.timer = setInterval(() => this.increaseNumber(delta), 150)
        }
    }

    stopTimer = () => {
        clearTimeout(this.timer)
        this.timer = null;
    }

    render () {
        return (
            <View style={styles.container}>
                <TouchableHighlight style={ styles.button } 
                                    onPressIn={() => this.increaseNumber(-1)} 
                                    onPressOut={this.stopTimer}>
                    <Text style={ styles.buttonText }>-</Text>
                </TouchableHighlight>
                <Text style={ styles.mainText }>{this.props.value}</Text>
                <TouchableHighlight style={ styles.button } 
                                    onPressIn={() => this.increaseNumber(1)} 
                                    onPressOut={this.stopTimer}>
                    <Text style={ styles.buttonText }>+</Text>
                </TouchableHighlight>
            </View>
        );
    }
}

const styles = StyleSheet.create({
    container: {
        alignItems: 'center',
        justifyContent: 'center',
        flexDirection: 'row',
        marginTop: 10
    },
    button: {
        backgroundColor: '#DDD',
        width: 40,
        height: 40,
        alignItems: 'center',
        justifyContent: 'center',
        flexDirection: 'row',
        borderWidth: 2,
        borderColor: '#999',
        borderRadius: 8,
        shadowColor: "#000",
        shadowOffset: {
            width: 0,
            height: 7,
        },
        shadowOpacity: 0.41,
        shadowRadius: 9.11,
        
        elevation: 14,
    },
    buttonText: {
        fontSize: 30,
        color: '#444'
    },
    mainText: {
        fontSize: 30,
        marginLeft: 20,
        marginRight: 20
    }
})