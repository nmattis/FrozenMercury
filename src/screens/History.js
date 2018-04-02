import React, { Component } from 'react';
import {
  Platform,
  StyleSheet,
  Text,
  View
} from 'react-native';

import HistoryList from '../components/HistoryList';

class History extends Component {
    constructor(props) {
        super(props);

        this.state = { data: null }
    }

    componentDidMount() {
        // will be replaced with call out to local storage for the data
        this.setState({
            data: SESSIONS
        });
    }

    render() {
        return (
            <View>
                <HistoryList data={ this.state.data } />
            </View>
        );
    }
}

const SESSIONS = [
    {session_id: 0, ts: new Date(), avg_weather: '70.85', elapsed_time: '01:40:00.0', estimated_time: '01:40:00.0'},
    {session_id: 1, ts: new Date(), avg_weather: '80.85', elapsed_time: '01:10:05.0', estimated_time: '00:45:00.0'},
    {session_id: 2, ts: new Date(), avg_weather: '90.85', elapsed_time: '01:10:05.0', estimated_time: '00:40:00.0'},
    {session_id: 3, ts: new Date(), avg_weather: '66.85', elapsed_time: '04:10:05.0', estimated_time: '00:22:00.0'},
    {session_id: 4, ts: new Date(), avg_weather: '75.85', elapsed_time: '00:50:00.0', estimated_time: '00:50:00.0'},
    {session_id: 5, ts: new Date(), avg_weather: '40.85', elapsed_time: '00:40:05.0', estimated_time: '00:40:00.0'},
    {session_id: 6, ts: new Date(), avg_weather: '60.85', elapsed_time: '00:22:05.0', estimated_time: '02:40:00.0'},
    {session_id: 7, ts: new Date(), avg_weather: '70.85', elapsed_time: '00:15:05.0', estimated_time: '03:40:00.0'},
    {session_id: 8, ts: new Date(), avg_weather: '88.85', elapsed_time: '02:10:05.0', estimated_time: '04:40:00.0'},
    {session_id: 9, ts: new Date(), avg_weather: '88.85', elapsed_time: '02:10:05.0', estimated_time: '04:40:00.0'},
    {session_id: 10, ts: new Date(), avg_weather: '88.85', elapsed_time: '02:10:05.0', estimated_time: '04:40:00.0'},
    {session_id: 11, ts: new Date(), avg_weather: '88.85', elapsed_time: '02:10:05.0', estimated_time: '04:40:00.0'},
    {session_id: 12, ts: new Date(), avg_weather: '88.85', elapsed_time: '02:10:05.0', estimated_time: '04:40:00.0'},
    {session_id: 13, ts: new Date(), avg_weather: '88.85', elapsed_time: '02:10:05.0', estimated_time: '04:40:00.0'},
    {session_id: 14, ts: new Date(), avg_weather: '88.85', elapsed_time: '02:10:05.0', estimated_time: '04:40:00.0'},
    {session_id: 15, ts: new Date(), avg_weather: '88.85', elapsed_time: '02:10:05.0', estimated_time: '04:40:00.0'},
    {session_id: 16, ts: new Date(), avg_weather: '88.85', elapsed_time: '02:10:05.0', estimated_time: '04:40:00.0'},
    {session_id: 17, ts: new Date(), avg_weather: '88.85', elapsed_time: '02:10:05.0', estimated_time: '04:40:00.0'},
    {session_id: 18, ts: new Date(), avg_weather: '88.85', elapsed_time: '02:10:05.0', estimated_time: '04:40:00.0'},
    {session_id: 19, ts: new Date(), avg_weather: '88.85', elapsed_time: '02:10:05.0', estimated_time: '04:40:00.0'},
    {session_id: 20, ts: new Date(), avg_weather: '88.85', elapsed_time: '02:10:05.0', estimated_time: '04:40:00.0'},
    {session_id: 21, ts: new Date(), avg_weather: '88.85', elapsed_time: '02:10:05.0', estimated_time: '04:40:00.0'},
    {session_id: 22, ts: new Date(), avg_weather: '88.85', elapsed_time: '02:10:05.0', estimated_time: '04:40:00.0'},
    {session_id: 23, ts: new Date(), avg_weather: '78.85', elapsed_time: '01:10:05.0', estimated_time: '04:44:00.0'}
];

export default History;
