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

export const signOut = () => ({
  type: UserActionTypes.SIGN_OUT
})


