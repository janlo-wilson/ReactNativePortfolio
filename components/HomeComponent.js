import React, { Component } from 'react';
import { Text, ScrollView, Linking } from 'react-native';
import { Card } from 'react-native-elements';

function Mission() {
    return (
        <Card 
        title="Our Mission" 
        wrapperStyle={{ margin: 10 }} 
        image={require('./images/Beautiful_Ocean.png')}
        containerStyle={{ backgroundColor: 'lightyellow' }}>
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
            <ScrollView style={{backgroundColor: '#ffffbf'}}>
                <Mission />
                <Card 
                title='Contact Us' 
                wrapperStyle={{ margin: 10 }} 
                image={require('./images/Flower_Fields.png')}
                containerStyle={{ backgroundColor: 'lightyellow' }}>
                    <Text>
                        Do you have questions about any of our events? Feedback about the site? Comments? We'd love to
                        hear from you! Just click on the link below.
                    </Text>
                    <Text
                    style={{color: 'blue'}}
                    onPress={() => Linking.openURL('mailto:WhatsUpNC@gmail.com')}>
                        WhatsUpNC@gmail.com</Text>
                </Card>
            </ScrollView>
        );
    }
}

export default Home;