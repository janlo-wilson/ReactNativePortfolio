import React, { Component } from 'react';
import { Text, FlatList } from 'react-native';
import { Card } from 'react-native-elements';
import { ARTS } from '../shared/Arts';

class Arts extends Component {

    constructor(props) {
        super(props);
        this.state = {
            arts: ARTS
        };
    }

    static navigationOptions = {
        title: 'Arts'
    };

    render() {

        const renderArts = ({ item }) => {
            return (
                <Card
                    featuredTitle={item.name}
                    image={require('./images/Arts_Playbill.png')}>
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
                    data={this.state.arts}
                    renderItem={renderArts}
                    keyExtractor={item => item.id.toString()}
                />
        );
    }
   
}

export default Arts;