import * as types from './types'

export const articlesReducer = (state = [{ id:1, error: ' ' }], action) => {
  const { type, payload } = action
    switch (type) {
        case types.FETCH_DATA:
            return payload

    default:
      return state
  }
}