import * as ActionTypes from './ActionTypes';

export const music = (state = { isLoading: true,
                                     errMess: null,
                                     campsites: []}, action) => {
    switch (action.type) {
        case ActionTypes.ADD_MUSIC:
            return {...state, isLoading: false, errMess: null, campsites: action.payload};

        case ActionTypes.MUSIC_LOADING:
            return {...state, isLoading: true, errMess: null, campsites: []}

        case ActionTypes.MUSIC_FAILED:
            return {...state, isLoading: false, errMess: action.payload};

        default:
          return state;
      }
};