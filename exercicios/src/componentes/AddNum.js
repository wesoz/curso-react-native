import React, { Component } from 'react'
import { View, Button, Alert } from 'react-native'
import NumberPicker from './NumberPicker'

export default class AddNum extends Component {

    constructor(props) {
        super(props)
        this.state = { number: 0 }
    }

    changeNumber = number => this.setState({ number })

    render () {
        return (
            <View>
                <NumberPicker value={this.state.number} onChangeNumber={this.changeNumber} />
                <View style={ { margin: 40 } }>
                    <Button style={ { marginTop: 20 } } title="Show Value" onPress={() => Alert.alert("Number Picked", this.state.number.toString())} />
                </View>
            </View>
        );
    }
}
