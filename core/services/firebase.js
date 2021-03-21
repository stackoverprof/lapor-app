import * as FirebaseCore from 'expo-firebase-core'
import * as firebase from 'firebase'

firebase.initializeApp(FirebaseCore.DEFAULT_APP_OPTIONS)

console.log(firebase)

export default firebase
export const DB = firebase.firestore()
export const AUTH = firebase.auth()
export const GoogleAUTH = new firebase.auth.GoogleAuthProvider()