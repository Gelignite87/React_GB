import * as types from "./types";

// export const changeName = (data) => {
//     return {
//         type: types.CHANGE_NAME,
//         payload: data
//     }
// }
export const changeName = (data) => ({
        type: types.CHANGE_NAME,
        payload: data
})
// export const changeChecked = (data) => ({
//         type: types.CHANGE_CHECKBOX,
//         payload: data
//     })