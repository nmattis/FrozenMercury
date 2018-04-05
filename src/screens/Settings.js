import React, { Component } from 'react';
import {
  Platform,
  StyleSheet,
  Text,
  View,
  Button,
  Picker,
  Slider
} from 'react-native';

import AlertButton from '../components/AlertButton';

import storageOp from '../utils/storageUtil';
import tempConvert from '../utils/tempConvert';

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

    selectDevice() {
        console.log('Pick a device');
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

    componentDidMount() {
        // read from storage and load settings
    }

    render() {
        var device = (this.state.bluetooth_device !== null) ? this.state.bluetooth_device : 'None'; 
        var temp_unit = this.state.temp_unit;
        var temp = (temp_unit === 'C') ? tempConvert(this.state.temp_threshold) : this.state.temp_threshold;

        return (
            <View>
                <Text>Bluetooth Device: {device}</Text>
                <Button title='Select Bluetooth Device' onPress={this.selectDevice} />
                <Text>Select Temperature Unit:</Text>
                <Picker
                    selectedValue={this.state.temp_unit}
                    onValueChange={(itemValue, itemIndex) => this.setState({ temp_unit: itemValue })}
                >
                    <Picker.Item label='Fahrenheit' value='F' />
                    <Picker.Item label='Celsius' value='C' />
                </Picker>
                <Text>Temperature Threshold: {temp} {temp_unit}</Text>
                <Slider
                    step = {1}
                    minimumValue = {30}
                    maximumValue = {100}
                    value = {this.state.temp_threshold}
                    onValueChange = {val => this.setState({temp_threshold: val})}
                    onSlidingComplete = {val => this.saveThreshold(val)}
                />
                <AlertButton 
                    buttonName='Clear History'
                    title='Are you sure?' 
                    message='This will clear all stored history from the app.' 
                    pressFunc={this.clearHistory} 
                />
                <AlertButton 
                    buttonName='Reset Defaults' 
                    title='Are you sure?' 
                    message='This will reset all settings, clear the saved sensor, and clear your history.'
                    pressFunc={this.resetDefaults}
                />
            </View>
        );
    }
}

export default Settings;
