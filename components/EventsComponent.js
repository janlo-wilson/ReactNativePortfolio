import React, { Component } from 'react';
import { ACARD } from '../shared/ACard';
import { MCARD } from '../shared/MCard';
import { SCARD } from '../shared/SCard';
import { VCARD } from '../shared/VCard';
import { FlatList, View } from 'react-native';
import { ListItem } from 'react-native-elements';
import * as Animatable from 'react-native-animatable';


class Events extends Component {

    constructor(props) {
        super(props);
        this.state = {
            acard: ACARD,
            mcard: MCARD,
            scard: SCARD,
            vcard: VCARD
        }
    }

    static navigationOptions = {
        title: 'Events'
    };

    render() {
        const { navigate } = this.props.navigation;

        const renderArts = ({ item }) => {
            return (
                    <ListItem
                        title={item.name}
                        subtitle={item.description}
                        leftAvatar={{ source: require('./images/Arts_Playbill.png') }}
                        onPress={() => navigate('Arts')}
                        containerStyle={{ backgroundColor: 'lightyellow' }}
                    />
            );
        };

        const renderMusic = ({ item }) => {
            return (
                    <ListItem
                        title={item.name}
                        subtitle={item.description}
                        leftAvatar={{ source: require('./images/Music_Apocalyptica.png') }}
                        onPress={() => navigate('Music')}
                        containerStyle={{ backgroundColor: 'lightyellow' }}
                    />
            );
        };
        const renderSports = ({ item }) => {
            return (
                    <ListItem
                        title={item.name}
                        subtitle={item.description}
                        leftAvatar={{ source: require('./images/Viking_Shoot.png') }}
                        onPress={() => navigate('Sports')}
                        containerStyle={{ backgroundColor: 'lightyellow' }}
                    />
            );
        };

        const renderVolunteer = ({ item }) => {
            return (
                    <ListItem
                        title={item.name}
                        subtitle={item.description}
                        leftAvatar={{ source: require('./images/Volunteer_Mural.png') }}
                        onPress={() => navigate('Volunteer')}
                        containerStyle={{ backgroundColor: 'lightyellow' }}
                    />
            );
        };

        return (
            <Animatable.View animation='fadeInRightBig' duration={2000} delay={1000}>
                <FlatList
                    data={this.state.acard}
                    renderItem={renderArts}
                    keyExtractor={item => item.id.toString()}
                />
                <FlatList
                    data={this.state.mcard}
                    renderItem={renderMusic}
                    keyExtractor={item => item.id.toString()}
                />
                <FlatList
                    data={this.state.scard}
                    renderItem={renderSports}
                    keyExtractor={item => item.id.toString()}
                />
                <FlatList
                    data={this.state.vcard}
                    renderItem={renderVolunteer}
                    keyExtractor={item => item.id.toString()}
                />
            </Animatable.View>
        );
    }
};

export default Events;