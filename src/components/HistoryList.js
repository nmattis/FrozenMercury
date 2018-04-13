import React, { Component } from 'react';
import {
  FlatList,
  Platform,
  StyleSheet,
  Text,
  View
} from 'react-native';
import { List, ListItem } from 'react-native-elements';

class HistoryList extends Component {
    _renderItem({ item, index }) {
        return(
            <ListItem
                hideChevron
                title = {item.ts}
                subtitle = {'Avg Outside Temp: ' + item.avg_weather + '    Total Time Used: ' + item.elapsed_time}
            />
        );
    }

    render() {
        return (
            <FlatList
                data = {this.props.data}
                renderItem = {this._renderItem}
                keyExtractor = {(item, index) => index.toString()}
            />
        );
    }
}

export default HistoryList;
