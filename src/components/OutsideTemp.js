import React, { Component } from 'react';
import { View, Text } from 'react-native';

import getCurrentLocation from '../utils/getCurrentLocation';
import getLocalWeather from '../utils/getLocalWeather';

class OutsideTemp extends Component {
    constructor(props) {
        super(props);

        this.state = {
            latitude: null,
            longitude: null,
            location: null,
            temp: null,
            error: null,
        };
    }

    componentDidMount() {
        getCurrentLocation().then((position) => {
            var lat = position.coords.latitude;
            var lon = position.coords.longitude;

            this.setState({
                latitude: lat,
                longitude: lon,
                error: null
            });

            getLocalWeather(lat, lon)
                .then((response) => response.json())
                .then((data) => {
                    this.setState({ 
                        location: data.name,
                        temp: data.main.temp,
                        error: null
                    });
                })
                .catch((err) => {
                    this.setState({ error: err.message });
                });
        }).catch((err) => {
            this.setState({ error: err.message });
        });
    }

    render() {
        return (
            <View style={{ flexGrow: 1, alignItems: 'center', justifyContent: 'center' }}>
                <Text>Latitude: {this.state.latitude}</Text>
                <Text>Longitude: {this.state.longitude}</Text>
                <Text>Weather: {this.state.temp} in {this.state.location}</Text>
                {this.state.error ? <Text>Error: {this.state.error}</Text> : null}
            </View>
        );
    }
}

export default OutsideTemp;
