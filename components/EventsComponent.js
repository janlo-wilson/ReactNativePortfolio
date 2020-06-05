import React, {Component } from 'react';
import { Text, ScrollView, StyleSheet, Button } from 'react-native';
import { Card, Icon } from 'react-native-elements';
import ArtDirectory from './ArtDirectoryComponent';
import { createStackNavigator } from 'react-navigation';

const ArtsNavigator = createStackNavigator(
    {
        screen: ArtDirectory,
        navigationOptions: ({navigate}) => ({
            headerStyle: {
                backgroundColor: 'rgb(252, 166, 133)'
            },
            headerTintColor: '#fff',
            headerTitleStyle: {
                color: '#fff'
            },
            headerLeft: <Icon
                name='paint-brush'
                type='font-awesome'
                iconStyle={styles.stackIcon}
                onPress={() => navigate('Arts', { ArtDirectory })}
            />
        })
    }
);

function Arts({navigation}) {
    return (
        <Card title="Arts and Theater" image={require('./images/Arts_Playbill.png')}>
            <Text>
            Live theater (plays/musicals), art festivals, museum exhibition openings, and lectures.
            </Text>
            <Button 
                title="Click here for Art Events"
                onPress={() => navigation.navigate('Arts')}
            />
        </Card>
    );
}

function Music() {
    return (
        <Card title="Music" image={require('./images/Music_Apocalyptica.png')}>
            <Text>
            Concerts, open mic nights, symphonies, and festivals.
            </Text>
        </Card>
    );
}

function Sports() {
    return (
        <Card title="Sports" image={require('./images/Viking_Shoot.png')}>
            <Text>
            Local minor league sports, surfing competitions, roller derby, and guided hikes.
            </Text>
        </Card>
    );
}

function Volunteer() {
    return (
        <Card title="Volunteer" image={require('./images/Volunteer_Mural.png')}>
            <Text>
            Looking for a way to help out your community this weekend? Find it here!
            </Text>
        </Card>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
    },
    stackIcon: {
        marginLeft: 10,
        color: '#fff',
        fontSize: 24
    }
});

class Events extends Component {

    static navigationOptions = {
        title: 'Events'
    };

    render() {

        return (
            <ScrollView>
                <Arts />
                <Music />
                <Sports />
                <Volunteer />
            </ScrollView>
        );
    }
}

export default Events;