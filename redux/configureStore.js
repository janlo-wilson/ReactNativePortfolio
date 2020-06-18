import {createStore, combineReducers, applyMiddleware} from 'redux';
import thunk from 'redux-thunk';
import logger from 'redux-logger';
import { arts } from './arts';
import { music } from './music';
import { sports } from './sports';
import { volunteer } from './volunteer';
//import { favorites } from './favorites';

export const ConfigureStore = () => {
    const store = createStore(
        combineReducers({
            arts,
            music,
            sports,
            volunteer
        }),
        applyMiddleware(thunk, logger)
    );

    return store;
}