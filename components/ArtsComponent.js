import React, { Component } from 'react';
import { Text, FlatList, Linking, View, Share, StyleSheet, ScrollView } from 'react-native';
import { Card, Icon } from 'react-native-elements';
import { ARTS } from '../shared/Arts';
import * as Animatable from 'react-native-animatable'

class Arts extends Component {

    constructor(props) {
        super(props);
        this.state = {
            arts: ARTS
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
                            onPress={() => shareArtEvent(item.name, item.description, item.url)}
                        />
                    </View>
                </Card>
            );
        };

        return (
            <ScrollView style={{ backgroundColor: '#c3e5e7' }}>
                <Animatable.View animation='fadeInDown' duration={2000} delay={1000}>
                    <FlatList
                        data={this.state.arts}
                        renderItem={renderArts}
                        keyExtractor={item => item.id.toString()}
                        markFavorite={() => markFavorite()}
                        markUnFavorite={() => this.markUnFavorite()}
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

export default Arts;