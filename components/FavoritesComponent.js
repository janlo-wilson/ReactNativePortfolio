import React, { Component } from 'react';
import { ScrollView, Text } from 'react-native';

class Favorites extends Component {

    static navigationOptions = {
        title: 'Favorites'
    }

    render() {
        return (
            <ScrollView>
                <Card title='Most Popular Events' wrapperStyle={{ margin: 20 }}>
                    <Text></Text>
                    <Text></Text>
                    <Text style={{ marginBottom: 10 }}></Text>
                    <Text></Text>
                    <Text></Text>
                </Card>
            </ScrollView>
        );
    }
}

export default Favorites;