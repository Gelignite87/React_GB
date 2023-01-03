import * as types from "./types";

export const addChat = (newChat) => ({
        type: types.ADD_CHAT,
        payload: newChat
})

export const deleteChat = (chatName) => ({
        type: types.DELETE_CHAT,
        payload: chatName
})

export const addMessage = (chatName, text) => ({
        type: types.ADD_MESSAGE,
        payload: { chatName, text }
})

let timeout
export const addMessageWithReply = (chatName, message) => (dispatch) => {
  dispatch(addMessage(chatName, message))

  if (message.author !== 'bot') {
    if (timeout) {
      clearTimeout(timeout)
    }

    timeout = setTimeout(() => {
      dispatch(addMessage(chatName, {
        author: 'bot',
        text: 'Im bot'
      }))
    }, 1000)
  }
}