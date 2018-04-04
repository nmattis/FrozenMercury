import React, { Component } from 'react';
import {
  Platform,
  StyleSheet,
  Text,
  View,
  Button,
  Slider
} from 'react-native';

class Settings extends Component {
    constructor(props) {
        super(props);

        const settingsKey = 'SETTINGS';
        this.state = {
            bluetooth_device: null,
            temp_unit: 'F',
            temp_threshold: 70
        }
    }

    toggleTempUnit(value) {
        this.setState({temp_unit: value ? 'C' : 'F'});
        console.log(value);
    }

    saveThreshold(val) {
        console.log(val);
    }

    clearHistory() {
        console.log('Clearing History');
    }

    resetDefaults() {
        console.log('Setting App To Defaults');
    }

    render() {
        return (
            <View>
                {/* C or F Display toggle
                Select bluetooth device, button with modal popup
                Temperature threshold
                clear storage
                reset to defaults */}
                <Text>Temperature Threshold: {this.state.temp_threshold}</Text>
                <Slider
                    step = {1}
                    minimumValue = {30}
                    maximumValue = {100}
                    value = {this.state.temp_threshold}
                    onValueChange = {val => this.setState({temp_threshold: val})}
                    onSlidingComplete = {val => this.saveThreshold(val)}
                />
                <Button onPress={this.clearHistory} title='Clear History' />
                <Button onPress={this.resetDefaults} title='Reset to Defaults' />
            </View>
        );
    }
}

export default Settings;
