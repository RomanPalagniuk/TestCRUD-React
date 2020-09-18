import axios from "axios";




export const RECEIVE_HOTDOGS = 'GET_HOTDOGS';

const apiUrl = 'http://127.0.0.1:5000/';

export const getHotDogs = () => {
    return (dispatch) => {
        return axios.get(`${apiUrl}`)
            .then(res => {
                dispatch({type: RECEIVE_HOTDOGS, HotDogs: res.data})
            })
            .catch(error => { throw(error); });
    };
};
