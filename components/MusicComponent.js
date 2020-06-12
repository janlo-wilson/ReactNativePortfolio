import React, { Component } from 'react';
import { Text, FlatList, Linking } from 'react-native';
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
                    <Icon
                        name={this.state.favorite ? 'heart' : 'heart-o'}
                        type='font-awesome'
                        color='rgb(252, 166, 133)'
                        raised
                        reverse
                        onPress={() => this.state.favorite ?
                            console.log('Already set as favorite') : this.markFavorite()}
                    />
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

export default Music;