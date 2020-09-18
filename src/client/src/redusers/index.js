import {combineReducers} from "redux";
import hotDogsReduser from './hotDogsReduser';
import hotDogReduser from './hotDogReduser';

const allRedusers = combineReducers({
    hotDogsReduser,
    hotDogReduser
});

export default allRedusers;