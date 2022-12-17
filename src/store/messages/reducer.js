import * as types from "./types";

const initialState = {
    default: [
        { author: 'user', text: 'one text' },
        { author: 'user', text: 'two text' }
    ]
}

export const messagesReducer = (state = initialState, action) => {
    const {type, payload} = action
    switch (type) {
        case types.ADD_CHAT:
            return { ...state, [payload]:[] }

        default:
            return state;
}}