import {} from "./types";
import {ADD_MESSAGES , DELETE_MESSAGES, GET_MESSAGES, ITEMS_LOADING} from "./types";
import * as axios from "axios";
export const getMessages = () => dispatch => {
    dispatch(setItemsLoading());
    axios.get("/api/messages")
        .then(res => dispatch({
            type: GET_MESSAGES,
            payload: res.data
        }));
};

export const addMessage = message => dispatch => {
   axios.post("/api/messages", message)
       .then(res => dispatch({
           type: ADD_MESSAGES,
           payload: res.data
       }));
};

export const deleteMessage = id => dispatch  => {
    axios.delete('/api/messages/'+id)
        .then(res => dispatch({
            type: DELETE_MESSAGES,
            payload: id
        }))
};


export const setItemsLoading = () => {
    return {
        type: ITEMS_LOADING
    }
};