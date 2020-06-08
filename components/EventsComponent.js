import React, {Component } from 'react';
import { ARTS } from '../shared/Arts';
import { Text, /*StyleSheet, Button,*/ FlatList, ScrollView } from 'react-native';
import { Card } from 'react-native-elements';

class Events extends Component {

    constructor(props) {
        super(props);
        this.state = {
            arts: ARTS
        }
    }

    static navigationOptions = {
        title: 'Events'
    };

    render() {
        const { navigate } = this.props.navigation;
        /*const Arts = () => {
            return (
                <FlatList title='Arts and Theater' image={require('./images/Arts_Playbill.png')}>
                    <Text>
                    Live theater (plays/musicals), art festivals, museum exhibition openings, and lectures.
                    </Text>
                </Card>
            );
        }*/
        const Arts = ({item}) => {
            return (
                <FlatList
                    title={item.name}
                    caption={item.description}
                    onPress={() => navigate('ArtDirectory')}
                    imageSrc={require('./images/Arts_Playbill.png')}
                />
            );
        };

        return (
            <FlatList
                data={this.props.arts}
                renderItem={Arts}
                keyExtractor={item => item.id.toString()}
            />
        );
    }
};


/*function Music() {
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
}*/

export default Events;