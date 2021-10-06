import {combineReducers} from 'redux';
import topicsReducer from './topicsReducer';
import searchWordReducer from './searchWordReducer';
import learnMoreReducer from './learnMoreReducer';

const reducers = combineReducers({
    topicsReducer,
    searchWordReducer,
    learnMoreReducer,
});

export default reducers;