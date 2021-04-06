import { createSelector } from 'reselect'

const userSelect = (state) => state.user

export const selectCurrentUser = createSelector(
  [userSelect],
  (user) => user.currentUser
)

export const selectIsSignupStart = createSelector(
  [userSelect],
  (user)=> user.isSignupStart
)
export const selectIsSuccess = createSelector(
  [userSelect],
  (user)=> user.isSuccess
)
export const selectIsSigningStart = createSelector(
  [userSelect],
  (user)=> user.isSigningStart
)
export const selectError = createSelector(
  [userSelect],
  (user)=> user.error
)
