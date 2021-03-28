import { takeLatest, put, all, call } from 'redux-saga/effects'
import {
  auth,
  googleAuthProvider,
  createAuthenticatedUserProfile, getCurrentUser
} from '../../../firebase/firebase.service'
import { UserActionTypes } from '../../action/user/user-action-types'
import {
  signInSuccess,
  signInSFailure, signOutSuccess, signOutFailure
} from '../../action/user/user-action'

/**
 * Use reusable fn to set user state for all sign in methods of firebase
 */
function* snapshot(userAuth) {
  const userRef = yield call(createAuthenticatedUserProfile, userAuth)
  const snap = yield userRef.get()
  try {
    yield put(
      signInSuccess({
        id: snap.id,
        ...snap.data()
      })
    )
  } catch (e) {
    yield put(signInSFailure(e.message))
  }
}

// sign in with google popup
export function* signWithGoogle() {
  try {
    const { user } = yield auth.signInWithPopup(googleAuthProvider)
    yield snapshot(user)
  } catch (e) {
    yield put(signInSFailure(e.message))
  }
}

// sign with email/password
export function* signWithEmail({ payload }) {
  try {
    const { username, password } = payload
    const { user } = yield auth.signInWithEmailAndPassword(
      username, // email in this case
      password
    )
    yield snapshot(user)
  } catch (e) {
    yield put(signInSFailure(e.message))
  }
}

// sign out
function* signOut() {
  try {
    const userRef = yield auth.signOut()
    console.log(userRef)
    yield put(signOutSuccess())
  } catch (e) {
    yield signOutFailure(e.error)
  }
}


// sign out
function* isUserAuthenticated() {
  try {
    const userRef = yield getCurrentUser()
    if(!userRef) return
    yield snapshot(userRef)
  } catch (e) {
    yield signInSFailure(e.error)
  }
}


function* onGoogleSignInStart() {
  try {
    yield takeLatest(UserActionTypes.GOOGLE_SIGN_IN_START, signWithGoogle)
  } catch (e) {
    yield signInSFailure(e.message)
  }
}

function* onEmailSignInStart() {
  try {
    yield takeLatest(UserActionTypes.EMAIL_SIGN_IN_START, signWithEmail)
  } catch (e) {
    yield signInSFailure(e.message)
  }
}

function* onSignOut() {
  try {
    yield takeLatest(UserActionTypes.SIGN_OUT_START, signOut)
  } catch (e) {
    // TODO: display sign out failing message
  }
}

function* onCheckUserSession() {
  try {
    yield takeLatest(UserActionTypes.CHECK_USER_SESSION, isUserAuthenticated)
  } catch (e) {
    yield signInSFailure(e.message)
  }
}


// collection of sagas
export function* userSaga() {
  yield all([
    call(onGoogleSignInStart),
    call(onEmailSignInStart),
    call(onSignOut),
    call(onCheckUserSession)
  ])
}
