import React, { Component } from 'react';
import {
  Platform,
  StyleSheet,
  Text,
  View
} from 'react-native';

import TempWidget from '../components/TempWidget';
import getCurrentLocation from '../utils/getCurrentLocation';
import getLocalWeather from '../utils/getLocalWeather';

class Home extends Component {
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
        <View style={styles.container}>
            <TempWidget title={this.state.location} temp={this.state.temp} error={this.state.error} />
        </View>
        );
    }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#F5FCFF',
  },
  welcome: {
    fontSize: 20,
    textAlign: 'center',
    margin: 10,
  },
  instructions: {
    textAlign: 'center',
    color: '#333333',
    marginBottom: 5,
  },
});

export default Home;
