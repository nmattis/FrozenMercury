import React, { Component } from 'react';
import {
  Platform,
  StyleSheet,
  Text,
  View
} from 'react-native';

class History extends Component {
    render() {
        return (
            <View>
                <Text>History Page</Text>
            </View>
        );
    }
}

const SESSIONS = [
    {ts: new Date(), avg_weather: '70.85', elapsed_time: '01:40:00.0', estimated_time: '01:40:00.0'},
    {ts: new Date(), avg_weather: '80.85', elapsed_time: '01:10:05.0', estimated_time: '00:45:00.0'},
    {ts: new Date(), avg_weather: '90.85', elapsed_time: '01:10:05.0', estimated_time: '00:40:00.0'},
    {ts: new Date(), avg_weather: '66.85', elapsed_time: '04:10:05.0', estimated_time: '00:22:00.0'},
    {ts: new Date(), avg_weather: '75.85', elapsed_time: '00:50:00.0', estimated_time: '00:50:00.0'},
    {ts: new Date(), avg_weather: '40.85', elapsed_time: '00:40:05.0', estimated_time: '00:40:00.0'},
    {ts: new Date(), avg_weather: '60.85', elapsed_time: '00:22:05.0', estimated_time: '02:40:00.0'},
    {ts: new Date(), avg_weather: '70.85', elapsed_time: '00:15:05.0', estimated_time: '03:40:00.0'},
    {ts: new Date(), avg_weather: '88.85', elapsed_time: '02:10:05.0', estimated_time: '04:40:00.0'},
    {ts: new Date(), avg_weather: '78.85', elapsed_time: '01:10:05.0', estimated_time: '04:44:00.0'}
];

export default History;
