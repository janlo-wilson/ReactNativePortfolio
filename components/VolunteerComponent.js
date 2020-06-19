import React, { Component } from 'react';
import { Text, FlatList, Linking, Share, StyleSheet, View, ScrollView } from 'react-native';
import { Card, Icon } from 'react-native-elements';
import { VOLUNTEER } from '../shared/Volunteer';
import * as Animatable from 'react-native-animatable';

class Volunteer extends Component {

    constructor(props) {
        super(props);
        this.state = {
            volunteer: VOLUNTEER
        };
    }

    markFavorite({ item }) {
        item.featured = true;
        this.forceUpdate();
    }

    markUnFavorite({ item }) {
        item.featured = false;
        this.forceUpdate();
    }

    static navigationOptions = {
        title: 'Volunteer'
    };

    render() {

        const shareVolunteerEvent = (title, message, url) => {
            Share.share({
                title: title,
                message: `${title}: ${message} ${url}`,
                url: url
            }, {
                dialogTitle: 'Share ' + title
            });
        };

        const renderVolunteer = ({ item }) => {
            return (
                <Card
                    featuredTitle={item.name}
                    featuredTitleStyle={{ textAlign: 'center' }}
                    image={require('./images/Volunteer_Mural.png')}
                    containerStyle={{ backgroundColor: 'lightyellow' }}>
                    <Text style={{ margin: 10, fontSize: 18, fontWeight: 'bold' }}>
                        {item.date} -- {item.time}
                    </Text>
                    <Text style={{ margin: 10, fontSize: 14, fontStyle: 'italic' }}>
                        {item.location}
                    </Text>
                    <Text style={{ margin: 10, fontSize: 16 }}>
                        {item.fragment}
                    </Text>
                    <Text
                        style={{ color: 'blue', margin: 10, fontSize: 16 }}
                        onPress={() => Linking.openURL(`${item.url}`)}>
                        More info
                    </Text>
                    <View style={styles.cardRow}>
                        <Icon
                            name={item.featured ? 'thumbs-up' : 'thumbs-o-up'}
                            type='font-awesome'
                            color='rgb(252, 166, 133)'
                            style={styles.cardItem}
                            raised
                            reverse
                            onPress={() => item.featured ?
                                this.markUnFavorite({ item }) : this.markFavorite({ item })}
                        />
                        <Icon
                            name={'share'}
                            type='font-awesome'
                            color='rgb(252, 166, 133)'
                            style={styles.cardItem}
                            raised
                            reverse
                            onPress={() => shareVolunteerEvent(item.name, item.description, item.url)}
                        />
                    </View>
                </Card>
            );
        };

        return (
            <ScrollView style={{ backgroundColor: '#c3e5e7' }}>
                <Animatable.View animation='fadeInDown' duration={2000} delay={1000}>
                    <FlatList
                        data={this.state.volunteer}
                        renderItem={renderVolunteer}
                        keyExtractor={item => item.id.toString()}
                        favorite={this.state.favorite}
                        markFavorite={() => this.markFavorite()}
                    />
                </Animatable.View>
            </ScrollView>
        );
    }

}

const styles = StyleSheet.create({
    cardRow: {
        alignItems: 'center',
        justifyContent: 'center',
        flex: 1,
        flexDirection: 'row',
        margin: 20
    },
    cardItem: {
        flex: 1,
        margin: 10
    }
});

export default Volunteer;