import React, { Component } from 'react';
import { Text, ScrollView } from 'react-native';
import { Card } from 'react-native-elements';

function Arts() {
    return (
        <Card title="Arts and Theater" image={require('./images/Arts_Playbill.png')}>
            <Text>
            Live theater (plays/musicals), art festivals, museum exhibition openings, and lectures.
            </Text>
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