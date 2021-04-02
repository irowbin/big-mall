import { UserActionTypes } from '../../action/user/user-action-types'

export const USER_INITIAL_STATE = {
  currentUser: null,
  isSigningStart: false,
  isGoogleSignInStart: false,
  isSignupStart: false,
  isSuccess: false,
  isSignOutStart: false,
  error: null,
  signInPayload: null,
  signUpPayload: null
}
export const userReducer = (state, action) => {
  switch (action.type) {
    case UserActionTypes.SIGN_IN_SUCCESS:
      return {
        ...state,
        ...USER_INITIAL_STATE,
        currentUser: action.payload,
        isSuccess: true
      }
    case UserActionTypes.SIGN_IN_FAILURE:
      return {
        ...state,
        ...USER_INITIAL_STATE,
        error: action.payload
      }
    case UserActionTypes.SIGN_OUT_SUCCESS:
      return {
        ...state,
        ...USER_INITIAL_STATE
      }
    case UserActionTypes.SIGN_OUT_FAILURE:
      return {
        ...state,
        ...USER_INITIAL_STATE,
        error: action.payload
      }
    case UserActionTypes.GOOGLE_SIGN_IN_START:
      return {
        ...state,
        ...USER_INITIAL_STATE,
        isGoogleSignInStart: true
      }
    case UserActionTypes.EMAIL_SIGN_IN_START:
      return {
        ...state,
        ...USER_INITIAL_STATE,
        isSigningStart: true,
        signInPayload: action.payload
      }
    case UserActionTypes.SIGN_OUT_START:
      return {
        ...state,
        ...USER_INITIAL_STATE,
        isSignOutStart : true,
      }
    case UserActionTypes.SIGN_UP_START:
      return {
        ...state,
        ...USER_INITIAL_STATE,
        isSignupStart: true,
        signUpPayload: action.payload
      }
    case UserActionTypes.SIGN_UP_SUCCESS:
      return {
        ...state,
        ...USER_INITIAL_STATE,
        isSuccess: true
      }
    case UserActionTypes.SIGN_UP_FAILURE:
      return {
        ...state,
        ...USER_INITIAL_STATE,
        error: action.payload
      }
    default:
      return state
  }
}
