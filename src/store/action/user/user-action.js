import { UserActionTypes } from './user-action-types'

export const googleSignInStart = () => ({
  type: UserActionTypes.GOOGLE_SIGN_IN_START,
})
export const checkUserSession = () => ({
  type: UserActionTypes.CHECK_USER_SESSION,
})

export const signInSuccess = (user) => ({
  type: UserActionTypes.SIGN_IN_SUCCESS,
  payload: user,
})

export const signInSFailure = (error) => ({
  type: UserActionTypes.SIGN_IN_FAILURE,
  payload: error,
})

export const emailSignInStart = (userCred) => ({
  type: UserActionTypes.EMAIL_SIGN_IN_START,
  payload: userCred,
})

export const signOutStart = () => ({
  type: UserActionTypes.SIGN_OUT_START
})

export const signOutSuccess = () => ({
  type: UserActionTypes.SIGN_OUT_START_SUCCESS
})

export const signOutFailure = (error) => ({
  type: UserActionTypes.SIGN_OUT_START_FAILURE,
  payload: error,
})


