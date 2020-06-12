import React, { Component } from 'react';
import { Text, View, ScrollView, StyleSheet, Picker, Button } from 'react-native';
import { Input } from 'react-native-elements'
import DatePicker from 'react-native-datepicker';

class Submission extends Component {
    constructor(props) {
        super(props);

        this.state = {
            type: '',
            date: '',
            time1: '',
            time2: '',
            url: '',
            email: '',
            showModal: false
        }
    }

    static navigationOptions = {
        title: 'Submit an Event'
    }

    toggleModal() {
        this.setState({ showModal: !this.state.showModal });
    }

    handleSubmission() {
        console.log(JSON.stringify(this.state));
        this.toggleModal();
    }

    resetForm() {
        this.setState({
            type: '',
            date: '',
            time1: '',
            time2: '',
            url: '',
            email: '',
            showModal: false
        });
    }

    render() {

        return (
            <ScrollView style={{backgroundColor: 'lightyellow'}}>
                <View style={styles.formRow}>
                    <Text style={styles.formLabel}>Type of Event</Text>
                    <Picker
                        style={styles.formItem}
                        selectedValue={this.state.type}
                        onValueChange={itemValue => this.setState({ type: itemValue })}>
                        <Picker.Item label='Arts' value='Arts' />
                        <Picker.Item label='Music' value='Music' />
                        <Picker.Item label='Sports' value='Sports' />
                        <Picker.Item label='Volunteer' value='Volunteer' />
                    </Picker>
                </View>
                <View style={styles.formRow}>
                    <Text style={styles.formLabel}>Event Date</Text>
                    <DatePicker
                        style={{ flex: 2, marginRight: 20 }}
                        date={this.state.date}
                        format='YYYY-MM-DD'
                        mode='date'
                        placeholder='Select Date'
                        minDate={new Date().toISOString()}
                        confirmBtnText='Confirm'
                        cancelBtnText='Cancel'
                        customStyles={{
                            dateIcon: {
                                position: 'absolute',
                                left: 0,
                                top: 4,
                                marginLeft: 0
                            },
                            dateInput: {
                                marginLeft: 36
                            }
                        }}
                        onDateChange={date => { this.setState({ date: date }) }}
                    />
                </View>
                <View style={styles.formRow}>
                    <Text style={styles.formLabel}>Event Time</Text>
                    <Picker
                        style={styles.formItem}
                        selectedValue={this.state.time1}
                        onValueChange={itemValue => this.setState({ time1: itemValue })}>
                        <Picker.Item label='1' value='1' />
                        <Picker.Item label='2' value='2' />
                        <Picker.Item label='3' value='3' />
                        <Picker.Item label='4' value='4' />
                        <Picker.Item label='5' value='5' />
                        <Picker.Item label='6' value='6' />
                        <Picker.Item label='7' value='7' />
                        <Picker.Item label='8' value='8' />
                        <Picker.Item label='9' value='9' />
                        <Picker.Item label='10' value='10' />
                        <Picker.Item label='11' value='11' />
                        <Picker.Item label='12' value='12' />
                    </Picker>
                    <Picker
                        style={styles.formItem}
                        selectedValue={this.state.time2}
                        onValueChange={itemValue => this.setState({ time2: itemValue })}>
                        <Picker.Item label='A.M.' value='A.M.' />
                        <Picker.Item label='P.M.' value='P.M.' />
                    </Picker>
                </View> 
                    <Input
                        placeholder='Website'
                        leftIcon={{ type: 'font-awesome', name: 'globe' }}
                        leftIconContainerStyle={{ paddingRight: 10 }}
                        selectedValue={this.state.url}
                        onValueChange={url => this.setState({ url: url })}
                    />
                    <Input
                        placeholder='Email'
                        leftIcon={{ type: 'font-awesome', name: 'envelope-o' }}
                        leftIconContainerStyle={{ paddingRight: 10 }}
                        selectedValue={this.state.email}
                        onValueChange={email => this.setState({ email: email })}
                    />
                <View style={styles.formRow}>
                    <Button
                        onPress={() => this.handleSubmission()}
                        title='Submit'
                        color='rgb(252, 166, 133)'
                        accessibilityLabel='Tap me to submit an event'
                    />
                </View>
            </ScrollView>
        );
    }
}

const styles = StyleSheet.create({
    formRow: {
        alignItems: 'center',
        justifyContent: 'center',
        flex: 1,
        flexDirection: 'row',
        margin: 20
    },
    formLabel: {
        fontSize: 18,
        flex: 2
    },
    formItem: {
        flex: 1
    },
});

export default Submission;