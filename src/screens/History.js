import React, { Component } from 'react';
import {
  Platform,
  StyleSheet,
  Text,
  View,
} from 'react-native';

import HistoryList from '../components/HistoryList';

import { keyExists, readFromStorage } from '../utils/storageUtil';

class History extends Component {
    constructor(props) {
        super(props);

        const HISTORY_KEY = '@HIST:key';
        this.state = { data: null }
    }

    componentDidMount() {
        keyExists(this.HISTORY_KEY).then(exists => {
            if (exists) {
                readFromStorage(this.HISTORY_KEY).then(savedData => {
                    this.setState({
                        data: savedData
                    });
                });
            }
        });
    }

    render() {
        if (this.state.data) {
            return (
                <View>
                    <HistoryList data={ this.state.data } />
                </View>
            );
        }

        return (
            <View><Text>There are no sessions in your history.</Text></View>
        );
    }
}

export default History;
