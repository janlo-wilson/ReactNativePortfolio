import React, { Component } from 'react';
import { Text, FlatList } from 'react-native';
import { Card } from 'react-native-elements';
import { MUSIC } from '../shared/Music';

class Music extends Component {

    constructor(props) {
        super(props);
        this.state = {
            music: MUSIC
        };
    }

    static navigationOptions = {
        title: 'Music'
    };

    render() {

        const renderMusic = ({ item }) => {
            return (
                <Card
                    featuredTitle={item.name}
                    image={require('./images/Music_Apocalyptica.png')}>
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
                    data={this.state.music}
                    renderItem={renderMusic}
                    keyExtractor={item => item.id.toString()}
                />
        );
    }
   
}

export default Music;