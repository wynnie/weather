import { FETCH_WEATHER } from '../actions/index';

export default function(state=[], action) {
    //console.log('Action receieved ', action);
    switch (action.type) {
        case FETCH_WEATHER:
            //return state.push(action.payload.data);
            //If we do something like above, we are mutating in place.
            //NOT GOOD !. Reducer should always return a new object
            //Below does a concat and returns a NEW array
            //return state.concat([action.payload.data]);
            //Or we can use ES6 magic like below, ... flattens out array
            return [action.payload.data, ...state];
    }
    return state;
}
