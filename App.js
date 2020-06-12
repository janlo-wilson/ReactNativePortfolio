import React from 'react';
import Main from './components/MainComponent';
import { View, StyleSheet, AppRegistry } from 'react-native';
console.disableYellowBox = true;

export default function App() {
    return (
        <View style={styles.container}>
        <Main />
        </View>
    );
}

const styles = StyleSheet.create(
    {
        container:
        {
            flex: 1,
            backgroundColor: 'black'
        }
    });

    AppRegistry.registerComponent('App', () => App);