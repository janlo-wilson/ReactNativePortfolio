import React, { Component } from 'react';
import { Text, FlatList, Linking, Share, StyleSheet, View } from 'react-native';
import { Card, Icon } from 'react-native-elements';
import { MUSIC } from '../shared/Music';
import * as Animatable from 'react-native-animatable';

class Music extends Component {

    constructor(props) {
        super(props);
        this.state = {
            music: MUSIC,
            favorite: false
        };
    }

    markFavorite() {
        this.setState({ favorite: true });
    }

    static navigationOptions = {
        title: 'Music'
    };

    render() {

        const shareMusicEvent = (title, message, url) => {
            Share.share({
                title: title,
                message: `${title}: ${message} ${url}`,
                url: url
            }, {
                dialogTitle: 'Share ' + title
            });
        };

        const renderMusic = ({ item }) => {
            return (
                <Card
                    featuredTitle={item.name}
                    featuredTitleStyle={{ textAlign: 'center' }}
                    image={require('./images/Music_Apocalyptica.png')}
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
                            onPress={() => shareMusicEvent(item.name, item.description, item.url)}
                        />
                    </View>
                </Card>
            );
        };

        return (
            <Animatable.View animation='fadeInDown' duration={2000} delay={1000}>
                <FlatList
                    data={this.state.music}
                    renderItem={renderMusic}
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

export default Music;