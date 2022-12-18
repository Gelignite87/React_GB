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
            return { ...state, [payload]: [] }
        case types.DELETE_CHAT:
            const chats = { ...state }
            delete chats[payload]
            return chats
        case types.ADD_MESSAGE:
            return { ...state, [payload.chatName]: [...state[payload.chatName], { author: 'user', text: payload.text }] }

        default:
            return state;
}}