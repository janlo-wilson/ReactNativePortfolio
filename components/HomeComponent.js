import React, { Component } from 'react';
import { Text, ScrollView } from 'react-native';
import { Card } from 'react-native-elements';

function Mission() {
    return (
        <Card title="Our Mission" image={require('./images/Beautiful_Ocean.png')}>
            <Text>
            At What's Up North County we strive to bring all of North San Diego County's hottest
            events to you on one simple, easy-to-use website. You can search for a particular event via
            the search bar, browse the different event types on the events page, or get an overview of
            what's happening via our calendar. Either way, you don't have to keep searching the internet
            for something to do - you can find it all right here!
            </Text>
        </Card>
    );
}

class Home extends Component {

    static navigationOptions = {
        title: 'Home'
    }

    render() {
        return (
            <ScrollView>
                <Mission />
                <Card title='Contact Us' wrapperStyle={{ margin: 20 }} image={require('./images/Flower_Fields.png')}>
                    <Text>Email: campsites@nucamp.co</Text>
                </Card>
            </ScrollView>
        );
    }
}

export default Home;