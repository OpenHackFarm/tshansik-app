import {
  UPDATE_PROFILE,
} from '../constants/actionTypes'

export default (state = {}, action) => {
  switch (action.type) {
    case UPDATE_PROFILE:
      return { ...action.payload }
    default:
      return state
  }
}
