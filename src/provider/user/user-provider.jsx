import React, { createContext, useEffect, useReducer } from 'react'
import {
  auth,
  googleAuthProvider,
  createAuthenticatedUserProfile, getCurrentUser
} from '../../firebase/firebase.service'
import {
  signInFailure,
  signInSuccess,
  signUpFailure,
  userReducer,
  checkUserSession,
  signOutSuccess,
  signOutFailure, USER_INITIAL_STATE
} from '../../store'

export const UserContext = createContext(USER_INITIAL_STATE)

const UserProvider = ({ children }) => {
  const [state, dispatch] = useReducer(userReducer, USER_INITIAL_STATE)
  const {
    isSigningStart,
    signInPayload,
    signUpPayload,
    isSignupStart,
    isSignOutStart,
    isGoogleSignInStart
  } = state

  const handleLoginInfo = async (userAuth, additionalData) => {
    const userRef = await createAuthenticatedUserProfile(userAuth, additionalData)
    userRef.get().then(snapshot => {
      dispatch(signInSuccess({
        id: snapshot.id,
        ...snapshot.data({serverTimestamps:'estimate'})
      }))
    }).catch(e => dispatch(signInFailure(e)))
  }

  const handleCheckSession = async () => {
    const userRef = await getCurrentUser()
    if (!userRef) return
    await handleLoginInfo(userRef)
  }

  const handleSignup = async () => {
    try {
      const { displayName, email, password } = signUpPayload
      const { user } = await auth.createUserWithEmailAndPassword(email, password)
      await handleLoginInfo(user, { displayName })
    } catch (e) {
      dispatch(signUpFailure(e))
    }
  }

  // handle sign in
  useEffect(() => {
    // must have values on these
    if (!(signInPayload || isSigningStart)) return
    const userSignIn = async () => {
      try {
        const { username, password } = signInPayload
        const { user } = await auth.signInWithEmailAndPassword(
          username, // email in this case
          password
        )
        //  const userRef = await createAuthenticatedUserProfile(user)
        await handleLoginInfo(user)
      } catch (e) {
        dispatch(signInFailure(e))
      }
    }
    userSignIn()
  }, [signInPayload, isSigningStart])

  // handle sign up
  useEffect(() => {
    if (!signUpPayload) return
    handleSignup()
  }, [signUpPayload, isSignupStart, handleSignup])

  useEffect(() => {
    dispatch(checkUserSession())
    handleCheckSession()
  }, [])

  useEffect(() => {
    if (!isGoogleSignInStart) return
    const googleSignIn = async () => {
      const { user } = await auth.signInWithPopup(googleAuthProvider)
      await handleLoginInfo(user)
    }
    googleSignIn()
  }, [isGoogleSignInStart])

  useEffect(() => {
    try {
      if (!isSignOutStart) return
      auth.signOut()
      dispatch(signOutSuccess())
    } catch (e) {
      dispatch(signOutFailure(e))
    }
  }, [isSignOutStart])
  return (
    <UserContext.Provider
      value={{
        state, dispatch
      }}>
      {children}
    </UserContext.Provider>
  )
}

export default UserProvider
