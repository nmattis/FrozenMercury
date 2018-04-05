import React, { Component } from 'react';
import {
  Platform,
  StyleSheet,
  Text,
  View,
  Slider
} from 'react-native';

import AlertButton from '../components/AlertButton';

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
                <AlertButton buttonName='Clear History' title='Are you sure?' message='This will clear all stored history from the app.' pressFunc={this.clearHistory} />
                <AlertButton buttonName='Reset Defaults' title='Are you sure?' message='This will reset all settings, clear the saved sensor, and clear your history.' pressFunc={this.resetDefaults} />
            </View>
        );
    }
}

export default Settings;
