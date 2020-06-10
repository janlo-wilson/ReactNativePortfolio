import React, { Component } from 'react';
import { Text, FlatList, Linking } from 'react-native';
import { Card, Icon } from 'react-native-elements';
import { SPORTS } from '../shared/Sports';

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
            <FlatList
                data={this.state.sports}
                renderItem={renderSports}
                keyExtractor={item => item.id.toString()}
                favorite={this.state.favorite}
                markFavorite={() => this.markFavorite()}
            />
        );
    }

}

export default Sports;