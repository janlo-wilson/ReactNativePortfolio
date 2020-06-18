import * as ActionTypes from './ActionTypes';

export const sports = (state = { isLoading: true,
                                     errMess: null,
                                     campsites: []}, action) => {
    switch (action.type) {
        case ActionTypes.ADD_SPORTS:
            return {...state, isLoading: false, errMess: null, campsites: action.payload};

        case ActionTypes.SPORTS_LOADING:
            return {...state, isLoading: true, errMess: null, campsites: []}

        case ActionTypes.SPORTS_FAILED:
            return {...state, isLoading: false, errMess: action.payload};

        default:
          return state;
      }
};