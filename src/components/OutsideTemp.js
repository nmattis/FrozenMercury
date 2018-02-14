import React, { Component } from 'react';
import { View, Text } from 'react-native';

import getCurrentLocation from '../utils/getCurrentLocation';

class OutsideTemp extends Component {
    constructor(props) {
        super(props);

        this.state = {
            latitude: null,
            longitude: null,
            weather: null,
            error: null,
        };
    }

    componentDidMount() {
        getCurrentLocation().then((position) => {
            // console.log(position);
            this.setState({
                latitude: position.coords.latitude,
                longitude: position.coords.longitude,
                error: null,
            });
        }).catch((err) => {
            // console.log(err.message);
            this.setState({ error: err.message });
        });
    }

    render() {
        return (
            <View style={{ flexGrow: 1, alignItems: 'center', justifyContent: 'center' }}>
                <Text>Latitude: {this.state.latitude}</Text>
                <Text>Longitude: {this.state.longitude}</Text>
                {this.state.error ? <Text>Error: {this.state.error}</Text> : null}
            </View>
        );
    }
}

export default OutsideTemp;
