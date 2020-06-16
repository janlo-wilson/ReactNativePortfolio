import React, { Component } from 'react';
import Home from './HomeComponent';
import Events from './EventsComponent';
import Favorites from './FavoritesComponent';
import Submission from './SubmissionComponent';
import { View, Platform, StyleSheet, Text, ScrollView, Image } from 'react-native';
import { createStackNavigator, createDrawerNavigator, DrawerItems } from 'react-navigation';
import { Icon } from 'react-native-elements';
import Arts from './ArtsComponent';
import Music from './MusicComponent';
import Sports from './SportsComponent';
import Volunteer from './VolunteerComponent';
//import SafeAreaView from 'react-native-safe-area-view';

const HomeNavigator = createStackNavigator(
    {
        Home: { screen: Home }
    },
    {
        navigationOptions: ({navigation}) => ({
            headerStyle: {
                backgroundColor: 'rgb(252, 166, 133)'
            },
            headerTintColor: '#fff',
            headerTitleStyle: {
                color: '#fff'
            },
            headerLeft: <Icon
                name='home'
                type='font-awesome'
                iconStyle={styles.stackIcon}
                onPress={() => navigation.toggleDrawer()}
            />
        })
    }
);

const EventsNavigator = createStackNavigator(
    {
        Events: {
            screen: Events,
            navigationOptions: ({ navigation }) => ({
                headerLeft: <Icon
                    name='calendar'
                    type='font-awesome'
                    iconStyle={styles.stackIcon}
                    onPress={() => navigation.toggleDrawer()}
                />
            })
        },
        Arts: { screen: Arts },
        Music: { screen: Music },
        Sports: { screen: Sports },
        Volunteer: { screen: Volunteer }
    },
    {
        initialRouteName: 'Events',
        navigationOptions: {
            headerStyle: {
                backgroundColor: 'rgb(252, 166, 133)'
            },
            headerTintColor: '#fff',
            headerTitleStyle: {
                color: '#fff'
            }
        }
    }
);

const FavoriteNavigator = createStackNavigator(
    {
        Favorites: { screen: Favorites }
    },
    {
        navigationOptions: ({navigation}) => ({
            headerStyle: {
                backgroundColor: 'rgb(252, 166, 133)'
            },
            headerTintColor: '#fff',
            headerTitleStyle: {
                color: '#fff'
            },
            headerLeft: <Icon
                name='heart'
                type='font-awesome'
                iconStyle={styles.stackIcon}
                onPress={() => navigation.toggleDrawer()}
            />
        })
    }
);

const SubmissionNavigator = createStackNavigator(
    {
        Submission: { screen: Submission }
    },
    {
        navigationOptions: ({navigation}) => ({
            headerStyle: {
                backgroundColor: 'rgb(252, 166, 133)'
            },
            headerTintColor: '#fff',
            headerTitleStyle: {
                color: '#fff'
            },
            headerLeft: <Icon
                name='bullhorn'
                type='font-awesome'
                iconStyle={styles.stackIcon}
                onPress={() => navigation.toggleDrawer()}
            />
        })
    }
);

const CustomDrawerContentComponent = props => (
    <ScrollView>
        <View 
            style={styles.container}
            forceInset={{top: 'always', horizontal: 'never'}}>
            <View style={styles.drawerHeader}>
                <View style={{flex: 1}}>
                    <Image source={require('./images/Beach_Sunset.png')} style={styles.drawerImage} />
                </View>
                <View style={{flex: 2}}>
                    <Text style={styles.drawerHeaderText}>What's Up North County!</Text>
                </View>
            </View>
            <DrawerItems {...props} />
        </View>
    </ScrollView>
);

const MainNavigator = createDrawerNavigator(
    {
        Home: {
            screen: HomeNavigator,
            navigationOptions: {
                drawerIcon: ({tintColor}) => (
                    <Icon
                        name='home'
                        type='font-awesome'
                        size={24}
                        color={tintColor}
                    />
                )
            }
        },
        Events: { 
            screen: EventsNavigator,
            navigationOptions: {
                drawerIcon: ({tintColor}) => (
                    <Icon
                        name='calendar'
                        type='font-awesome'
                        size={24}
                        color={tintColor}
                    />
                )
            }
        },
        Favorites: { 
            screen: FavoriteNavigator,
            navigationOptions: {
                drawerIcon: ({tintColor}) => (
                    <Icon
                        name='heart'
                        type='font-awesome'
                        size={24}
                        color={tintColor}
                    />
                )
            } 
        },
        Submission: { 
            screen: SubmissionNavigator,
            navigationOptions: {
                drawerLabel: 'Submit an Event',
                drawerIcon: ({tintColor}) => (
                    <Icon
                        name='bullhorn'
                        type='font-awesome'
                        size={24}
                        color={tintColor}
                    />
                )
            } 
        }
    },
    {
        drawerBackgroundColor: 'rgb(243, 236, 223)',
        contentComponent: CustomDrawerContentComponent
    }
);

class Main extends Component {
    render() {
        return (
            <View style={{
                flex: 1,
                paddingTop: Platform.OS === 'ios' ? 0 : Expo.Constants.statusBarHeight
            }}>
                <MainNavigator />
            </View>
        );
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
    },
    drawerHeader: {
        backgroundColor: 'rgb(252, 166, 133)',
        height: 140,
        alignItems: 'center',
        justifyContent: 'center',
        flex: 1,
        flexDirection: 'row'
    },
    drawerHeaderText: {
        color: '#fff',
        fontSize: 24,
        fontWeight: 'bold',
        fontStyle: 'italic'
    },
    drawerImage: {
        margin: 10,
        height: 60,
        width: 60
    },
    stackIcon: {
        marginLeft: 10,
        color: '#fff',
        fontSize: 24
    }
});

export default Main;