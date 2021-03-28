import { UserActionTypes } from '../../action/user/user-action-types'

const INITIAL_STATE = {
  currentUser: null,
  isSigningIn: false,
  error: null,
}
export const userReducer = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case UserActionTypes.SIGN_IN_SUCCESS:
      return {
        ...state,
        currentUser: action.payload,
        error: null,
        isSigningIn: false,
      }
    case UserActionTypes.SIGN_IN_FAILURE:
      return {
        ...state,
        error: action.payload,
        isSigningIn: false,
      }
    case UserActionTypes.GOOGLE_SIGN_IN_START:
    case UserActionTypes.EMAIL_SIGN_IN_START:
      return {
        ...state,
        isSigningIn: true,
      }
    default:
      return state
  }
}
