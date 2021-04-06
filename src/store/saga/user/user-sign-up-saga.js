import { all, call, takeLatest, put } from 'redux-saga/effects'
import {
  signInFailure,
  signInSuccess,
  signUpFailure,
  signUpStart
} from '../../action/user/user-action'
import { auth, createAuthenticatedUserProfile } from '../../../firebase/firebase.service'

/**
 * Use reusable fn to set user state for all sign in methods of firebase
 */
function* snapshot(userAuth, additionalData) {
  const userRef = yield call(createAuthenticatedUserProfile, userAuth, additionalData)
  const snap = yield userRef.get()
  try {
    yield put(
      signInSuccess({
        id: snap.id,
        ...snap.data()
      })
    )
  } catch (e) {
    yield put(signInFailure(e))
  }
}

function* userSignUp(action) {
  try {
    const { displayName, email, password } = action.payload
    const { user } = yield auth.createUserWithEmailAndPassword(email, password)
    yield snapshot(user, { displayName })
  } catch (e) {
    put(signUpFailure(e))
  }
}

function* onUserSignUp() {
  yield takeLatest(signUpStart, userSignUp)
}

export function* signupSaga() {
  yield all([call(onUserSignUp)])
}
