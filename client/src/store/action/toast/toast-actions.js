import { ToastActionTypes } from './toast-action-types'

export const showToast = (data) => ({
  type: ToastActionTypes.SHOW_TOAST,
  payload: data
})

export const hideToast = (id) => ({
  type: ToastActionTypes.HIDE_TOAST,
  payload: id
})

