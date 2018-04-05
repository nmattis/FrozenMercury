import React, { Component } from 'react';
import { Alert, Text, TouchableOpacity, StyleSheet } from 'react-native';

class AlertButton extends Component {
    showAlert() {
        Alert.alert(
            this.props.title,
            this.props.message,
            [
                {text: 'Cancel', onPress: () => {}},
                {text: 'Ok', onPress: () => {this.props.pressFunc}}
            ],
            { cancelable: false }
        )
    }

    render() {
        return (
            <TouchableOpacity onPress={this.showAlert.bind(this)}>
                <Text>{this.props.buttonName}</Text>
            </TouchableOpacity>
        );
    }
}

export default AlertButton;
