import * as ActionTypes from './ActionTypes';

export const volunteer = (state = { isLoading: true,
                                     errMess: null,
                                     campsites: []}, action) => {
    switch (action.type) {
        case ActionTypes.ADD_VOLUNTEER:
            return {...state, isLoading: false, errMess: null, campsites: action.payload};

        case ActionTypes.VOLUNTEER_LOADING:
            return {...state, isLoading: true, errMess: null, campsites: []}

        case ActionTypes.VOLUNTEER_FAILED:
            return {...state, isLoading: false, errMess: action.payload};

        default:
          return state;
      }
};