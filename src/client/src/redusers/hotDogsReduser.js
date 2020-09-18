
import { RECEIVE_HOTDOGS } from '../actions';


const initialState = {  }
export default function hotDogsReducer(state = initialState, action) {
    console.log(action);
    switch (action.type) {
        case RECEIVE_HOTDOGS:
            return {...state, HotDogs:action.HotDogs};

        default:
            return state;
    };

};