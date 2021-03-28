import firebase from 'firebase/app'
// Add the Firebase products that you want to use
import 'firebase/auth'
import 'firebase/firestore'

const config = {
  apiKey: 'AIzaSyBxOV4U2J9H915ytDDqn15KbHa4mBJGsNw',
  authDomain: 'irobin-466f2.firebaseapp.com',
  databaseURL: 'https://irobin-466f2.firebaseio.com',
  projectId: 'irobin-466f2',
  storageBucket: 'irobin-466f2.appspot.com',
  messagingSenderId: '886032230851',
  appId: '1:886032230851:web:cdb0e685716accf9e43576',
  measurementId: 'G-HYPHT73XCZ',
}
firebase.initializeApp(config)

export const auth = firebase.auth()
export const firestore = firebase.firestore()
export const googleAuthProvider = new firebase.auth.GoogleAuthProvider()
googleAuthProvider.setCustomParameters({ prompt: 'select_account' })

/**
 * DEV use only
 */
export const addCollectionAndDocuments = async (key, obj) => {
  const collectionRef = firestore.collection(key)
  const batch = firestore.batch()
  obj.forEach((o) => batch.set(collectionRef.doc(), o))
  return await batch.commit()
}

export default firestore

/**
 * Gets authenticated user ref from the firebase
 * @returns {Promise<unknown>}
 */
export const getCurrentUser = () => {
  return new Promise((resolve, reject)=> {
    const unSub = auth.onAuthStateChanged(userRef =>{
      unSub()
      resolve(userRef)
    }, reject)
  })
}

/**
 * Extracts user info out of user ref of firebase auth
 */
export const createAuthenticatedUserProfile = async (
  userAuthRef,
  additionalRef
) => {
  if (!userAuthRef) return Promise.resolve()

  const userRef = firestore.doc(`users/${userAuthRef.uid}`)

  const snapshot = await userRef.get()

  if (!snapshot.exists) {
    const { displayName, email } = userAuthRef
    const createdAt = new Date()
    try {
      await userRef.set({
        displayName,
        email,
        createdAt,
        ...additionalRef,
      })
    } catch (e) {
      console.error(e)
    }
  }

  return userRef
}
