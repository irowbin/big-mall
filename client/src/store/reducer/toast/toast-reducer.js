import { ToastActionTypes } from '../../action/toast/toast-action-types'

const initialState = {
  toastList: []
}

export const toastReducer = (state = initialState, action) =>{
  switch (action.type) {
    case ToastActionTypes.SHOW_TOAST:
      return{
        ...state,
        toastList: [...state.toastList, action.payload]
      }
    case ToastActionTypes.HIDE_TOAST:
      return{
        ...state,
        toastList: [...state.toastList.filter(t=>t.uid !==action.payload), action.payload]
      }
    default:
      return state

  }
}
