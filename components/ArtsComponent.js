import React, { Component } from 'react';
import { Text, FlatList, Linking, View, Share, StyleSheet } from 'react-native';
import { Card, Icon, ListItem } from 'react-native-elements';
import { ARTS } from '../shared/Arts';
import * as Animatable from 'react-native-animatable';

class Arts extends Component {

    constructor(props) {
        super(props);
        this.state = {
            arts: ARTS,
            favorite: false
        };
    }


    markFavorite() {
        this.setState({ favorite: true });
    }

    static navigationOptions = {
        title: 'Arts'
    };

    render() {

        const shareArtEvent = (title, message, url) => {
            Share.share({
                title: title,
                message: `${title}: ${message} ${url}`,
                url: url
            }, {
                dialogTitle: 'Share ' + title
            });
        };

        const renderArts = ({ item }) => {
            return (
                <Card
                    key={item.id}
                    featuredTitle={item.name}
                    featuredTitleStyle={{ textAlign: 'center' }}
                    image={require('./images/Arts_Playbill.png')}
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
                            onPress={() => shareArtEvent(item.name, item.description, item.url)}
                        />
                    </View>
                </Card>
            );
        };

        return (
            <Animatable.View animation='fadeInDown' duration={2000} delay={1000}>
                <FlatList
                    data={this.state.arts}
                    renderItem={renderArts}
                    keyExtractor={item => item.id.toString()}
                    favorite={this.state.favorite}
                    markFavorite={() => markFavorite()}
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

export default Arts;