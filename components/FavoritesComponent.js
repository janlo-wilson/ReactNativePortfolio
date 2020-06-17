import React, { Component } from 'react';
import { ScrollView, Text } from 'react-native';
import { Card } from 'react-native-elements';

class Favorites extends Component {

    static navigationOptions = {
        title: 'Favorites'
    }

    render() {
        return (
            <ScrollView style={{backgroundColor: '#c3e5e7'}}>
                <Card 
                title='Most Popular Events' 
                wrapperStyle={{ margin: 10 }}
                containerStyle={{ backgroundColor: 'lightyellow' }}>
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