import React from 'react';
import Main from './components/MainComponent';
import { View, StyleSheet, AppRegistry } from 'react-native';
import { Provider } from 'react-redux';
import { ConfigureStore } from './redux/configureStore';
console.disableYellowBox = true;

const store = ConfigureStore();

export default function App() {
    return (
        <Provider store={store} style={styles.container}>
        <Main />
        </Provider>
    );
}

const styles = StyleSheet.create(
    {
        container:
        {
            flex: 1,
            backgroundColor: '#c3e5e7'
        }
    });

    AppRegistry.registerComponent('App', () => App);