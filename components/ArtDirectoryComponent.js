import React, { Component } from 'react';
import { FlatList } from 'react-native';
import { ListItem } from 'react-native-elements';
import { ARTS } from '../shared/arts';

class ArtDirectory extends Component {

    constructor(props) {
        super(props);
        this.state = {
            arts: ARTS
        };
    }

    static navigationOptions = {
        title: 'Arts Directory'
    };

    render() {
        const { navigate } = this.props.navigation;
        const renderDirectoryItem = ({ item }) => {
            return (
                <ListItem
                    title={item.name}
                    subtitle={item.description}
                    onPress={() => navigate('CampsiteInfo', { campsiteId: item.id })}
                    leftAvatar={{ source: require('./images/react-lake.jpg') }}
                />
            );
        };

        return (
            <FlatList
                data={this.state.campsites}
                renderItem={renderDirectoryItem}
                keyExtractor={item => item.id.toString()}
            />
        );
    }
}

export default Directory;