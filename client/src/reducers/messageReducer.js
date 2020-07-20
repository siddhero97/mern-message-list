
import {} from "../actions/types"
import {ADD_MESSAGES, ITEMS_LOADING,GET_MESSAGES,DELETE_MESSAGES} from "../actions/types";
const initialState = {
    messages: [
    ], loading: false
};

export const messageReducer = (state = initialState, action) => {
    switch (action.type) {
        case GET_MESSAGES:
            return {
                ...state,
                messages: action.payload,
                loading: false
            };
        case DELETE_MESSAGES:
            return {
                ...state,
                messages: state.messages.filter(message => message._id !== action.payload)
            };
        case ADD_MESSAGES:
            return {
                ...state,
                messages: [action.payload, ...state.messages]
            };
        case ITEMS_LOADING:
            return {
                ...state,
                loading: true
            };
        default:
            return state;

    }

};
