import * as FirebaseCore from 'expo-firebase-core'

console.log(FirebaseCore)

export default FirebaseCore
export const DB = FirebaseCore.firestore()
export const AUTH = FirebaseCore.auth()
export const GoogleAUTH = new FirebaseCore.auth.GoogleAuthProvider()