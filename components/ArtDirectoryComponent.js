import React, { Component } from 'react';
import { FlatList, ScrollView } from 'react-native';
import { ListItem } from 'react-native-elements';
//import ArtEventInfo from './ArtEventInfoComponent';
import { ARTS } from '../shared/Arts';

function RenderArtEvents(props) {
    
    const { artevent } = props;
    
    if (artevent) {
        return (
            <Card
                featuredTitle={artevent.name}
                subtitle={artevent.date}>
                <Text style={{ margin: 10 }}>
                    {artevent.description}
                </Text>
            </Card>
        );
    }
    return <View />;
}

class ArtDirectory extends Component {

    constructor(props) {
        super(props);
        this.state = {
            arts: ARTS
        };
    }

    static navigationOptions = {
        title: 'Art Directory'
    };

    render() {
        const arteventId = this.props.navigation.getParam('arteventId');
        const artevent = this.props.arts.filter(artevent => artevent.id === arteventId);
        return (
            <ScrollView>
                <RenderArtEvents artevent={artevent} />
            </ScrollView>
        );
    }
}

export default ArtDirectory;