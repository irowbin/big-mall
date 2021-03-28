import {UserActionTypes} from '../../action/user/user-action-types';

const INITIAL_STATE = {
    currentUser: null
}
export const userReducer = (state = INITIAL_STATE , action) => {
    switch (action.type) {
        case UserActionTypes.SET_CURRENT_USER:
            return {
                ...state,
                currentUser: action.payload
            }
        default:
            return state

    }
}
