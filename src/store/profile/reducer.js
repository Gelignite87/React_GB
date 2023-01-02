import * as types from "./types";

const initialState = {
    name: 'Goga',
    checked: true
}

export const profileReducer = (state = initialState, action) => {
    const {type, payload} = action
    switch (type) {
        case types.CHANGE_NAME:
            return { ...state, name: payload }
        case types.CHANGE_CHECKBOX:
            return { ...state, checked: payload }
        case types.IS_AUTH:
            return { ...state, isAuth: payload }

        default:
            return state;
}
}