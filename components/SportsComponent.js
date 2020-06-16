import React, { Component } from 'react';
import { Text, FlatList, Linking, Share, StyleSheet, View } from 'react-native';
import { Card, Icon } from 'react-native-elements';
import { SPORTS } from '../shared/Sports';
import * as Animatable from 'react-native-animatable';

class Sports extends Component {

    constructor(props) {
        super(props);
        this.state = {
            sports: SPORTS,
            favorite: false
        };
    }

    markFavorite() {
        this.setState({ favorite: true });
    }

    static navigationOptions = {
        title: 'Sports'
    };

    render() {

        const shareSportsEvent = (title, message, url) => {
            Share.share({
                title: title,
                message: `${title}: ${message} ${url}`,
                url: url
            }, {
                dialogTitle: 'Share ' + title
            });
        };

        const renderSports = ({ item }) => {
            return (
                <Card
                    featuredTitle={item.name}
                    featuredTitleStyle={{ textAlign: 'center' }}
                    image={require('./images/Viking_Shoot.png')}
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
                            name={this.state.favorite ? 'heart' : 'heart-o'}
                            type='font-awesome'
                            color='rgb(252, 166, 133)'
                            style={styles.cardItem}
                            raised
                            reverse
                            onPress={() => this.state.favorite ?
                                console.log('Already set as favorite') : this.markFavorite()}
                        />
                        <Icon
                            name={'share'}
                            type='font-awesome'
                            color='rgb(252, 166, 133)'
                            style={styles.cardItem}
                            raised
                            reverse
                            onPress={() => shareSportsEvent(item.name, item.description, item.url)}
                        />
                    </View>
                </Card>
            );
        };

        return (
            <Animatable.View animation='fadeInDown' duration={2000} delay={1000}>
                <FlatList
                    data={this.state.sports}
                    renderItem={renderSports}
                    keyExtractor={item => item.id.toString()}
                    favorite={this.state.favorite}
                    markFavorite={() => this.markFavorite()}
                />
            </Animatable.View>
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

export default Sports;