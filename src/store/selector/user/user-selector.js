import { createSelector } from 'reselect'

const cartSelect = (state) => state.user

export const selectCurrentUser = createSelector(
  [cartSelect],
  (user) => user.currentUser
)
