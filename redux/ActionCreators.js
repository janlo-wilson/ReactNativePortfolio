import * as ActionTypes from './ActionTypes';
import { baseUrl } from '../shared/baseUrl';

export const fetchArts = () => dispatch => {
    return fetch(baseUrl + 'arts')
        .then(response => {
            if (response.ok) {
                return response;
            } else {
                const error = new Error(`Error ${response.status}: ${response.statusText}`);
                error.response = response;
                throw error;
            }
        },
            error => {
                const errMess = new Error(error.message);
                throw errMess;
            })
        .then(response => response.json())
        .then(arts => dispatch(addArts(arts)))
        .catch(error => dispatch(artsFailed(error.message)));
};

export const artsFailed = errMess => ({
    type: ActionTypes.ARTS_FAILED,
    payload: errMess
});

export const addArts = (arts) => ({
    type: ActionTypes.ADD_ARTS,
    payload: arts
});

export const fetchMusic = () => dispatch => {

    return fetch(baseUrl + 'music')
        .then(response => {
            if (response.ok) {
                return response;
            } else {
                const error = new Error(`Error ${response.status}: ${response.statusText}`);
                error.response = response;
                throw error;
            }
        },
            error => {
                const errMess = new Error(error.message);
                throw errMess;
            })
        .then(response => response.json())
        .then(music => dispatch(addMusic(music)))
        .catch(error => dispatch(musicFailed(error.message)));
};

export const musicFailed = errMess => ({
    type: ActionTypes.MUSIC_FAILED,
    payload: errMess
});

export const addMusic = music => ({
    type: ActionTypes.ADD_MUSIC,
    payload: music
});

export const fetchSports = () => dispatch => {

    return fetch(baseUrl + 'sports')
        .then(response => {
            if (response.ok) {
                return response;
            } else {
                const error = new Error(`Error ${response.status}: ${response.statusText}`);
                error.response = response;
                throw error;
            }
        },
            error => {
                const errMess = new Error(error.message);
                throw errMess;
            })
        .then(response => response.json())
        .then(sports => dispatch(addSports(sports)))
        .catch(error => dispatch(sportsFailed(error.message)));
};

export const sportsFailed = errMess => ({
    type: ActionTypes.SPORTS_FAILED,
    payload: errMess
});

export const addSports = sports => ({
    type: ActionTypes.ADD_SPORTS,
    payload: sports
});

export const fetchVolunteer = () => dispatch => {

    return fetch(baseUrl + 'volunteer')
        .then(response => {
            if (response.ok) {
                return response;
            } else {
                const error = new Error(`Error ${response.status}: ${response.statusText}`);
                error.response = response;
                throw error;
            }
        },
            error => {
                const errMess = new Error(error.message);
                throw errMess;
            })
        .then(response => response.json())
        .then(volunteer => dispatch(addVolunteer(volunteer)))
        .catch(error => dispatch(volunteerFailed(error.message)));
};

export const volunteerFailed = errMess => ({
    type: ActionTypes.VOLUNTEER_FAILED,
    payload: errMess
});

export const addVolunteer = volunteer => ({
    type: ActionTypes.ADD_VOLUNTEER,
    payload: volunteer
});

export const postFavorite = campsiteId => dispatch => {
    setTimeout(() => {
        dispatch(addFavorite(campsiteId));
    }, 2000);
};

export const addFavorite = campsiteId => ({
    type: ActionTypes.ADD_FAVORITE,
    payload: campsiteId
});

export const deleteFavorite = campsiteId => ({
    type: ActionTypes.DELETE_FAVORITE,
    payload: campsiteId
});