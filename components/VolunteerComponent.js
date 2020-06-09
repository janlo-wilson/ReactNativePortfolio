import React, { Component } from 'react';
import { Text, FlatList } from 'react-native';
import { Card } from 'react-native-elements';
import { VOLUNTEER } from '../shared/Volunteer';

class Volunteer extends Component {

    constructor(props) {
        super(props);
        this.state = {
            volunteer: VOLUNTEER
        };
    }

    static navigationOptions = {
        title: 'Volunteer'
    };

    render() {

        const renderVolunteer = ({ item }) => {
            return (
                <Card
                    featuredTitle={item.name}
                    image={require('./images/Volunteer_Mural.png')}>
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
                    data={this.state.volunteer}
                    renderItem={renderVolunteer}
                    keyExtractor={item => item.id.toString()}
                />
        );
    }
   
}

export default Volunteer;