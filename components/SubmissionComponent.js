import React, { Component } from 'react';
import { Text, View, ScrollView, StyleSheet, Picker, Button } from 'react-native';
import { Input } from 'react-native-elements'
import DatePicker from 'react-native-datepicker';
//import TimePicker from 'react-native-simple-time-picker';

/*
<View style={styles.formRow}>
                    <Text style={styles.formLabel}>Event Time</Text>
                    <TimePicker
                        style={styles.formItem}
                        selectedValue={this.state.type}
                        selectedHours={selectedHours}
                        selectedMinutes={selectedMinutes}
                        onChange={(hours, minutes) => this.setState({ 
                            selectedHours: hours, selectedMinutes: minutes 
                      })}
                    />
                </View>
*/

class Submission extends Component {
    constructor(props) {
        super(props);

        this.state = {
            type: '',
            date: '',
            time: '',
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
            time: '',
            url: '',
            email: '',
            showModal: false
        });
    }

    render() {
        //const { selectedHours, selectedMinutes } = this.state;

        return (
            <ScrollView>
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
                    <Text style={styles.formLabel}>Event Website</Text>
                    <Input
                        style={styles.formItem}
                        placeholder='Website'
                        selectedValue={this.state.url}
                        onValueChange={url => this.setState({ url: url })}
                    />
                </View>
                <View style={styles.formRow}>
                    <Text style={styles.formLabel}>Contact Email</Text>
                    <Input
                        style={styles.formItem}
                        placeholder='Email'
                        selectedValue={this.state.email}
                        onValueChange={email => this.setState({ email: email })}
                    />
                </View>
                <View style={styles.formRow}>
                    <Button
                        onPress={() => this.handleSubmission()}
                        title='Submit'
                        color='#5637DD'
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