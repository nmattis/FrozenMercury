import React, { Component } from 'react';
import { View, Text } from 'react-native';

class Temperature extends Component {
    render() {
        return (
            <View style={{ flexGrow: 1, alignItems: 'center', justifyContent: 'center' }}>
                <Text>{this.props.title}</Text>
                <Text>{this.props.temp}</Text>
                {this.props.error ? <Text>Error: {this.props.error}</Text> : null}
            </View>
        );
    }
}

export default Temperature;
