import * as types from './types'

export const fetchData = (api) => ({
  type: types.FETCH_DATA,
  payload: api
})

export const fetchDataMiddleware = (api) => async (dispatch) => {
    try {
        const res = await fetch(api)
        if (res.ok) {
            const data = await res.json()
            dispatch(fetchData(data))
        }
    } catch (error) {
        dispatch(fetchData([{ id: 1, error: error.message }]))
    }
}