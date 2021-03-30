import { UserActionTypes } from '../../action/user/user-action-types'

const INITIAL_STATE = {
  currentUser: null,
  isSigningStart: false,
  isSignupStart: false,
  isSuccess: false,
  error: null
}
export const userReducer = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case UserActionTypes.SIGN_IN_SUCCESS:
      return {
        ...state,
        ...INITIAL_STATE,
        currentUser: action.payload,
        isSuccess: true
      }
    case UserActionTypes.SIGN_IN_FAILURE:
      return {
        ...state,
        ...INITIAL_STATE,
        error: action.payload
      }
    case UserActionTypes.SIGN_OUT_SUCCESS:
      return {
        ...state,
        ...INITIAL_STATE
      }
    case UserActionTypes.SIGN_OUT_FAILURE:
      return {
        ...state,
        ...INITIAL_STATE,
        error: action.payload
      }
    case UserActionTypes.GOOGLE_SIGN_IN_START:
    case UserActionTypes.EMAIL_SIGN_IN_START:
      return {
        ...state,
        ...INITIAL_STATE,
        isSigningStart: true
      }
    case UserActionTypes.SIGN_UP_START:
      return {
        ...state,
        ...INITIAL_STATE,
        isSignupStart: true

      }
    case UserActionTypes.SIGN_UP_SUCCESS:
      return {
        ...state,
        ...INITIAL_STATE,
        isSuccess: true
      }
    case UserActionTypes.SIGN_UP_FAILURE:
      return {
        ...state,
        ...INITIAL_STATE,
        error: action.payload
      }
    default:
      return state
  }
}
