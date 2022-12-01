import {initializeApp} from "firebase/app"
import {getAnalytics} from "firebase/analytics"
import {getAuth} from "firebase/auth"
import {getFirestore} from "firebase/firestore"

const firebaseConfig = {
  apiKey: "AIzaSyBgm7T1V7gk3dNk9f-SkfN-AuEt9DuiQt8",
  authDomain: "identity-app-7c599.firebaseapp.com",
  projectId: "identity-app-7c599",
  storageBucket: "identity-app-7c599.appspot.com",
  messagingSenderId: "864144185949",
  appId: "1:864144185949:web:1d6079bb4edb36c1b40bb4",
  measurementId: "G-WV518G1RN4"
}

const firebase = initializeApp(firebaseConfig)
const analytics = getAnalytics(firebase)

export const auth = getAuth()
export const database = getFirestore()
