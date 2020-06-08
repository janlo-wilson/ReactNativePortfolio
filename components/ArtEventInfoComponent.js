import React, { Component } from 'react';
import { Text, View, ScrollView, FlatList } from 'react-native';
import { Card, Icon } from 'react-native-elements';
import { ARTS } from '../shared/Arts';

function RenderArtEvent(props) {

    const {artevent} = props;

    if (artevent) {
        return (
            <Card
                featuredTitle={artevent.name}>
                <Text style={{ margin: 10 }}>
                    {campsite.description}
                </Text>
                <Text style={{fontSize: 14}}>{`${artevent.date} -- ${artevent.time} -- ${artevent.location}`}</Text>
                <Text style={{fontSize: 12}}>{artevent.description}</Text>
                <Text style={{fontSize: 12}}>More Info</Text>
                <Icon
                    name={props.favorite ? 'heart' : 'heart-o'}
                    type='font-awesome'
                    color='#f50'
                    raised
                    reverse
                    onPress={() => props.favorite ? console.log('Already set as favorite') : props.markFavorite()}
                />
            </Card>
        );
    }
    return <View />;
}

class ArtEventInfo extends Component {

    constructor(props) {
        super(props);
        this.state = {
            arts: ARTS,
            favorite: false
        };
    }

    markFavorite() {
        this.setState({favorite: true});
    }

    static navigationOptions = {
        title: 'ArtEventInfo'
    };

    render() {
        const arteventId = this.props.navigation.getParam('arteventId');
        const artevent = this.state.arts.filter(artevent => artevent.id === arteventId)[0];
        return (
            <ScrollView>
                <RenderCampsite artevent={artevent} 
                    favorite={this.state.favorite}
                    markFavorite={() => this.markFavorite()}
                />
            </ScrollView>
        );
    }
}

export default ArtEventInfo;