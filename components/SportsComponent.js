import React, { Component } from 'react';
import { Text, FlatList } from 'react-native';
import { Card } from 'react-native-elements';
import { SPORTS } from '../shared/Sports';

class Sports extends Component {

    constructor(props) {
        super(props);
        this.state = {
            sports: SPORTS
        };
    }

    static navigationOptions = {
        title: 'Sports'
    };

    render() {

        const renderSports = ({ item }) => {
            return (
                <Card
                    featuredTitle={item.name}
                    image={require('./images/Viking_Shoot.png')}>
                    <Text style={{margin: 10 }}>
                        {item.date} -- {item.time}
                    </Text>
                    <Text style={{margin: 10 }}>
                        {item.location}
                    </Text>
                    <Text style={{ margin: 10 }}>
                        {item.fragment}
                    </Text>
                </Card>
            );
        };

        return(
            <FlatList
                    data={this.state.sports}
                    renderItem={renderSports}
                    keyExtractor={item => item.id.toString()}
                />
        );
    }
   
}

export default Sports;