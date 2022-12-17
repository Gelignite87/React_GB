import * as types from "./types";

export const addChat = (newChat) => ({
        type: types.ADD_CHAT,
        payload: newChat
})