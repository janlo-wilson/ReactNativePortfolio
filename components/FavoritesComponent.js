import React, { Component } from 'react';
import { Text, FlatList, Linking, ScrollView } from 'react-native';
import { ARTS } from '../shared/Arts';
import { MUSIC } from '../shared/Music';
import { SPORTS } from '../shared/Sports';
import { VOLUNTEER } from '../shared/Volunteer';
import { Card } from 'react-native-elements';
import * as Animatable from 'react-native-animatable';

class Favorites extends Component {

    constructor(props) {
        super(props);
        this.state = {
            arts: ARTS,
            music: MUSIC,
            sports: SPORTS,
            volunteer: VOLUNTEER
        };
    }

    static navigationOptions = {
        title: 'Favorites'
    }

    render() {

        const renderFavorites = ({ item }) => {

            if (item.featured) {
                return (

                    <Card containerStyle={{ backgroundColor: 'lightyellow' }}>
                        <Text style={{ margin: 10, fontSize: 20, fontWeight: 'bold', textAlign: 'center' }}>
                            {item.name}
                        </Text>
                        <Text style={{ margin: 10, fontSize: 18 }}>
                            {item.date} -- {item.time}
                        </Text>
                        <Text style={{ margin: 10, fontSize: 16 }}>
                            {item.fragment}
                        </Text>
                        <Text
                            style={{ color: 'blue', margin: 10, fontSize: 16 }}
                            onPress={() => Linking.openURL(`${item.url}`)}>
                            Go to their site for more information
                        </Text>
                    </Card>
                );
            }
        }

        return (
            <ScrollView style={{ backgroundColor: '#c3e5e7' }}>
                <Animatable.View animation='zoomIn' duration={2000} delay={1000}>
                    <Text style={{
                        textAlign: 'center',
                        fontSize: 24,
                        marginTop: 20,
                        marginBottom: 10,
                        fontWeight: 'bold',
                        color: 'gray'
                    }}>Most Popular Events</Text>
                    <FlatList
                        data={this.state.arts}
                        renderItem={renderFavorites}
                        keyExtractor={item => item.id.toString()}
                    />
                    <FlatList
                        data={this.state.music}
                        renderItem={renderFavorites}
                        keyExtractor={item => item.id.toString()}
                    />
                    <FlatList
                        data={this.state.sports}
                        renderItem={renderFavorites}
                        keyExtractor={item => item.id.toString()}
                    />
                    <FlatList
                        data={this.state.volunteer}
                        renderItem={renderFavorites}
                        keyExtractor={item => item.id.toString()}
                    />
                </Animatable.View>
            </ScrollView>
        )
    }
}

export default Favorites;