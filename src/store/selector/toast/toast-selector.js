import { createSelector } from 'reselect'

const toastSelect = (state) => state.toast

export const selectToastList = createSelector(
  [toastSelect],
  (toast) => toast.toastList
)

