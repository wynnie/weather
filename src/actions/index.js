import axios from 'axios';

const API_KEY = '591ead2b4bf626f8f28b7e54fb834c04';
//Note: Backtick for ES6 template strings
const ROOT_URL = `http://api.openweathermap.org/data/2.5/forecast?appid=${API_KEY}`;

export const FETCH_WEATHER = 'FETCH_WEATHER';

//Remember: Action creators always have to return a type field 
export function fetchWeather(city) {
    const url = `${ROOT_URL}&q=${city},us`;
    //request is a promise, which is what axios.get returns
    const request = axios.get(url);

    //console.log('Request: ', request);

    //We are returning a promise. But the reducers actually get the data. How ?
    //redux-promise is a middleware which checks for payload and if it is a promise, 
    //it stops the action and waits for the promise to get data before dispatching it to
    //all the reducers
    return {
        type: FETCH_WEATHER,
        payload: request
    };
}
